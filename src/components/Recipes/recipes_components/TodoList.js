import React, { useState, useContext } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { Context } from "../../../Context/RecipeContext";

function TodoList(props) {
	const {
		ingredients,
		addIngredient,
		updateIngredient,
		removeIngredient,
	} = useContext(Context);
	const [todos, setTodos] = useState([]);
	const { label } = props;

	const addTodo = (todo) => {
		addIngredient(todo);
		// if (!todo.text || /^\s*$/.test(todo.text)) {
		// 	return;
		// }

		// const newTodos = [todo, ...todos];

		// setTodos(newTodos);
		// console.log(...todos);
		// setIngredients(newTodos);
	};

	const updateTodo = (todoId, newValue) => {
		// if (!newValue.text || /^\s*$/.test(newValue.text)) {
		// 	return;
		// }

		// setTodos((prev) =>
		// 	prev.map((item) => (item.id === todoId ? newValue : item))
		// );
		updateIngredient(todoId, newValue);
	};

	const removeTodo = (id) => {
		removeIngredient(id);
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
				todos={ingredients}
				completeTodo={completeTodo}
				removeTodo={removeTodo}
				updateTodo={updateTodo}
			/>
		</>
	);
}

export default TodoList;
