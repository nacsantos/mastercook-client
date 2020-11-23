import React from "react";
import Banner from "../components/Banner";
import Navbar3 from "../components/Navbar3";
import RecipeForm from "../components/Recipes";

export const RecipePage = () => {
	return (
		<>
			<Navbar3 />
			<Banner />
			<RecipeForm />
		</>
	);
};
