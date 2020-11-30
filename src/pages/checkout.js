import React from "react";
import Banner from "../components/Banner";
import Navbar3 from "../components/Navbar3";
import RecipeForm from "../components/Checkout";

export const CheckoutPage = () => {
	return (
		<>
			<Navbar3 />
			<Banner recipeName="Checkout" />
			<RecipeForm />
		</>
	);
};
