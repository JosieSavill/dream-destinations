import Nav from "./Nav";

import profile from "../assets/profile.jpg";
import myVideo  from "../assets/dark-horse.mp4";
// import Footer from "./Footer";
import linkLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.jpg";
import stackLogo from "../assets/stack-exchange-logo-transparent.png";

export default function About ({setScreen}){
    return <div>
        <Nav setScreen={setScreen}/>
        <div className="video-background">
                <video autoPlay loop muted style={{width: "100%"}}>
                    <source src={myVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        <aside className="aside-contact">
            
            <section className="aside-contact-links">
                <img src={profile} className="profile-pic" alt="JosieSavill img"/>
            </section>
            
            <section id="about" className="aside-about">
                 <div>
                    <h2 style={{ fontSize: '1.7rem', color: "white"}}>About:</h2>
                    <p>
                        All of my designs are centered on user perspectives.
                    </p>   
                    <br></br>  
                    <p>    
                        My goal is to make information easily accessible and visually appealing.
                    </p>    
                    <br></br>  
                    <p>    
                        I enjoy collaboration, as well as researching and creating design solutions.

                    </p>
                    
                    
                    
                    
                </div>

                <div>
                    <br></br>
                    <br></br>
                    <h5>LinkedIn  <a href="https://www.linkedin.com/in/josiefiordasavill" className="linkedinlogo" >
                    <img src={linkLogo} style={{width: "20px", height: "17px"}} alt="linkedin logo img"/></a></h5> 
                    <br></br>
                    <h5>GitHub  <a href="https://github.com/JosieSavill?tab=repositories" className="githublogo">
                    <img src={githubLogo}  style={{width: "20px", height: "17px"}} alt="github logo img"/></a></h5>
                    <br></br>
                    <h5>StackExchange<a href="https://stackexchange.com/users/27657333/josie-fiorda-savill" className="stacklogo">
                    <img src={stackLogo} style={{width:"88px", height: "20px"}} alt="stackexchange logo img"/>
                    </a></h5>
                </div>
                
            </section>

            

        </aside>
        <br></br>
        <br></br>
        <br></br>
        {/* <Footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'vertical' }}/> */}
    </div>
        
}

