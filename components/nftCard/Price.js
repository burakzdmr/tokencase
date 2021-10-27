import React from 'react'

export default function Price() {
    return (
        <div className="main">

            <div className="coinPrice">
                000.0000 ETH
            </div>
            <div className="usdPrice">
                000.000 USD
            </div>



            <style jsx >{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto&display=swap');
           .main {          
               justify-content : space-between;
               height : 57px;
               margin-top : 15px;
               margin-left : 20px;              
           }
            .coinPrice { 
                color : #EBD200;  
                font-family : Poppins;
                vertical-align : center;
                text-align : left;
                font-size : 30px;
                weight : 600;
                line-height : 40px;
            }
            .usdPrice { 
                color : #C3C4CA;  
                font-family : Roboto;
                vertical-align : top;
                font-size : 19px;
                text-align : left;
                weight : 400;
                line-height : 22,27px;
                opacity : 50%;
               
            }
           
            `}
            </style>

        </div>
    )
}
