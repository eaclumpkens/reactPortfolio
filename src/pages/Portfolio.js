import React from "react";
import CardContainer from "../components/CardContainer";
import {
    Container,
    Col,
    Row
} from "react-bootstrap";
import Style from "../assets/Style";

function Home() {

    return(
        <Container style={Style.animation} className="container-fluid animate__animated animate__fadeIn">
            <Row><Col/></Row>
            <Row>
                <Col className="text-center">
                    <h1 style={Style.header}>Portfolio</h1>
                </Col>
            </Row>
            <Row>
                <CardContainer />
            </Row>
        </Container>
    )
};

export default Home;
