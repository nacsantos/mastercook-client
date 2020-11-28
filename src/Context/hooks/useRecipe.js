import { useState } from "react";
//import api from "../../api";

export default function useRecipe() {
	const [values, setValues] = useState(initialState);
	const [labelValues] = useState(initalStateLabels);

	function initalStateLabels() {
		return {
			label1: "Ingredients/Products",
			label2: "Add ingredient/product..",
			label3: "Steps/Instructions",
			label4: "Add step/instruction..",
		};
	}
	function initialState() {
		return { email: "", password: "" };
	}

	function onChange(event) {
		const [value, name] = event.target;
		setValues({ ...values, [name]: value });
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

	return { values, labelValues, onChange };
}
