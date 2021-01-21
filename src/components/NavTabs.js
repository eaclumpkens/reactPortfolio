import { React } from "react";
import { 
    Row,
    Col,
    Nav,
    Navbar,
    Image
} from "react-bootstrap";
import Style from "../assets/Style"

function NavTabs() {

  return (  
    <Row style={Style.navContainer} >
      <Col>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="/home">
          <Image
            src="./assets/bioPic.PNG"
            width="110"
            height="110"
            className="d-inline-block align-top"
            alt="Cartoon Logo of Elisabeth"
            style= { Style.logo }
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav 
            variant="pills" 
            className="ml-auto"
          >
            <Nav.Item>
              <Nav.Link style={Style.navLink} eventKey="home" href="/home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={Style.navLink} eventKey="portfolio" href="/portfolio">
                Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={Style.navLink} target="_blank" eventKey="resume" href="https://drive.google.com/file/d/1nFf0nSYoyxPWD3SqKUMFnMGjnz9ly5lt/view?usp=sharing">
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
