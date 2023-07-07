import Nav from "./Nav";
import Footer from "./Footer";
import img1 from "../assets/BeagzCal.jpg";
// import img2 from "../assets/Horiseon.jpg";
// import img3 from "../assets/campeones.jpg";
// import img4 from "../assets/gem.jpg";
// import img5  from "../assets/pleiades.jpg";
import img6 from "../assets/horses.png";
import img7 from "../assets/ShareMealDesktop.png";

// import profile from "../assets/profile.jpg";

export default function Portfolio ({setScreen}){

    return <>
        <Nav setScreen={setScreen}/><main className="content">

            <div className="container">
                <br></br>
                <br></br>

                

                <h2 style={{ fontSize: '20px'}}>Click image to visit:</h2>
                

                
                

                <br></br>
                
        
        
    
     <section id="work" className="portfolio">

        <div id="horeison" className="work-horeison">
            <a href="https://josiesavill.github.io/horses/">
                <div>
                    <h3>Horses In America</h3>
                <div className="bgBox" style={{backgroundImage: `url(${img6})`}}></div>
                   
                </div>
            </a>
            <a href="https://github.com/JosieSavill/horses" className="viewrepository">View Repository</a> 
            <p style={{ fontSize: "20px", color: "black" }}>    
                        React, HTML, JavaScript, CSS, Pexels

                    </p>   
        </div>

        <div id="horeison" className="work-horeison">
            <a href="https://sharemeal.herokuapp.com/">
                <div>
                    <h3>ShareMeal</h3>
                    <div className="bgBox" style={{backgroundImage: `url(${img7})`}}></div>
                </div>
            </a>
            <a href="https://github.com/LL8719/ShareMeal" className="viewrepository">Group Project-View Repository</a>
                    
                    <p style={{ fontSize: "20px", color: "black" }}>    
                        Styled Header/Footer/Navbar using HTML, JavaScript, CSS, Pexels, Chakra

                    </p> 

        </div>

        {/* <div id="horeison" className="work-horeison">
            <a href="https://josiesavill.github.io/space-weather-blog/">
                <div>
                    <h3>Space Weather Blog</h3>
                    <div className="bgBox" style={{backgroundImage: `url(${img5})`}}></div>
                </div>
            </a>
            <a href="https://github.com/JosieSavill/space-weather-blog" className="viewrepository">View Repository</a>
        </div> */}

        <div id="horeison" className="work-horeison">
            <a href="https://josiesavill.github.io/beagzcal/">
                <div>
                    <h3>Beagz & Cal</h3>
                    <div className="bgBox" style={{backgroundImage: `url(${img1})`}}></div>
                </div>
            </a>
            <a href="https://github.com/JosieSavill/beagzcal" className="viewrepository">View Repository</a>
            <p style={{ fontSize: "20px", color: "black" }}>    
                        React

                    </p> 
        </div>

        {/* <div id="horeison" className="work-horeison">
            <a href="https://josiesavill.github.io/gem/">
                <div>
                    <h3>Gem</h3>
                    <div className="bgBox" style={{backgroundImage: `url(${img4})`}}></div>
                </div>
            </a>
            <a href="https://github.com/JosieSavill/gem" className="viewrepository">View Repository</a>
        </div> */}


        {/* <div id="horeison" className="work-horeison">
            <a href="https://josiesavill.github.io/campeones/">
                <div>
                    <h3>Campeones</h3>
                    <div className="bgBox" style={{backgroundImage: `url(${img3})`}}></div>
                </div>
            </a>
            <a href="https://github.com/JosieSavill/campeones" className="viewrepository">View Repository</a>
        </div> */}

        {/* <div id="horeison" className="work-horeison">
            <a href="https://josiesavill.github.io/HoriseonWebsite/">
                <div>
                    <h3>Horeison Website</h3>
                    <div className="bgBox" style={{backgroundImage: `url(${img2})`}}></div>
                </div>
            </a>
            <a href="https://github.com/JosieSavill/HoriseonWebsite" className="viewrepository">View Repository</a>
        </div> */}

        
        




        

        

       

      
    </section> 

    </div>
    
    
</main>
<br></br>
<br></br>
<Footer />
</>
}
