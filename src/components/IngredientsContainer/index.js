import React, {useState, useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import "../RecipeContainer/RecipeContainer.css";
import "./IngredientsContainer.css";
import {CheckboxList} from "../CheckboxList"

export const IngredientsContainer = (props) => {
    const [ingredient, setIngredient] = useState(false);
    const [listToPass, setListToPass] = useState([]);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {    
        const vals = props.ings.map((el) => {
            return {el:el}
        })
    });

    const ingItems = props.ings.map((element) => {
        return <li key={element.id + "-" + element.text} className="recipe-ingredient">{element.text}</li>
    })

    const selectIngredients = () => {
        setIngredient(true);
    }

    const cancelSelectIngredients = () => {
        setIngredient(false);
        setListToPass([]);
    }

    const buySelectIngredients = () => {
        localStorage.setItem('ingsL',JSON.stringify(listToPass));
        setRedirect(true);
    }

    const handleCheckboxListChange = (values) => {
        // values is array of selected item. e.g. ['apple', 'banana']
    }

    const updateParentIngsHandle = (selectedList) => {
        setListToPass(selectedList);
        console.log(selectedList)
    }

    if (redirect) {
        return <Redirect to={{pathname: "/compareprice/x"}} />
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
                        {
                            listToPass.length ?
                            <div className="listtopass-div">
                                <button onClick={cancelSelectIngredients} className="recipe-buy-button left-button">Cancel</button>
                                <button onClick={buySelectIngredients} className="recipe-buy-button">Buy</button>
                            </div> :
                            <button onClick={cancelSelectIngredients} className="recipe-buy-button">Cancel</button>
                        }
                        <CheckboxList
                            updateParentIngs={updateParentIngsHandle}
                            className="recipe-ingredient"
                            items={props.ings}
                            selected={[]}
                            multiple={true}
                            onChange={(selected) => { console.log(selected) }}
                        />
                        
                    </>
                }
            </Col>
        </Row>
	);
};
