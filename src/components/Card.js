import React from "react";
import { 
    Card,
    Col 
} from "react-bootstrap";

function Cards() {
    return(
        <Col>
            <Card >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    Gitworkd is a platform for hosting and exploring open source 
                    projects. It is easy to get lost in the vast world of GitHub, 
                    so we thought it would be beneficial to create a centralized 
                    ground for users to post projects and applications that are 
                    exclusively open to collaboration. Users are able to explore 
                    repositories posted by other users, save those repositories, 
                    and add their own repositories all within a simple and 
                    intuitive environment.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default Cards;