import React from "react";
import "./addIngredient.css";
import TodoList2 from "./recipes_components/TodoList2";

function AddStep(props) {
	return (
		<div className="todo-app">
			<TodoList2 {...props} />
		</div>
	);
}

export default AddStep;
