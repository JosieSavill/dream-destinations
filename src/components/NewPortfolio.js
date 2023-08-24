import {BsArrowRightShort} from 'react-icons/bs';
import img1 from "../assets/dream-two.jpg";
import img6 from "../assets/dream-four.jpg";
import img7 from "../assets/dream-three.jpg";



export default function NewPortfolio (){

    return  <section className="portfolio">

        

       <div className="projects">
           <a href="https://youtu.be/2sr9MGkkeks">
               <div>
                   <h3>Swedish Fjords</h3>
               <div className="bgBox" style={{backgroundImage: `url(${img6})`}}></div>
                  
               </div>
           </a>
           <a className="viewrepository" href="https://1drv.ms/w/s!AhfCqpI38Ls5g-M9CstLxjYJJ_sgjg?e=RrjkRv"><BsArrowRightShort/>Current Listings</a> 
       </div>

       <div id="horeison" className="projects">
           <a href="https://youtube.com/shorts/7caLsT1_Ios?si=UQOEW4zrJp3kfCS5">
               <div>
                   <h3>Amazing Tibet</h3>
                   <div className="bgBox" style={{backgroundImage: `url(${img7})`}}></div>
               </div>
           </a>
           
           <a className="viewrepository" href="https://1drv.ms/w/s!AhfCqpI38Ls5g-M_qlUotcvnklwAsw?e=KM2RKn"><BsArrowRightShort/>Current Listings</a>
       </div>

       <div id="horeison" className="projects">
            <a href="https://youtu.be/bAEprBbAfZM">
                <div>
                    <h3>Sunny Greece</h3>
                    <div className="bgBox" style={{backgroundImage: `url(${img1})`}}></div>
                </div>
            </a>
            
            <a className="viewrepository" href="https://1drv.ms/w/s!AhfCqpI38Ls5g-NBvWorHluQd0SwOw?e=KIBn3L"><BsArrowRightShort/>Current Listings</a>
            
            
        </div>

       </section>
}
