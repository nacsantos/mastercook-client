import React from "react";
import { Row, Col } from "react-bootstrap";

import "../RecipeContainer/RecipeContainer.css";
import "./InstructionsContainer.css";

export const InstructionsContainer = (props) => {
    const insItems = props.inst.map((element) => {
        return <li key={element.toString()} className="recipe-ingredient">{element}</li>
    })

    const handleClick = () => {
        props.updateParent();
    }

	return (
		<Row className="recipe-title-row">
            <Col className="recipe-title-col">
                <h5 className="recipe-title">Instructions</h5>
                <p className="recipe-follow">Make life easier for you, follow the recipe here:</p>
                <button className="recipe-follow-button" onClick={handleClick}>Follow Recipe</button>
                <ul className="recipe-list-ul">
                    {insItems}
                </ul>
            </Col>
        </Row>
	);
};
