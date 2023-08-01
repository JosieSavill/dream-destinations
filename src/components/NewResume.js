import profile from "../assets/profile.jpg";
import {BsArrowRightShort} from 'react-icons/bs';


export default function NewResume (){


    return <div className="newResume">

        <div className="resumeContainer">

            <div className="resumeHeading">
                Josie Savill
                </div>
            <div className="profile-img">
                <img src={profile} className="profile-pic" alt="JosieSavill img"/>
            </div>
            <div className="resumeIntroduction">
                Scottsdale, Arizona
                </div>
            <div className="goals">    
                My goal is to make information easily accessible and visually appealing.
                <br></br>
                <br></br>
                I enjoy collaboration, as well as researching and creating design solutions.
                </div>    
                                
           
            <div className="resumeBold">
                Skills
                </div>
            <div className="resume">
                HTML, CSS/SCSS, JavaScript, 
                Node/Express, REST, MySQL, MongoDB
                </div>
            <div className="resumeBold">
                Libraries
                </div>
            <div className="resume">
                Chakra, Bootstrap, Skroller, Sequelize
                </div>
            <div className="resumeBold">
                Frameworks
                </div>
            <div className="resume">
                React
                </div>
            
            <div className="resumeBold">
                Projects
                </div>
            <div className="resume">
                <a className='gmail' href="https://josiesavill.github.io/horses/"><BsArrowRightShort/>Horses In America</a>
                <a className='gmail' href="https://josiestechblog.herokuapp.com/"><BsArrowRightShort/>TechBlog</a>
                <a className='gmail' href="https://josiesavill.github.io/beagzcal/"><BsArrowRightShort/>BeagzCal</a>
                </div>
            <div className="resumeBold">
                Certifications
                </div>
            <div className="resume">
                University of Arizona,<br></br> 
                Full Stack Web Developer Bootcamp June, 2023
                </div>
            <div  className="resumeBold">
                Work History
                </div>
            <div className="resume">
                Registered Respiratory Therapist 2006 thru current<br></br>
                <a className='gmail' href="https://1drv.ms/w/s!AhfCqpI38Ls5l27GKxFTiBmh7zpv?e=OD3t2L"><BsArrowRightShort/>Download Full Resume</a>
                </div>
            <div  className="resumeBold">
                Contact
                </div>
            <div className="resume-email">
                1.602.502.2022<br></br>
                <a className='gmail' href="mailto:FiordaSavillJosie@gmail.com"><BsArrowRightShort/>FiordaSavillJosie@gmail.com</a>
                </div>

        </div>
        
    </div>
}