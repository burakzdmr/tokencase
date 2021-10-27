import React from 'react'
import NftImage from './NftImage'
import NftNameAndSeedType from './NftNameAndSeedType'
import SeedNameAndCategory from './SeedNameAndCategory'
import Price from './Price'
import CardButtons from './CardButtons'
import styles from '../../styles/MarketPlace.module.css'
export default function NftCard({ cardData} ) {
    return (
        <div className="nftCard">
            <NftImage/>
            <NftNameAndSeedType name = {cardData.name}/>
            <SeedNameAndCategory cardData={cardData}/>
            <Price/>
            <CardButtons/>
            <style jsx >{`
            .nftCard { 
                background-color: #080808;
                width : 360px;
                margin-left: 20px;
                margin-right: 20px;
                margin-bottom:35px;
            }
            `}
            </style>

            
        </div>
    )
}
