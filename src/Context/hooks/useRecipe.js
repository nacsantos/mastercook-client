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
	const [loadingAtualRecipe, setLoadingAtualRecipe] = useState(false);

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
	async function handleGetRecipe(event) {
		const handleAtualRecipe = async (id) => {
			try {
				setLoadingAtualRecipe(true);
				const aux = allRecipes[id];
				setAtualRecipe(aux);
			} catch (err) {
				console.log(error);
			}
			setLoadingAtualRecipe(true);
		};
		handleAtualRecipe(event.target.id);
		//setLoadingAtualRecipe(true);
		//const aux = allRecipes[event.target.id];
		//const a = await setAtual(event.target.id);
		//console.log(a);
		history.push("/recipe");
		//setLoadingAtualRecipe(false);
	}

	function setAtual(id) {
		const aux = allRecipes[id];
		setAtualRecipe(aux);
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
	};
}
