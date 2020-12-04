import { useState, useEffect } from "react";
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
	const [allRecipes, setAllRecipes] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});
	const [atualRecipe, setAtualRecipe] = useState({});
	const [loadingAtualRecipe, setLoadingAtualRecipe] = useState(true);
	const [counter, setCounter] = useState(null);

	useEffect(() => {
		let ignore = false;
		const getAllRecipes = async () => {
			try {
				setLoading(true);
				setError({});
				//const response = await axios(`http://myapi/product/${productId}`);
				const response = await api.get("/api/recipes/");
				if (!ignore) setAllRecipes(response.data);
			} catch (err) {
				setError(err);
			}
			setLoading(false);
		};
		getAllRecipes();
		return () => {
			ignore = true;
		};
	}, []);

	function initalStateLabels() {
		return {
			label1: "Ingredients/Products",
			label2: "Add ingredient/product...",
			label3: "Steps/Instructions",
			label4: "Add step/instruction...",
		};
	}

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
		console.log(photos);
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
					let messageError = error.response.data.error;
					console.log(messageError);
					setErrorMessage(messageError);
					setErrorAddRecipe(true);
				}
			);
	}

	function handleEditRecipeData(event) {
		const { value, name } = event.target;
		setData({ ...data, [name]: value });
	}

	async function getAllRecipes() {
		const recipes = await api.get("/api/recipes/");
		const aux = recipes.data;
		setAllRecipes(aux);
	}
	function handleGetRecipe(event) {
		setCounter(event.target.id);
		// console.log("Entrou no handle");
		// console.log("Id do evento", event.target.id);

		const aux = allRecipes[event.target.id];
		const auxJson = {
			recipe_title: aux.recipe_title,
			recipe_subtitle: aux.recipe_subtitle,
			recipe_description: aux.recipe_description,
			recipe_ingredients: aux.recipe_ingredients,
			recipe_steps_instructions: aux.recipe_steps_instructions,
			recipe_observations: aux.recipe_observations,
			recipe_kcal_per_person: aux.recipe_kcal_per_person,
			recipe_base_dose: aux.recipe_base_dose,
			recipe_categories: aux.recipe_categories,
			recipe_cuisine: aux.recipe_cuisine,
			recipe_tags: aux.recipe_tags,
			recipe_photos: aux.recipe_photos,
			recipe_timestamp: aux.recipe_timestamp,
			recipe_owner_user: aux.recipe_owner_user,
			recipe_reviews: aux.recipe_reviews,
			recipe_comments: aux.recipe_comments,
		};
		console.log("aux", aux);
		console.log("aux2", auxJson);
		//var testObject ={name:"test", time:"Date 2017-02-03T08:38:04.449Z"};
		setAtualRecipe(aux);
		localStorage.setItem("atual_recipe", JSON.stringify(auxJson));
		history.push("/recipe");
		// history.push({
		// 	pathname: "/recipe",
		// 	state: {
		// 		recipe: aux,
		// 	},
		// });
		// console.log("Entrou no handleGetRecipe");
		// const handleAtualRecipe = async (id) => {
		// 	try {
		// 		//setLoadingAtualRecipe(true);
		// 		console.log("Vamos ver o estado do loading 2", loadingAtualRecipe);
		// 		const aux = allRecipes[id];
		// 		console.log("aux", aux);
		// 		setAtualRecipe(aux);
		// 	} catch (err) {
		// 		console.log(error);
		// 	}
		// 	setLoadingAtualRecipe(false);
		// };
		// console.log("Vai entrar no handleAtualRecipe", event.target.id);
		// console.log("Vamos ver o estado do loading 1", loadingAtualRecipe);
		// handleAtualRecipe(event.target.id);
		// console.log("Vamos ver o estado do loading 3", loadingAtualRecipe);
		// //setLoadingAtualRecipe(true);
		// //const aux = allRecipes[event.target.id];
		// //const a = await setAtual(event.target.id);
		// //console.log(a);

		//setLoadingAtualRecipe(false);
	}

	function getAtual() {
		return atualRecipe;
	}

	function handleAddRecipe() {
		history.push("/recipes/add");
	}

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
		errorMessage,
		errorAddRecipe,
		setErrorAddRecipe,
		getAllRecipes,
		allRecipes,
		loading,
		handleGetRecipe,
		setLoadingAtualRecipe,
		atualRecipe,
		loadingAtualRecipe,
		getAtual,
		handleAddRecipe,
	};
}
