import Nav from "./Nav";

import profile from "../assets/profile.jpg";
import myVideo  from "../assets/dark-horse.mp4";
import Footer from "./Footer";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
</style>



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
                  
                    {/* <br></br> */}

                    <p>    
                        My goal is to make information easily accessible and visually appealing.
                    </p>    
                    
                    <p>    
                        I enjoy collaboration, as well as researching and creating design solutions.

                    </p>

                    <button className="portallink">
                        <a href="https://1drv.ms/w/s!AhfCqpI38Ls5l27GKxFTiBmh7zpv?e=pIg1kG" className="downloadresume" > View Resume</a>
                    </button>
                    
                    

                    
                    
                    
                    
                    
                </div>

                
                
            </section>

            

        </aside>
        
        <Footer />
        
    </div>
        
}

