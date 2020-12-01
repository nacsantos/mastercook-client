import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Context } from "../../Context/RecipeContext";
function initialState() {
	return { title: "", subtitle: "", description: "" };
}

const RecipeData = () => {
	const [recipeData, setRecipeData] = useState(initialState);
	const { setData, sendData, handleEditRecipeData } = useContext(Context);
	//const { onChangeRecipeData } = useContext(Context);

	function handleChange(event) {
		const { value, name } = event.target;
		setRecipeData({ ...recipeData, [name]: value });
		handleEditRecipeData(event);
	}

	function handleSubmit() {
		sendData();
	}

	return (
		<>
			<Form>
				<Form.Group controlId="title" 
						style={{ color: "white" }}>
					<Form.Label style={{ color: "white" }}>
						<strong>Title</strong>
					</Form.Label>
					<Form.Control
						type="text"
						style={{ backgroundColor: "#949ab0", color: "white" }}
						placeholder="Insert recipe title..."
						onChange={handleChange}
						// id="title"
						name="title"
					/>
				</Form.Group>
				<Form.Group controlId="subtitle">
					<Form.Label style={{ color: "white" }}>
						<strong>Subtitle</strong>
					</Form.Label>
					<Form.Control
						type="text"
						style={{ backgroundColor: "#949ab0", color: "white" }}
						placeholder="Insert recipe subtitle.."
						//onChange={handleChange}
						// id="subtitle"
						name="subtitle"
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId="description">
					<Form.Label style={{ color: "white" }}>
						<strong>Description</strong>
					</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						style={{ backgroundColor: "#949ab0", color: "white" }}
						placeholder="Insert recipe description..."
						//onChange={handleChange}
						// id="description"
						name="description"
						onChange={handleChange}
					/>
				</Form.Group>
			</Form>
			<Button
				variant="outline-secondary"
				size="lg"
				block
				onClick={handleSubmit}
			>
				Send Recipe
			</Button>
		</>
	);
};

export default RecipeData;
