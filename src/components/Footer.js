import React from "react";
import { 
    Nav,
    Row,
    Col
} from "react-bootstrap";

function Footer() {
    return(
        <Row>
            <Col>
                <Nav className={"fixed-bottom justify-content-center"}>
                    <Nav.Item>
                        <Nav.Link href="https://github.com/eaclumpkens" target= "_blank">
                            <i class="fab fa-github fa-3x"></i>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.linkedin.com/in/eaclumpkens/" target= "_blank">
                            <i class="fab fa-linkedin fa-3x"></i>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="mailto:eaclumpkens@gmail.com" target= "_blank">
                            <i class="far fa-envelope-open fa-3x"></i>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="tel:+15713779356" target= "_blank">
                            <i class="fas fa-phone fa-3x"></i>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
        </Row>
    );
}

export default Footer;