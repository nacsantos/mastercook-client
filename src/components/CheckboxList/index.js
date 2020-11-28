import React, {useState, useEffect} from "react";
import { Row, Col } from "react-bootstrap";

import "../RecipeContainer/RecipeContainer.css";
import "./CheckboxList.css";

export const CheckboxList = (props) => {
    const [ingredient, setIngredient] = useState({});

    const handleCheckboxListChange = (values) => {
        // values is array of selected item. e.g. ['apple', 'banana']
        
    }

    const ingItems = props.items.map((element) => {
        return (
            <div className="checkbox-ings-div">
                <input onClick={handleCheckboxListChange(element)} className="checkbox-ings-input" type="checkbox"/>
                <li key={element.toString()} className="recipe-ingredient">{element}</li>
            </div>
        )
    })

	return (

        <ul>
            {ingItems}
        </ul>
	);
};
