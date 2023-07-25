import {BsArrowRightShort} from 'react-icons/bs';
import img1 from "../assets/BeagzCal.jpg";
import img6 from "../assets/horses.png";
import img7 from "../assets/techblog.png";



export default function NewPortfolio (){

    return  <section className="portfolio">

        

       <div className="projects">
           <a href="https://josiesavill.github.io/horses/">
               <div>
                   <h3>Horses</h3>
               <div className="bgBox" style={{backgroundImage: `url(${img6})`}}></div>
                  
               </div>
           </a>
           <a className="viewrepository" href="https://github.com/JosieSavill/horses"><BsArrowRightShort/>Repository</a> 
       </div>

       <div id="horeison" className="projects">
           <a href="https://josiestechblog.herokuapp.com/">
               <div>
                   <h3>TechBlog</h3>
                   <div className="bgBox" style={{backgroundImage: `url(${img7})`}}></div>
               </div>
           </a>
           
           <a className="viewrepository" href="https://github.com/JosieSavill/TechBlog"><BsArrowRightShort/>Repository</a>
       </div>

       <div id="horeison" className="projects">
            <a href="https://josiesavill.github.io/beagzcal/">
                <div>
                    <h3>BeagzCal</h3>
                    <div className="bgBox" style={{backgroundImage: `url(${img1})`}}></div>
                </div>
            </a>
            
            <a className="viewrepository" href="https://github.com/JosieSavill/beagzcal"><BsArrowRightShort/>Repository</a>
            
            
        </div>

       </section>
}
