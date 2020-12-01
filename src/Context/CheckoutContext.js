import React, { createContext } from "react";

import useCheckout from "./hooks/useCheckout";

const Context = createContext();

function CheckoutProvider({ children }) {
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
		handleEditRecipeData,
		errorMessage,
		errorAddRecipe,
		setErrorAddRecipe,
	} = useCheckout();

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
				handleEditRecipeData,
				errorMessage,
				errorAddRecipe,
				setErrorAddRecipe,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, CheckoutProvider };
