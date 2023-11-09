import Nav from "./Nav";


import myVideo  from "../assets/dark-horse.mp4";
import Footer from "./Footer";
import NewPortfolio from "./NewPortfolio";
import Resume from "./NewResume";
import Home from "./Home"







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
                        <ul><li><a onClick={()=>setScreen("home")}>Home</a></li></ul>
                    </button>

                    <button className="portallink">
                        <ul><li><a onClick={()=>setScreen("resume")}>About</a></li></ul>
                    </button>

                    <button className="portallink">
                        <ul><li><a onClick={()=>setScreen("portfolio")}>North America</a></li></ul>
                    </button>

                    <button className="portallink">
                        <ul><li><a onClick={()=>setScreen("portfolio")}>South America</a></li></ul>
                    </button>

                    <button className="portallink">
                        <ul><li><a onClick={()=>setScreen("portfolio")}>Europe</a></li></ul>
                    </button>

                    <button className="portallink">
                        <ul><li><a onClick={()=>setScreen("portfolio")}>Asia</a></li></ul>
                    </button>

                    
                    <button className="portallink createAccount" style={{ border: '2px solid white', padding: '10px' }}>
                        <ul>
                            <li>
                            <a onClick={() => setScreen("portfolio")}>Create Account</a>
                            </li>
                        </ul>
                    </button>

                </aside>
                {/* {screen === "about" && <Footer type="mobile"/>} */}
                <div className="feature">
                    {screen === "portfolio" && <NewPortfolio/>  }
                    {screen === "resume" && <Resume/>  }
                    {screen === "home" && <Home/> }
                </div>
                
               
                
              
            </div>
        
    </div>
        
}

