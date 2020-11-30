import React from "react";
import Banner from "../components/Banner";
import Navbar3 from "../components/Navbar2";
import {ComparePricesContainer} from "../components/ComparePricesContainer";

let data = {
	ingredients: [
        "ing0", "ing1", "ing2"
    ],
}

export const ComparePricesPage = () => {
	return (
		<>
			<Navbar3 />
			<Banner recipeName="Compare Prices"/>
			<ComparePricesContainer ings={data.ingredients}/>
		</>
	);
};
