import { React } from "react";
import { 
    Row,
    Col,
    Nav,
    Navbar,
    Image
} from "react-bootstrap";
import "./NavTabs.css";

function NavTabs() {

  return (  
    <Row className="nav-container">
      <Col>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href={`${process.env.PUBLIC_URL}/home`}>
          <Image
            src="./assets/bioPic.PNG"
            width="110"
            height="110"
            className="d-inline-block align-top logo"
            alt="Cartoon Logo of Elisabeth"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav 
            variant="pills" 
            className="ml-auto"
          >
            <Nav.Item>
              <Nav.Link id="nav-link" eventKey="home" href={`${process.env.PUBLIC_URL}/`}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link id="nav-link" eventKey="portfolio" href={`${process.env.PUBLIC_URL}/portfolio`}>
                Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link id="nav-link" target="_blank" eventKey="resume" href="https://drive.google.com/file/d/1nFf0nSYoyxPWD3SqKUMFnMGjnz9ly5lt/view?usp=sharing">
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
}

export default NavTabs;
