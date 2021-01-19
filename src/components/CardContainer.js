import React from "react";
import Cards from "./Card"
import { 
    Col,
    CardDeck,
    Card
} from "react-bootstrap";

function CardContainer() {
    return(
        <CardDeck className="container-fluid">
            <Cards title={"Title"} description={"description"} image={"image"} lang={"HTML"} tech={"tech"} />
        </CardDeck>
    )
};

export default CardContainer;