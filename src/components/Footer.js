import React from "react";
import { 
    Nav,
    Container,
    Row,
    Col
} from "react-bootstrap";

function Footer() {
    return(
        <Container>
            <Row>
                <Col>
                    <Nav className="justify-content-center" sticky="bottom">
                        <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;