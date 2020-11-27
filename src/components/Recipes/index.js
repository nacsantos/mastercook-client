import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import AddIngredient from "./addIngredient";
import AddPhotos from "./addPhotos";
import AddStep from "./addSteps";

const RecipeForm = () => {
	return (
		<div>
			<div className="container fluid">
				<Row>
					<Col>
						<Form>
							<Form.Group controlId="recipe.title">
								<Form.Label>Title</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
							<Form.Group controlId="recipe.subtitle">
								<Form.Label>Subtitle</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
							<Form.Group controlId="recipe.description">
								<Form.Label>Description</Form.Label>
								<Form.Control as="textarea" rows={3} />
							</Form.Group>
						</Form>
					</Col>
					<Col>
						<Row>
							<AddIngredient />
						</Row>
						<Row>
							<AddStep />
						</Row>
						<Row>
							<AddPhotos />
						</Row>
					</Col>
					<Col>
						<Button>Add recipe</Button>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default RecipeForm;
