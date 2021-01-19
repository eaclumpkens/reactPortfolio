import React from "react";
import { 
    Card,
    Col 
} from "react-bootstrap";

function Cards(props) {
    return(
        <Col>
            <Card >
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.lang}
                    <br />
                    {props.tech}
                    <hr/>
                    {props.description}
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Cards;