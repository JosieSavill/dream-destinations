import iceland from "../assets/dream-one.jpg";
import temple from "../assets/dream-three.jpg";
import greece from "../assets/dream-two.jpg";
import {BsArrowRightShort} from 'react-icons/bs';
import tanOyster from "../assets/oyster-tan-gray.gif";


export default function About (){


    return <div className="newResume">

        <div className="resumeContainer">

           

            <div className="resumeHeading">
                DREAM DESTINATIONS
            </div>

            <div className="img">

                {/* <img src={temple} className="profile-pic" alt="chinese temple img"/> */}

                {/* <img src={iceland} className="profile-pic" alt="iceland aurora borealis img"/> */}

                <img src={greece} className="profile-pic" alt="greece white domed building img"/>

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

                <img src={temple} className="profile-pic" alt="chinese temple img"/>

                {/* <img src={iceland} className="profile-pic" alt="iceland aurora borealis img"/> */}

                {/* <img src={greece} className="profile-pic" alt="greece white domed building img"/> */}

            </div>   
           
            <div className="resumeBold">
                History
                </div>
            <div className="resume">
                Our company has been providing services globally for a 20 years.
            </div>

            <div className="img">

                {/* <img src={temple} className="profile-pic" alt="chinese temple img"/> */}

                <img src={iceland} className="profile-pic" alt="iceland aurora borealis img"/>

                {/* <img src={greece} className="profile-pic" alt="greece white domed building img"/> */}

            </div>
            
            <div className="resumeBold">
                Location
                </div>
            <div className="resume">
                Our offices are headquartered in beautiful New York, NY, United States.
                </div>
        
            <div className="resume">
                <a className='gmail' href="https://1drv.ms/w/s!AhfCqpI38Ls5g-NDcHm7ATLHYItS1A?e=RlHTo5"><BsArrowRightShort/>Download Pricing PDF</a>
                </div>

            <div className="resumeIntroduction">
                The World Is Your Oyster 
            </div>    

            <span className="oyster-logo-about">
                <img src={tanOyster} width={129} height={76}/>
            </span>

            <div  className="resumeBold">
                Contact
                </div>
            <div className="resume-email">
                1.888.888.2023<br></br>
                <a className='gmail' href="mailto:FiordaSavillJosie@gmail.com"><BsArrowRightShort/>DreamDestinations@dream.com</a>
                </div>

        </div>
        
    </div>
}