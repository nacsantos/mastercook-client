import React, { useContext } from "react";
import "./addIngredient.css";
import TodoList from "./recipes_components/TodoList";

function AddIngredient(props) {
	const { label, labelPlaceholder } = props;
	return (
		<div className="todo-app">
			<TodoList {...props}/>
		</div>
	);
}

export default AddIngredient;