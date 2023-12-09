import linkLogo from "../assets/linkedin-logo.png";
import {  FaLinkedin } from 'react-icons/fa';


export default function Footer({type}){

    return <footer className={`footer ${type}`}>
        
        <a href="https://www.linkedin.com/company/gtp-greek-travel-pages-tourism-&-travel-guide/about/" className="linkedinlogo" >
        <FaLinkedin/> LinkedIn</a>
        
        
        
    </footer>
}