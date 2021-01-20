import React from "react";
import Cards from "./Cards";
import { CardDeck } from "react-bootstrap";
import Style from "../assets/Style";

function CardContainer() {
    return(
        <CardDeck style={Style.cardDeck}>
            <Cards />
        </CardDeck>
    )
};

export default CardContainer;