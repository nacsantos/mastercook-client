import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import RecipeData from "./recipeData";
import RecipeData2 from "./recipeData2";
import "./RecipeElements.css";
import { Context } from "../../Context/RecipeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeForm = () => {
	return <RecipeContainer />;
};

const RecipeContainer = () => {
	const { errorMessage, errorAddRecipe, setErrorAddRecipe } = useContext(
		Context
	);

	if (errorAddRecipe) {
		let message = errorAddRecipe;
		console.log(message);
		setErrorAddRecipe(false);
		const notify = () =>
			toast.error(errorMessage, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		return notify() && <AuxComponent />;
	} else {
		return <AuxComponent />;
	}
};

const AuxComponent = () => {
	return (
		<>
			<div className="container">
				<Row id="recipeData">
					<Col id="container1">
						<RecipeData />
					</Col>
					<Col id="container2">
						<RecipeData2 />
					</Col>
				</Row>
			</div>
			<ToastContainer />
		</>
	);
};

export default RecipeForm;
