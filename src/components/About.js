import Nav from "./Nav";


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
                        
                                <button className="portallink">
                                    <ul><li><a onClick={()=>setScreen("about")}>Home</a></li></ul>
                                </button>

                                <button className="portallink">
                                    <ul><li><a onClick={()=>setScreen("resume")} >About</a></li></ul>
                                </button>

                                <button className="portallink">
                                    
                                    <ul><li><a onClick={()=>setScreen("portfolio")}>Portfolio</a></li></ul>
                                </button>

                                <div className="footer-container">
                
                                    {screen === "about" && <Footer type="desktop"/>}

                                </div>

                    </aside>
                    {screen === "about" && <Footer type="mobile"/>}
                    <div className="feature">
                        {screen === "portfolio" && <NewPortfolio/>  }
                        {screen === "resume" && <Resume/>  }
                    </div>
            </div>
            {/* <div className="footer-container">
                
                {screen === "about" && <Footer type="desktop"/>}

            </div> */}
            
      
        
        
    </div>
        
}

