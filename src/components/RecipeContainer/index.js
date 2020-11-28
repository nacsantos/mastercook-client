import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./RecipeContainer.css";
import logo from "../../assets/images/banner.jpg";
import {IngredientsContainer} from "../IngredientsContainer"
import { InstructionsContainer } from "../InstructionsContainer";

export const RecipeContainer = (props) => {
    console.log("dd",props)

    const updateParentHandle = () => {
        props.updateGrandparent();
    }

	return (
        <Container className="recipe-title-container">
            <Row className="recipe-title-row">
                <Col className="recipe-title-col">
                    <h3 className="recipe-title">{props.recipeData.title}</h3>
                    <p className="recipe-subtitle">{props.recipeData.subtitle}</p>
                    <h6 className="recipe-desciption-title">Description</h6>
                    <p className="recipe-description">{props.recipeData.description}</p>
                </Col>
                <Col className="recipe-img-col">
                    <img className="recipe-img" src={logo} alt="Test Image"/>
                </Col>
            </Row>
            <Row>
                <Col className="recipe-hr-col">
                    <hr className="recipe-hr"/>
                </Col>
            </Row>
            <IngredientsContainer ings={props.recipeData.ingredients}/>
            <Row>
                <Col className="recipe-hr-col">
                    <hr className="recipe-hr"/>
                </Col>
            </Row>
            <InstructionsContainer updateParent={updateParentHandle} inst={props.recipeData.instructions}/>
        </Container>
	);
};
