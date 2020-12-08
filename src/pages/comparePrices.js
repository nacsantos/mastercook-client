import React, { useState } from "react";
import Banner from "../components/Banner";
import Navbar3 from "../components/Navbar3";
import { ComparePricesContainer } from "../components/ComparePricesContainer";

let data = {
	ingredients: ["ing0", "ing1", "ing2"],
};

export const ComparePricesPage = (props) => {
	const [listToUse, setListToUse] = useState(
		JSON.parse(localStorage.getItem("ingsL"))
	);
	console.log(listToUse);

	return (
		<>
			<Navbar3 />
			<Banner recipeName="Compare Prices" />
			<ComparePricesContainer ings={listToUse} />
		</>
	);
};
