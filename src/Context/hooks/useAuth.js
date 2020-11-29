import { useState, useEffect } from "react";
import api from "../../api";
import history from "../../history";

export default function useAuth() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const [values, setValues] = useState(initialState);
	const [errorLogin, setErrorLogin] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	function initialState() {
		return { user_username: "", user_password: "" };
	}

	function handleChangeValues(event) {
		const { value, name } = event.target;
		setValues({ ...values, [name]: value });
	}

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			console.log("TOKEN", token);
			api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
			setAuthenticated(true);
		}
		setLoading(false);
	}, []);

	async function handleLogin() {
		api
			.post("/api/users/login", {
				user_username: values.user_username,
				user_password: values.user_password,
			})
			.then(
				(response) => {
					console.log(response);
					let token = response.data.token;
					localStorage.setItem("token", JSON.stringify(token));
					api.defaults.headers.Authorization = `Bearer ${token}`;
					setAuthenticated(true);
					history.push("/feed");
				},
				(error) => {
					let messageError = error.response.data.error;
					console.log(messageError);
					setErrorMessage(messageError);
					setErrorLogin(true);
				}
			);
	}

	function handleLogout() {
		setAuthenticated(false);
		localStorage.removeItem("token");
		api.defaults.headers.Authorization = undefined;
		history.push("/");
	}

	return {
		authenticated,
		loading,
		handleLogin,
		handleLogout,
		handleChangeValues,
		values,
		errorLogin,
		errorMessage,
		setErrorLogin,
	};
}
