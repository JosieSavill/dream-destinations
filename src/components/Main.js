import { FaLinkedin } from 'react-icons/fa'
import myVideo from '../assets/dark-horse.mp4'
import CreateAccount from './CreateAccount'
import About from './About'
import Home from './Home'
import SouthAmerica from './SouthAmerica'
import Asia from './Asia'
import NorthAmerica from './NorthAmerica'
import Europe from './Europe'
import oyster from '../assets/oyster-tan-gray.gif'
import MainNav from './MainNav'
import MobileNav from './MobileNav'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Main({ setScreen, screen }) {
    return (
        <div>
            <MobileNav setScreen={setScreen} />
            <MainNav setScreen={setScreen} />
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src={myVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="feature-mobile">
                    <div className="logo">
                        DREAM DESTINATIONS <br></br>
                        <span className="logo-description">
                            The World is your Oyster
                        </span>
                        <span className="oyster-logo">
                            <img src={oyster} width={90} height={60} />
                        </span>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="feature">
                    {screen === 'createAccount' && <CreateAccount />}
                    {screen === 'about' && <About />}
                    {screen === 'home' && <Home />}
                    {screen === 'north' && <NorthAmerica />}
                    {screen === 'south' && <SouthAmerica />}
                    {screen === 'asia' && <Asia />}
                    {screen === 'europe' && <Europe />}
                </div>
            </div>

            <div className="aside">
                <a
                    href="https://www.linkedin.com/company/gtp-greek-travel-pages-tourism-&-travel-guide/about/"
                    className="linkedinlogo"
                >
                    <FaLinkedin /> LinkedIn
                </a>
            </div>
        </div>
    )
}
