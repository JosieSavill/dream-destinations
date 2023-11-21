import React from "react";
import logoImg from "../assets/castle.svg";


export default function Home({ setScreen }) {
    

    return (
        
        <div className="page-wrapper">
            <div className="logo">DREAM DESTINATIONS{' '}<br></br>
                <span className="logo-description">The World is your Oyster
                <img src={logoImg} width={190} height={120}/></span>
                
                
            </div>
            
      
        </div>
    );
}

















