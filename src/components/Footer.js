import linkLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.jpg";
import stackLogo from "../assets/stack-exchange-logo-transparent.png";

import { FaStackExchange, FaLinkedin, FaGithub } from 'react-icons/fa';


export default function Footer({type}){

    return <footer className={`footer ${type}`}>
        
        <a href="https://www.linkedin.com/in/josiefiordasavill" className="linkedinlogo" >
        <FaLinkedin/> LinkedIn</a>
        <a href="https://github.com/JosieSavill?tab=repositories" className="githublogo">
        <FaGithub/> GitHub</a>
        <a href="https://stackexchange.com/users/27657333/josie-fiorda-savill" className="stacklogo">
            <FaStackExchange/> StackExchange
            </a>
        
        {/* <h4>Updated: May, 2023</h4> */}
        
        
    </footer>
}