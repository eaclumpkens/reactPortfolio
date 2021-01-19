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
            <Cards />
        </CardDeck>
    )
};

export default CardContainer;