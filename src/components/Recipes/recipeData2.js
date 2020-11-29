import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import AddIngredient from "./addIngredient";
import { Context } from "../../Context/RecipeContext";
import AddStep from "./addSteps";
import ImageContainer from "./imageContainer";
import "./RecipeElements.css";

const RecipeData2 = () => {
	const { labelValues } = useContext(Context);
	return (
		<>
			<Row>
				<AddIngredient
					label={labelValues.label1}
					labelPlaceholder={labelValues.label2}
				/>
			</Row>
			<Row>
				<AddStep
					label={labelValues.label3}
					labelPlaceholder={labelValues.label4}
				/>
			</Row>
			<Row id="imageContainer">
				<ImageContainer />
			</Row>
		</>
	);
};

export default RecipeData2;
