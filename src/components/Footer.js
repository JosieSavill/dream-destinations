import linkLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.jpg";
import stackLogo from "../assets/stack-exchange-logo-transparent.png";



export default function Footer(){

    return <footer className="footer">
        
        <a href="https://www.linkedin.com/in/josiefiordasavill" className="linkedinlogo" >
        <img src={linkLogo} style={{width: "20px", height: "20px"}} alt="linkedin logo img"/> LinkedIn</a>
        <a href="https://github.com/JosieSavill?tab=repositories" className="githublogo">
        <img src={githubLogo}  style={{width: "20px", height: "20px"}} alt="github logo img"/> GitHub</a>
        <a href="https://stackexchange.com/users/27657333/josie-fiorda-savill" className="stacklogo">
            <img src={stackLogo} style={{width:"88px", height: "20px"}} alt="stackexchange logo img"/> StackExchange
            </a>
        
        {/* <h4>Updated: May, 2023</h4> */}
        
        
    </footer>
}