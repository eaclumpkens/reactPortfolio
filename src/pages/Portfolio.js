import React from "react";
import CardContainer from "../components/CardContainer/CardContainer";
import {
    Container,
    Col,
    Row
} from "react-bootstrap";
import DocumentMeta from "react-document-meta";

function Portfolio() {

    const meta = {
        title: 'EC | Portfolio'
    }

    return(
        <div>
            <DocumentMeta {...meta} />
            <Container className="container-fluid animate__animated animate__fadeIn">
                <Row><Col/></Row>
                <Row>
                    <Col className="text-center">
                        <h1 className="header">Portfolio</h1>
                    </Col>
                </Row>
                <Row className="container">
                    <CardContainer />
                </Row>
            </Container>
        </div>
    )
};

export default Portfolio;
