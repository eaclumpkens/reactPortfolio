import React from "react";
import { 
    Card,
    Col 
} from "react-bootstrap";

function Cards() {
    const API = require("../utils/Projects.js");
    const Projects = API.default;
    
    const allCards = Projects.map((e) => {
        return(
            <Col>
                <Card >
                    <Card.Img variant="top" src={e.image} />
                    <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>
                        {e.lang}
                        <br />
                        {e.tech}
                        <br />
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