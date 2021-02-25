import React from "react";
import { 
    Card,
    Button,
    Col
} from "react-bootstrap";
import "./Cards.css"

function Cards() {
    const API = require("../../utils/Projects.js");
    const Projects = API.default;
    
    const allCards = Projects.map((e) => {
        return(
            <Col>
                <Card className="card-container" border="secondary">
                    <Card.Img className="card-image" variant="top" src={e.image}/>
                    <Card.Body>
                        <Button className="card-header" variant="outline-dark" href={e.url} target= {"_blank"}>{e.title}</Button>
                        <Card.Text className="card-body">
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

