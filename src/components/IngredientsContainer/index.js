import React, {useState, useEffect} from "react";
import { Row, Col } from "react-bootstrap";

import "../RecipeContainer/RecipeContainer.css";
import "./IngredientsContainer.css";
import {CheckboxList} from "../CheckboxList"

export const IngredientsContainer = (props) => {
    const [ingredient, setIngredient] = useState(false);

    useEffect(() => {    
        const vals = props.ings.map((el) => {
            return {el:el}
        })
    });

    const ingItems = props.ings.map((element) => {
        return <li key={element.toString()} className="recipe-ingredient">{element}</li>
    })

    const selectIngredients = () => {
        setIngredient(true);
    }

    const cancelSelectIngredients = () => {
        setIngredient(false);
    }

    const handleCheckboxListChange = (values) => {
        // values is array of selected item. e.g. ['apple', 'banana']
      }

	return (
		<Row className="recipe-title-row">
            <Col className="recipe-title-col">
                <h5 className="recipe-title">Ingredients</h5>
                <p className="recipe-buy">Don't have some of the ingredients? Buy them here:</p>
                {
                    !ingredient ? 
                    <>
                        <button onClick={selectIngredients} className="recipe-buy-button">Select Ingredients</button>
                        <ul className="recipe-list-ul">
                            {ingItems}
                        </ul>
                    </> :
                    <>
                        <button onClick={cancelSelectIngredients} className="recipe-buy-button">Cancel</button>
                        <CheckboxList
                            className="recipe-ingredient"
                            items={props.ings}
                            selected={[]}
                            multiple={true}
                            onChange={(selected: number) => { console.log(selected) }}
                        />
                        
                    </>
                }
            </Col>
        </Row>
	);
};
