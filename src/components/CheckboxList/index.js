import React, {useState, useEffect} from "react";
import { Row, Col } from "react-bootstrap";

import "../RecipeContainer/RecipeContainer.css";
import "./CheckboxList.css";

export const CheckboxList = (props) => {
    const [ingredient, setIngredient] = useState([]);
    const [selected, setSelected] = useState(new Array(props.items.length).fill(0));

    const handleCheckboxListChange = (values, index) => {
        // values is array of selected item. e.g. ['apple', 'banana']
        if(selected[index] === 0){
            setIngredient(oldArray => [...oldArray, values])
            let newArr = selected;
            newArr[index] = 1;
            setSelected(newArr);
            let k = [...ingredient, values];
            props.updateParentIngs(k);
        } else{
            setIngredient(ingredient.filter(item => item.text !== values.text));
            let newArr = selected;
            newArr[index] = 0;
            setSelected(newArr);
            let k = [...ingredient];
            let t = k.filter(item => item.text !== values.text)
            props.updateParentIngs(t);
        }
    }

    const ingItems = props.items.map((element, index) => {
        return (
            <div className="checkbox-ings-div">
                <input onClick={() =>handleCheckboxListChange(element, index)} className="checkbox-ings-input" type="checkbox"/>
                <li key={element.id + "-" + element.text} className="recipe-ingredient">{element.text}</li>
            </div>
        )
    })

	return (

        <ul className="recipe-list-ul">
            {ingItems}
        </ul>
	);
};
