import linkLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.jpg";



export default function Footer(){

    return <footer className="footer">
        
        <a href="https://www.linkedin.com/in/josie-fiorda-savill-bab409277?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLgeyQMJiQ%2Be47N5nspODWA%3D%3D">
        <img src={linkLogo} style={{width: "20px", height: "20px"}} /> LinkedIn</a>
        <a href="https://github.com/JosieSavill">
        <img src={githubLogo}  style={{width: "20px", height: "20px"}}/> GitHub</a>
        <a href="https://stackexchange.com/users/27657333/josie-fiorda-savill"><img src="../assets/stack-exchange-logo-transparent100.png" style={{width:"20px", height: "20px"}}/>stackexchange</a>
        
        <h3>Updated: May, 2023</h3>
        
        
    </footer>
}