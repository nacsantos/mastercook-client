import React, { createContext } from "react";

import useRecipe from "./hooks/useRecipe";

const Context = createContext();

function RecipeProvider({ children }) {
	const {
		values,
		labelValues,
		onChange,
		setIngredients,
		setSteps,
	} = useRecipe();

	return (
		<Context.Provider
			value={{
				values,
				labelValues,
				onChange,
				setIngredients,
				setSteps,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, RecipeProvider };
