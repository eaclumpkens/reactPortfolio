import React from "react";
import { 
    Nav,
    Row,
    Col
} from "react-bootstrap";
import "./Footer.css";

function Footer() {
    return(
        <Row className="footer-row">
            <Col>
                <Nav className={"fixed-bottom justify-content-center footer"}>
                    <Nav.Item>
                        <Nav.Link href="https://github.com/eaclumpkens" target= "_blank">
                            <i className="fab fa-github fa-3x icon"></i>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.linkedin.com/in/eaclumpkens/" target= "_blank">
                            <i className="fab fa-linkedin fa-3x icon"></i>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="mailto:eaclumpkens@gmail.com" target= "_blank">
                            <i className="far fa-envelope-open fa-3x icon"></i>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="tel:+15713779356" target= "_blank">
                            <i className="fas fa-phone fa-3x icon"></i>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
        </Row>
    );
}

export default Footer;