import profile from "../assets/dream-one.jpg";
import {BsArrowRightShort} from 'react-icons/bs';
import oyster from "../assets/oyster.jpg";


export default function NewResume (){


    return <div className="newResume">

        <div className="resumeContainer">

            <div className="resumeHeading">
                The World is Your Oyster
                </div>

                <div className="img"> 
                    <img src={oyster} className="oyster-pic" alt="oyster logo img"/>
                </div>
            
            <div className="resumeIntroduction">
                DREAM DESTINATIONS
                </div>
            <div className="goals">    
                Our goal is to make travel and home ownership easily accessible and stress free.
                <br></br>
                <br></br>
                We enjoy working with potential buyers as well as travellers.
                </div>    
                                
           
            <div className="resumeBold">
                History
                </div>
            <div className="resume">
                Our company has been providing services globally for a 20 years.
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

            <div className="img">
                <img src={profile} className="profile-pic" alt="iceland img"/>
            </div>
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