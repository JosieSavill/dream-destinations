import Nav from "./Nav";
import Footer from "./Footer";
import img1 from "../assets/BeagzCal.jpg";
import img2 from "../assets/Horiseon.jpg";
import img3 from "../assets/campeones.jpg";
import img4 from "../assets/gem.jpg";
import img5  from "../assets/pleiades.jpg";
import img6 from "../assets/awakening500.png";

// import profile from "../assets/profile.jpg";

export default function Portfolio ({setScreen}){

    return <>
        <Nav setScreen={setScreen}/><main className="content">

            <div className="container">
                <br></br>
                <br></br>

                <h2 style={{ fontSize: '20px'}}>Click on any image to visit</h2>

                <br></br>
                <br></br>
        
        
    
     <section id="work" className="portfolio">

        <div id="horeison" className="work-horeison">
            <a href="https://josiesavill.github.io/HoriseonWebsite/">
                <div>
                    <h3>Horses</h3>
                    <img src={img6} style={{width: "500px"}}
                    className="horeison" alt="img of horse"/>
                </div>
            </a>
            <a href="https://josiesavill.github.io/horses/" style={{ fontSize: "20px" }}>View Repository</a> 
        </div>

        <div id="horeison" className="work-horeison">
            <a href="https://josiesavill.github.io/space-weather-blog/">
                <div>
                    <h3>Space Weather Blog</h3>
                    <img src={img5} style={{width: "500px"}}
                    className="horeison" alt="img of pleiades"/>
                </div>
            </a>
            <a href="https://github.com/JosieSavill/space-weather-blog" style={{ fontSize: "20px" }}>View Repository</a>
        </div>

        <div id="horeison" className="work-horeison">
            <a href="https://josiesavill.github.io/beagzcal/">
                <div>
                    <h3>Beagz & Cal</h3>
                    <img src={img1} style={{width: "500px"}}
                    className="horeison" alt="img of dog and cat"/>
                </div>
            </a>
            <a href="https://github.com/JosieSavill/beagzcal" style={{ fontSize: "20px" }}>View Repository</a>
        </div>

        <div id="horeison" className="work-horeison">
            <a href="https://josiesavill.github.io/gem/">
                <div>
                    <h3>Gem</h3>
                    <img src={img4} style={{width: "500px"}}
                    className="horeison" alt="img of kitten"/>
                </div>
            </a>
            <a href="https://github.com/JosieSavill/gem" style={{ fontSize: "20px" }}>View Repository</a>
        </div>


        <div id="horeison" className="work-horeison">
            <a href="https://josiesavill.github.io/campeones/">
                <div>
                    <h3>Campeones</h3>
                    <img src={img3} style={{width: "500px"}}
                    className="horeison" alt="img of argentine flag"/>
                </div>
            </a>
            <a href="https://github.com/JosieSavill/campeones" style={{ fontSize: "20px" }}>View Repository</a>
        </div>

        <div id="horeison" className="work-horeison">
            <a href="https://josiesavill.github.io/HoriseonWebsite/">
                <div>
                    <h3>Horeison Website</h3>
                    <img src={img2} style={{width: "500px"}}
                    className="horeison" alt="img of office workers"/>
                </div>
            </a>
            <a href="https://github.com/JosieSavill/HoriseonWebsite" style={{ fontSize: "20px" }}>View Repository</a>
        </div>

        
        




        

        

       

      
    </section> 

    </div>
    
    
</main>
<br></br>
<br></br>
<Footer />
</>
}
