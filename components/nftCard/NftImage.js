import React from 'react'

export default function NftImage() {
    return (
        <>
            <div className = "nftImage"/>

            <style jsx >{`
            .nftImage { 
                background-image: url("image.png"); 
                background-color: #cccccc;
                width : 360px;
                height : 360px;
            }
            `}
            </style>
        </>

    )
}
