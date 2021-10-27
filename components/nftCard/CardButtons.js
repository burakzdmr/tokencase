import React from 'react'

export default function CardButtons() {
    return (
        <div className = "main">
           <button type="button" className = "buy" onClick={() => {
               console.log("clicked me!")
           }}>BUY NOW</button>
           <button type="button" className = "viewInfo" onClick={() => {
               console.log("clicked me!")
           }}>VIEW INFO</button>

           <style jsx >{`
           @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto&display=swap');
           .main {
               display: flex;
               justify-content : space-between;
               height : 57px;
               margin-top : 25px;
               margin-left : 20px;   
               font-family : Roboto;
               font-size : 13px;           
           }
            .buy { 
                width : 150px;
                height : 40px;
                background-color : #EBD200;
                color : #030404;
                
            }
            .viewInfo {
                margin-right : 20px;
                width : 150px;
                height : 40px;
                background-color : #080808;
                border-color : #EBD200;
                color : #EBD200;
                border-width : 1px;
            }
            `}
            </style>

        </div>
    )
}
