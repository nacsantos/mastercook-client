import React, { createContext } from "react";

import useRecipe from "./hooks/useRecipe";

const Context = createContext();

function RecipeProvider({ children }) {
	const { values, labelValues, onChange } = useRecipe();

	return (
		<Context.Provider
			value={{
				values,
				labelValues,
				onChange,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, RecipeProvider };
