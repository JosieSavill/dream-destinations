import React from "react";
// import logoImg from "../assets/castle.svg";
import oysterImg from "../assets/oyster.jpg";
import oyster from "../assets/oyster.jpg";


export default function Home({ setScreen }) {
    

    return (
        
        <div className="page-wrapper">
            <div className="logo">DREAM DESTINATIONS{' '}<br></br>
                <span className="logo-description">The World is your Oyster
                {/* <img src={logoImg} width={190} height={120}/> */}
                
                </span>
                <span className="oyster-logo">
                {/* <img src={oysterImg} width={99} height={96}/> */}
                <img src={oyster} width={150} height={100}/>
                </span>
                
                
                
            </div>
            
      
        </div>
    );
}

















