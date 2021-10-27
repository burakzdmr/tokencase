import React from 'react'

export default function SeedNameAndCategory({cardData}) {
    return (
        <div className="main">
            <div className="left">
                <div className="seedName">
                    {
                        cardData.category.name
                    }
                </div>
                <div className="category">
                    category
                </div>
            </div>
            <div className="right">
                <div className="power">
                     {
                         cardData.category.weight
                     }
                </div>
                <div className="powerLabel">
                    power
                </div>
            </div>

            <style jsx >{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto&display=swap');
           .main {          
               display: flex;
               justify-content : space-between;
               height : 57px;
               margin-top : 25px;
               margin-left : 20px;              
           }
            .left { 
                vertical-align : center;

            }
            .seedName { 
                color : #C3C4CA;  
                font-family : Roboto;
                text-align : center;
                vertical-align : center;
                font-size : 19px;
                weight : 400;
                line-height : 22.27px;
            }
            .category { 
                color : #C3C4CA;  
                font-family : Roboto;
                vertical-align : center;
                text-align : left;
                font-size : 19px;
                weight : 400;
                line-height : 22,27px;
                opacity : 50%;
            }
            .right {
                margin-right : 20px;
                vertical-align : right;
            }
            .power { 
                vertical-align : right;
                color : #C3C4CA;  
                font-family : Roboto;
                font-size : 19px;
                text-align : right;
                weight : 400;
                line-height : 22,27px;
            }
            .powerLabel { 
                color : #C3C4CA;  
                font-family : Roboto;
                font-size : 19px;
                weight : 400;
                line-height : 22,27px;
                opacity : 50%;
            }
            `}
            </style>

        </div>
    )
}
