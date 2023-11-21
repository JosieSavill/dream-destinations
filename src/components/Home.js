import React from "react";
// import logoImg from "../assets/castle.svg";
import oysterImg from "../assets/oyster.jpg";


export default function Home({ setScreen }) {
    

    return (
        
        <div className="page-wrapper">
            <div className="logo">DREAM DESTINATIONS{' '}<br></br>
                <span className="logo-description">The World is your Oyster
                {/* <img src={logoImg} width={190} height={120}/> */}
                
                </span>
                <span className="oyster-logo">
                <img src={oysterImg} width={99} height={96}/>
                </span>
                
                
                
            </div>
            
      
        </div>
    );
}

















