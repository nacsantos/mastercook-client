import React from "react";
import { Form } from "react-bootstrap";

const RecipeData = () => {
	return (
		<>
			<Form>
				<Form.Group controlId="recipe_title">
					<Form.Label>
						<strong>Title</strong>
					</Form.Label>
					<Form.Control
						type="text"
						style={{ backgroundColor: "#8f8b8b", color: "white" }}
					/>
				</Form.Group>
				<Form.Group controlId="recipe_subtitle">
					<Form.Label>
						<strong>Subtitle</strong>
					</Form.Label>
					<Form.Control
						type="text"
						style={{ backgroundColor: "#8f8b8b", color: "white" }}
					/>
				</Form.Group>
				<Form.Group controlId="recipe_description">
					<Form.Label>
						<strong>Description</strong>
					</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						style={{ backgroundColor: "#8f8b8b", color: "white" }}
					/>
				</Form.Group>
			</Form>
		</>
	);
};

export default RecipeData;
