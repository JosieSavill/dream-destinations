
import img1 from "../assets/BeagzCal.jpg";
import img6 from "../assets/horses.png";
import img7 from "../assets/techblog.png";



export default function NewPortfolio (){

    return  <section className="portfolio">

       <div className="work-horeison">
           <a href="https://josiesavill.github.io/horses/">
               <div>
                   <h3>Horses</h3>
               <div className="bgBox" style={{backgroundImage: `url(${img6})`}}></div>
                  
               </div>
           </a>
           <a href="https://github.com/JosieSavill/horses" className="viewrepository">View Repository</a> 
           <p style={{ fontSize: "20px", color: "black" }}>    
                       React, HTML, JavaScript, CSS, Pexels

                   </p>   
       </div>

       <div id="horeison" className="work-horeison">
           <a href="https://josiestechblog.herokuapp.com/">
               <div>
                   <h3>TechBlog</h3>
                   <div className="bgBox" style={{backgroundImage: `url(${img7})`}}></div>
               </div>
           </a>
           <a href="https://github.com/LL8719/ShareMeal" className="viewrepository">View Repository</a>
                   
                   <p style={{ fontSize: "20px", color: "black" }}>    
                       HTML, JavaScript, CSS

                   </p> 

       </div>

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

       </section>
}
