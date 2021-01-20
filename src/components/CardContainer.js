import React from "react";
import Cards from "./Cards";
import { CardDeck } from "react-bootstrap";

function CardContainer() {
    return(
        <CardDeck className="container-fluid">
            <Cards />
        </CardDeck>
    )
};

export default CardContainer;