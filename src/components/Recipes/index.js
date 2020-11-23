import React from "react";
import { Form, Row, Col } from "react-bootstrap";

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
						<Row>Add ingredient</Row>
						<Row>Steps</Row>
						<Row>Photos</Row>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default RecipeForm;
