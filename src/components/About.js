import Nav from "./Nav";

import profile from "../assets/profile.jpg";
import myVideo  from "../assets/dark-horse.mp4";
import Footer from "./Footer";

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
                        I enjoy collaboration, as well as reasearching and creating design solutions.

                    </p>
                    
                    
                    
                    
                </div> 

               
                
            </section>

            

        </aside>
        <Footer />
    </div>
        
}

