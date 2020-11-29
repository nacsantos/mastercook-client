import React, { createContext } from "react";

import useRecipe from "./hooks/useRecipe";

const Context = createContext();

function RecipeProvider({ children }) {
	const {
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
	} = useRecipe();

	return (
		<Context.Provider
			value={{
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
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, RecipeProvider };
