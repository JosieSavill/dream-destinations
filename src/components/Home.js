import React from "react";
// import logoImg from "../assets/castle.svg";
// import oysterImg from "../assets/oyster.jpg";
// import oyster from "../assets/oyster.jpg";
import tanOyster from "../assets/oyster-tan-gray.gif";


export default function Home({ setScreen }) {
    

    return (
        
        <div className="page-wrapper">
            <div className="logo">DREAM DESTINATIONS{' '}<br></br>
                <span className="logo-description">The World is your Oyster
                </span>
                <span className="oyster-logo">
                <img src={tanOyster} width={129} height={76}/>
                </span>
            </div>
            
      
        </div>
    );
}

















