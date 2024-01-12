import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import TopNav from "./TopNav";
// import MainNav from "./MainNav";
// import CreateAccount from './CreateAccount';
// import About from './About';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsList } from "react-icons/bs";
// import { Link } from 'react-router-dom';


export default function MobileNav({setScreen}) {

  const mainNav = [
    {
        title: "Home",
        screen: "home"
    },
    {
        title: "About",
        screen: "about"
    },
    {
        title: "North America",
        screen: "north"
    },
     {
        title: "South America",
        screen: "south"
    },
    {
        title: "Europe",
        screen: "europe"
    },
    {
        title: "Asia",
        screen: "asia"
    },
    {
        title: "CreateAccount",
        screen: "createAccount"
    }
]

  return (
    <Navbar expand="lg" className="mobile-nav">

    {/* <MainNav setScreen={setScreen}/> */}
      <Container className='mobile-nav-container'>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <BsList style={{color: "white", fontSize: "30px"}}/>
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>

            <Nav.Link href="#home">Reservations</Nav.Link>
            <Nav.Link href="#link">Listings</Nav.Link>
            <Nav.Link href="#link">Sign In</Nav.Link>
            <NavDropdown title="More..." id="basic-nav-dropdown" className='mobile-only dropdown-nav'>

              {/* <NavDropdown.Item as={Link} to="./About">About</NavDropdown.Item> */}
              {
                    mainNav.map( m => {
                        return <NavDropdown.Item onClick={()=>setScreen(m.screen)}>{m.title}</NavDropdown.Item>
                    })
                }

              
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

