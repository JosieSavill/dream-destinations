import React from "react";
import { FaStackExchange, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Home({ setScreen }) {
    

    return (
        <div className="page-wrapper">
           <div className="logo">DREAM DESTINATIONS{' '}<br></br>
                        <span className="logo-description">The World is your Oyster</span>
                        </div>
                    <div className="aside">
                    <a href="https://www.linkedin.com/company/gtp-greek-travel-pages-tourism-&-travel-guide/about/" className="linkedinlogo" >
        <FaLinkedin/> LinkedIn</a>
                        </div>   
      
        </div>
    );
}

















