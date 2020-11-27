import React, { createContext } from "react";

import useAuth from "./hooks/useAuth";

const Context = createContext();

function AuthProvider({ children }) {
	const {
		authenticated,
		loading,
		handleLogin,
		handleLogout,
		handleChangeValues,
		values,
		errorMessage,
		errorLogin,
		setErrorLogin,
	} = useAuth();

	return (
		<Context.Provider
			value={{
				loading,
				authenticated,
				handleLogin,
				handleLogout,
				handleChangeValues,
				values,
				errorMessage,
				errorLogin,
				setErrorLogin,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, AuthProvider };
