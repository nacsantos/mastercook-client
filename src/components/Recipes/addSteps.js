import React, { useState } from "react";
import { Row, Form, Button } from "react-bootstrap";

function AddStep() {
	const [steps, setSteps] = useState([]);
	const [step, setStep] = useState("");

	const addItem = (event) => {
		event.preventDefault();
		setSteps([
			...steps,
			{
				id: steps.length,
				name: step,
			},
		]);
		setStep("");
	};
	return (
		<>
			<div className="container">
				<h2>Add step/instrution</h2>
				<Row>
					<Form onSubmit={addItem}>
						<input
							name="item"
							type="text"
							value={step}
							onChange={(e) => setStep(e.target.value)}
						/>
						<Button type="submit">Add</Button>
					</Form>
				</Row>
				<ul>
					{steps.map((step) => (
						<Row>
							<li key={step.id}>{step.name}</li>
						</Row>
					))}
				</ul>
			</div>
		</>
	);
}

export default AddStep;
