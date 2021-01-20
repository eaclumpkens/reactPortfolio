import React from "react";
import { 
    Card,
    Button,
    Col
} from "react-bootstrap";
import Style from "../assets/Style";

function Cards() {
    const API = require("../utils/Projects.js");
    const Projects = API.default;
    
    const allCards = Projects.map((e) => {
        return(
            <Col>
                <Card style={Style.cardContainer} border="secondary">
                    <Card.Img style={Style.cardImage} variant="top" src={e.image}/>
                    <Card.Body>
                    <Button style={Style.cardHeader} variant="outline-dark" href={e.url} target= {"_blank"}>{e.title}</Button>
                    <Card.Text style= {Style.cardBody}>
                        <strong>Language(s):</strong> {e.lang}
                        <br/>
                        <strong>Tech:</strong> {e.tech}
                        <hr/>
                        {e.description}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )

    });

    return (allCards);
};

export default Cards;

