import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import oyster from "../assets/oyster-tan-gray.gif";
import { BsList } from "react-icons/bs";

export default function MobileNav() {
  return (
    <Navbar expand="lg" className="mobile-nav">
      <Container className=''>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <BsList style={{color: "white", fontSize: "20px"}}/>
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Reservation</Nav.Link>
            <Nav.Link href="#link">Listings</Nav.Link>
            <Nav.Link href="#link">Sign In</Nav.Link>
            <NavDropdown title="More..." id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

