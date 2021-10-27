import React, { useEffect, useState } from 'react'
import styles from '../../styles/MarketPlace.module.css'
import FilterDropDown from './FilterDropDown'
import NftCard from '../nftCard/NftCard'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Marketplace() {
    const [categories, setCategories] = useState([])
    const [allCards, setAllCards] = useState([])
    const [cards, setCards] = useState([])
    const client = new ApolloClient({
        uri: 'https://api.thegraph.com/subgraphs/name/erengonen/interview',
        cache: new InMemoryCache()
    });

    async function getCards() {
        await client.query({
            query: gql`
              query {
                categoryEntities{
                    id
                    name
                  }
                cardEntities(first: 12) {
                    id
                    owner
                    background_color
                    external_url
                    animation_url
                    image
                    name
                    weight
                    total {
                      id
                      total
                      sold
                    }
                    category {
                      id
                      name
                      weight
                    }
                    sold
                
                  }
              }
            `
        })
            .then((data) => {
                setCards(data.data.cardEntities)
                setAllCards(data.data.cardEntities)
                setCategories(data.data.categoryEntities)
            });
    }

    function filterCards(filter) {
        var list = allCards.filter(x => x.category.id == filter.id);
        setCards(list);
    }


    useEffect(() => {
        getCards()
    }, []);


    return (
        <div>
            <div className={styles.header}>
                <div className={styles.logo} />
                <div className={styles.banner}>
                    NFT marketplace
                </div>
                <div className={styles.filterBar}>
                    <div className={styles.filterLabel}  >Filter by:</div>
                    <div className={styles.filter} >
                        <FilterDropDown
                            items={categories}
                            filterChange={(v) => {
                                filterCards(v)
                            }}
                        />
                    </div>

                </div>
            </div >

            <InfiniteScroll
                dataLength={cards.length}
                loader={<h3> Loading...</h3>}
                endMessage={<h4>Nothing more to show</h4>}
            >
                <div className={styles.content}>
                    {
                        cards.map(card => {
                            return (<NftCard cardData={card} key={card.id} />)
                        })
                    }
                </div>
            </InfiniteScroll>

        </div>
    )
}

