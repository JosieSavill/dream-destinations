import Nav from "./Nav";
import {  FaLinkedin } from 'react-icons/fa';
import myVideo  from "../assets/dark-horse.mp4";
import Footer from "./Footer";
import NewPortfolio from "./NewPortfolio";
import Resume from "./NewResume";
import Home from "./Home";
import SouthAmerica from "./SouthAmerica";
import Asia from "./Asia";
import NorthAmerica from "./NorthAmerica";
import Europe from "./Europe";



export default function About ({setScreen, screen}){
    return <div>
        <Nav setScreen={setScreen}/>
        <div className="video-background">
            <video autoPlay loop muted style={{width: "100%"}}>
                <source src={myVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <div className="feature-mobile">
                <div className="logo">DREAM DESTINATIONS{' '}<br></br>
                    <span className="logo-description">The World is your Oyster</span>
                    
                </div>
            </div>
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
                        <ul><li><a onClick={()=>setScreen("north")}>North America</a></li></ul>
                    </button>

                    <button className="portallink">
                        <ul><li><a onClick={()=>setScreen("south")}>South America</a></li></ul>
                    </button>

                    <button className="portallink">
                        <ul><li><a onClick={()=>setScreen("europe")}>Europe</a></li></ul>
                    </button>

                    <button className="portallink">
                        <ul><li><a onClick={()=>setScreen("asia")}>Asia</a></li></ul>
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
                
                
               
                
              
            </div>
            <div className="row">
            <div className="feature">
                    {screen === "portfolio" && <NewPortfolio/>  }
                    {screen === "resume" && <Resume/>  }
                    {screen === "home" && <Home/> }
                    {screen === "north" && <NorthAmerica/> }
                    {screen === "south" && <SouthAmerica/>}
                    {screen === "asia" && <Asia/>}
                    {screen === "europe" && <Europe/>}
                </div>
            </div>
            <div className="aside">
                <a href="https://www.linkedin.com/company/gtp-greek-travel-pages-tourism-&-travel-guide/about/" className="linkedinlogo" >
                <FaLinkedin/> LinkedIn</a>
            </div>  
        
    </div>
        
}

