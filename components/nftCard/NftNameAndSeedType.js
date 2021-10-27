import React from 'react'

export default function NftNameAndSeedType({name}) {
    return (
        <div className = "nameAndSeedType">
           <div className="nftName">
           {
               name
           }
           </div>
           <div className="seedImage">
           </div>

           <style jsx >{`
           @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
           .nameAndSeedType {
              
               display: flex;
               justify-content : space-between;
               height : 57px;
               margin-top : 20px;
               margin-left : 20px;              
           }
            .nftName { 
                color : white;  
                font-family : Poppins;
                text-align : left;
                font-size : 20px;
                line-height : 57px
            }
            .seedImage {
                background-image: url("gemImg.png"); 
                width : 51px;
                height : 40px;
               
                background-size: 31px 40px;
                background-repeat : no-repeat;
                margin-top : 7px;
            }
            `}
            </style>

        </div>
    )
}
