import React from "react";
import { RecipeProvider } from "../../Context/RecipeContext";

import { Row, Col } from "react-bootstrap";
import RecipeData from "./recipeData";
import RecipeData2 from "./recipeData2";
import "./RecipeElements.css";

const RecipeForm = () => {
	return (
		<RecipeProvider>
			<div class="container">
				<Row>
					<Col id="container1">
						<RecipeData />
					</Col>
					<Col id="container2">
						<RecipeData2 />
					</Col>
				</Row>
			</div>
		</RecipeProvider>
	);
};

export default RecipeForm;
