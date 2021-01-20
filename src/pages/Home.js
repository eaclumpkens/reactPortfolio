import React from "react";
import {
    Container,
    Col,
    Row
} from "react-bootstrap";
import Style from "../assets/Style";

function Home() {

    return(
        <Container style={Style.animation} className="animate__animated animate__fadeIn">
            <Row><Col/></Row>
            <Row>
                <Col>
                    <h1 style={Style.header}>Hello!</h1>
                </Col>
            </Row>
            <Row>
            <Col></Col>
            <Col xs={5} style={Style.body}>
                <p>
                    Welcome to my website! My name is <strong>Elisabeth 
                    Clumpkens</strong> and here you will find different 
                    web development projects of mine. I've been messing 
                    around with programming since late 2018 and am 
                    excited to continue improving my fluency as a 
                    developer.
                    <br/><br/>
                    I'm currently working on a full-stack web development 
                    certificate at the University of Richmond with an 
                    expected completion date of Feb 2021. 
                    <br/><br/>
                    These, as well as any additional projects, can be 
                    accessed via my portfolio page. Feel free to utilize
                    <strong> the contact links below</strong> if you'd 
                    like to reach out. Thanks!
                </p>
            </Col>
            <Col></Col>
            </Row>
        </Container>
    )
};

export default Home;
