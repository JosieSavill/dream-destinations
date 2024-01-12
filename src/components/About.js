import iceland from "../assets/dream-one.jpg";
import temple from "../assets/dream-three.jpg";
import greece from "../assets/dream-two.jpg";
import {BsArrowRightShort} from 'react-icons/bs';
import tanOyster from "../assets/oyster-tan-gray.gif";


export default function About (){


    return <div className="about">

        <div className="about-container">

           

            <div className="about-heading">
                DREAM DESTINATIONS
            </div>

            <div className="img">
                <img src={greece} className="destination-pic" alt="greece white domed building img"/>
            </div>

            <div className="goals">  
                <div> 
                Our goal is to make travel and home ownership easily accessible and stress free.
                <br></br>
                <br></br>
                We enjoy working with potential buyers as well as travellers.
                </div>  
            </div> 

            <div className="img">
                <img src={temple} className="destination-pic" alt="chinese temple img"/>
            </div>   
           
            <div className="about-bold">
                History
                </div>
            <div className="about-text">
                Our company has been providing services globally for a 20 years.
            </div>

            <div className="img">
                <img src={iceland} className="destination-pic" alt="iceland aurora borealis img"/>
            </div>
            
            <div className="about-bold">
                Location
                </div>
            <div className="about-text">
                Our offices are headquartered in beautiful New York, NY, United States.
                </div>
        
            <div className="about-text">
                <a className='gmail' href="https://1drv.ms/w/s!AhfCqpI38Ls5g-NDcHm7ATLHYItS1A?e=RlHTo5"><BsArrowRightShort/>Download Pricing PDF</a>
                </div>

            <div className="about-introduction">
                The World Is Your Oyster 
            </div>    

            <span className="oyster-logo-about">
                <img src={tanOyster} width={129} height={76}/>
            </span>

            <div  className="about-bold">
                Contact
                </div>
            <div className="about-email">
                1.888.888.2023<br></br>
                <a className='gmail' href="mailto:FiordaSavillJosie@gmail.com"><BsArrowRightShort/>DreamDestinations@dream.com</a>
                </div>

        </div>
        
    </div>
}