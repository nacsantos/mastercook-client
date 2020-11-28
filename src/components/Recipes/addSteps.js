import React from "react";
import "./addIngredient.css";
import TodoList from "./recipes_components/TodoList";

function AddStep(props) {
	return (
		<div className="todo-app">
			<TodoList {...props} />
		</div>
	);
}

export default AddStep;
