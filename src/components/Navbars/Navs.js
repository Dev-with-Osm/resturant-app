import React from "react";
import './Navs.css';
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import logo from './../../assets/logo.png'


const Navs = () => {
    return (
        <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            < img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About us</Nav.Link>
                        <Nav.Link href="#link">Explore</Nav.Link>
                        <Nav.Link href="#link">Reviews</Nav.Link>
                        <Nav.Link href="#link">FAQ</Nav.Link>
                    </Nav>
                    <div className="navbar-text">
                        <Nav>
                            <Nav.Link id="btn-nav" href="https://wa.me/+212637115761"> <span className="text">212637115761</span></Nav.Link>
                            {/* <button id="btn-nav" href="#"> <span>212637115761</span></button> */}
                        </Nav>
                    </div>
                   

            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navs;