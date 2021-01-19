import React from "react";
import { 
    Nav,
    Navbar,
    Image
} from "react-bootstrap";

function NavTabs() {
  return (  
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="/home">
      <Image
        src="./assets/bioPic.PNG"
        width="80"
        height="80"
        className="d-inline-block align-top"
        alt="Cartoon Logo of Elisabeth"
        rounded
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-end">
        <Nav.Link href="/portfolio" >Portfolio</Nav.Link>
        <Nav.Link target="_blank" href="https://drive.google.com/file/d/1nFf0nSYoyxPWD3SqKUMFnMGjnz9ly5lt/view?usp=sharing">Resume</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;
