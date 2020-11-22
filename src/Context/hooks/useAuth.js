import { useState, useEffect } from "react";
import api from "../../api";
import history from "../../history";

export default function useAuth() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const [values, setValues] = useState(initialState);

	function initialState() {
		return { email: "", password: "" };
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
		const {
			data: { token },
		} = await api.post("/api/users/login", {
			email: values.email,
			password: values.password,
		});
		localStorage.setItem("token", JSON.stringify(token));
		api.defaults.headers.Authorization = `Bearer ${token}`;
		setAuthenticated(true);
		history.push("/feed");
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
	};
}
