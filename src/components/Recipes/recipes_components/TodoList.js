import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { Context } from "../../../Context/RecipeContext";

function TodoList(props) {
	const [todos, setTodos] = useState([]);
	const { label } = props;
	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		const newTodos = [todo, ...todos];

		setTodos(newTodos);
		console.log(...todos);
	};

	const updateTodo = (todoId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}

		setTodos((prev) =>
			prev.map((item) => (item.id === todoId ? newValue : item))
		);
	};

	const removeTodo = (id) => {
		const removedArr = [...todos].filter((todo) => todo.id !== id);

		setTodos(removedArr);
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
				todos={todos}
				completeTodo={completeTodo}
				removeTodo={removeTodo}
				updateTodo={updateTodo}
			/>
		</>
	);
}

export default TodoList;
