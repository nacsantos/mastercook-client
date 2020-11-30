import React from "react";
import Banner from "../components/Banner";
import Navbar3 from "../components/Navbar2";
import RecipeForm from "../components/Recipes";

export const CreateRecipePage = () => {
	return (
		<>
			<Navbar3 />
			<Banner recipeName="Add Recipe" />
			<RecipeForm />
		</>
	);
};
