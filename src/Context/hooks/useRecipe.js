import { useState } from "react";
import api from "../../api";
import history from "../../history";
import jwt_decode from "jwt-decode";
export default function useRecipe() {
	const [labelValues] = useState(initalStateLabels);
	const [ingredients, setIngredients] = useState([]);
	const [steps, setSteps] = useState([]);
	const [data, setData] = useState({});
	const [photos, setPhotos] = useState([]);
	const [newData, setNewData] = useState({});
	const [errorAddRecipe, setErrorAddRecipe] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	function initalStateLabels() {
		return {
			label1: "Ingredients/Products",
			label2: "Add ingredient/product...",
			label3: "Steps/Instructions",
			label4: "Add step/instruction...",
		};
	}
	// function initialState() {
	// 	return { title: "", subtitle: "", description: "" };
	// }

	function handleSendRecipe() {}

	function addIngredient(ingredient) {
		if (!ingredient.text || /^\s*$/.test(ingredient.text)) {
			return;
		}

		const newIngredients = [ingredient, ...ingredients];

		setIngredients(newIngredients);
		//console.log(...ingredients);
	}
	function updateIngredient(todoId, newValue) {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}

		setIngredients((prev) =>
			prev.map((item) => (item.id === todoId ? newValue : item))
		);
	}
	function removeIngredient(id) {
		const removedArr = [...ingredients].filter((todo) => todo.id !== id);

		setIngredients(removedArr);
	}

	function addStep(step) {
		if (!step.text || /^\s*$/.test(step.text)) {
			return;
		}

		const newSteps = [step, ...steps];

		setSteps(newSteps);
		//console.log(...ingredients);
	}

	function updateStep(todoId, newValue) {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}

		setSteps((prev) =>
			prev.map((item) => (item.id === todoId ? newValue : item))
		);
	}
	function removeStep(id) {
		const removedArr = [...steps].filter((todo) => todo.id !== id);

		setSteps(removedArr);
	}
	function handleDropImage(files) {
		setPhotos([...photos, files]);
	}

	async function sendData() {
		const token = localStorage.getItem("token");
		const auxArray = token.split(" ");
		const decoded = jwt_decode(auxArray[1]);
		console.log(decoded);
		const userData = {
			owner_user_username: decoded.user_username,
			owner_user_email: decoded.user_email,
		};
		console.log(userData);
		api
			.post("/api/recipes/create", {
				recipe_title: data.title,
				recipe_subtitle: data.subtitle,
				recipe_description: data.description,
				recipe_ingredients: ingredients,
				recipe_steps_instructions: steps,
				recipe_photos: photos,
				recipe_owner_user: userData,
			})
			.then(
				(response) => {
					console.log(response);
					history.push("/feed");
				},
				(error) => {
					console.log(error);
				}
			);
	}

	function handleEditRecipeData(event) {
		const { value, name } = event.target;
		setData({ ...data, [name]: value });
	}

	// function handleChangeValues(event) {
	// 	const { value, name } = event.target;
	// 	setValues({ ...values, [name]: value });
	// }

	// useEffect(() => {
	// 	const token = localStorage.getItem("token");

	// 	if (token) {
	// 		console.log("TOKEN", token);
	// 		api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
	// 		setAuthenticated(true);
	// 	}
	// 	setLoading(false);
	// }, []);

	// async function handleLogin() {
	// 	api
	// 		.post("/api/users/login", {
	// 			email: values.email,
	// 			password: values.password,
	// 		})
	// 		.then(
	// 			(response) => {
	// 				console.log(response);
	// 				let token = response.data.token;
	// 				localStorage.setItem("token", JSON.stringify(token));
	// 				api.defaults.headers.Authorization = `Bearer ${token}`;
	// 				setAuthenticated(true);
	// 				history.push("/feed");
	// 			},
	// 			(error) => {
	// 				let messageError = error.response.data.error;
	// 				console.log(messageError);
	// 				setErrorMessage(messageError);
	// 				setErrorLogin(true);
	// 			}
	// 		);
	// }

	// function handleLogout() {
	// 	setAuthenticated(false);
	// 	localStorage.removeItem("token");
	// 	api.defaults.headers.Authorization = undefined;
	// 	history.push("/");
	// }

	return {
		labelValues,
		setIngredients,
		setSteps,
		addIngredient,
		ingredients,
		addStep,
		steps,
		updateIngredient,
		updateStep,
		removeIngredient,
		removeStep,
		data,
		setData,
		handleDropImage,
		photos,
		sendData,
		newData,
		handleEditRecipeData,
	};
}
