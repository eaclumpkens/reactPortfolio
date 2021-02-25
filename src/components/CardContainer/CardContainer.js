import React from "react";
import Cards from "../Cards/Cards";
import { CardDeck } from "react-bootstrap";
import "./CardContainer.css"

function CardContainer() {
    return(
        <CardDeck>
            <Cards />
        </CardDeck>
    )
};

export default CardContainer;