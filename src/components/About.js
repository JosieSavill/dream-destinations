import Nav from "./Nav";

// import profile from "../assets/profile.jpg";
import myVideo  from "../assets/dark-horse.mp4";
import Footer from "./Footer";
import NewPortfolio from "./NewPortfolio";
import Resume from "./NewResume";








export default function About ({setScreen, screen}){
    return <div>
        <Nav setScreen={setScreen}/>
        <div className="video-background">
                <video autoPlay loop muted style={{width: "100%"}}>
                    <source src={myVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="row">
                    <aside className="aside-contact">
                        
                        {/* <section className="aside-contact-links">
                            <img src={profile} className="profile-pic" alt="JosieSavill img"/>
                        </section> */}
                        
                        {/* <section id="about" className="aside-about"> */}
                            <div className="aside-about">
                            
                                

                                {/* <p>    
                                    My goal is to make information easily accessible and visually appealing.
                                </p>    
                                
                                <p>    
                                    I enjoy collaboration, as well as researching and creating design solutions.

                                </p> */}

                                <button className="portallink">
                                    <ul><li><a onClick={()=>setScreen("resume")} >About</a></li></ul>
                                </button>

                                <button className="portallink">
                                    
                                    <ul><li><a onClick={()=>setScreen("portfolio")}>Portfolio</a></li></ul>
                                </button>

                                <button className="portallink">
                                    
                                    <ul><li><a onClick={()=>setScreen("about")}>Home</a></li></ul>
                                </button>

                                {/* <button className="portallink">
                                <ul><li><a href="mailto:FiordaSavillJosie@gmail.com">Contact</a></li></ul>
                                </button> */}

                                
                                

                                
                                
                                
                                
                                
                            </div>

                            
                            
                        {/* </section> */}

                        

                    </aside>
                    <div className="feature">
                        {screen === "portfolio" && <NewPortfolio/>  }
                        {screen === "resume" && <Resume/>  }
                    </div>
            </div>
        
        <Footer />
        
    </div>
        
}

