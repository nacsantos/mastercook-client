import React, { useState, useContext } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { Context } from "../../../Context/RecipeContext";

function TodoList2(props) {
	const { steps, addStep, updateStep, removeStep } = useContext(Context);
	const [todos, setTodos] = useState([]);
	const { label } = props;

	const addTodo = (todo) => {
		addStep(todo);
	};

	const updateTodo = (todoId, newValue) => {
		updateStep(todoId, newValue);
	};

	const removeTodo = (id) => {
		removeStep(id);
	};

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<>
			<h6>{label}</h6>
			<TodoForm onSubmit={addTodo} {...props} />
			<Todo
				todos={steps}
				completeTodo={completeTodo}
				removeTodo={removeTodo}
				updateTodo={updateTodo}
			/>
		</>
	);
}

export default TodoList2;
