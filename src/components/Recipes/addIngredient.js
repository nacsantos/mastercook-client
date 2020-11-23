import React, { useState } from "react";
import { Row, Form, Button } from "react-bootstrap";

function AddIngredient() {
	const [items, setItems] = useState([]);
	const [itemName, setItemName] = useState("");

	const addItem = (event) => {
		event.preventDefault();
		setItems([
			...items,
			{
				id: items.length,
				name: itemName,
			},
		]);
		setItemName("");
	};
	return (
		<>
			<div className="container">
				<h2>Add ingredient/product</h2>
				<Row>
					<Form onSubmit={addItem}>
						<input
							name="item"
							type="text"
							value={itemName}
							onChange={(e) => setItemName(e.target.value)}
						/>
						<Button type="submit">Add</Button>
					</Form>
				</Row>
				<ul>
					{items.map((item) => (
						<Row>
							<li key={item.id}>{item.name}</li>
						</Row>
					))}
				</ul>
			</div>
		</>
	);
}

export default AddIngredient;