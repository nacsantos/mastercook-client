import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/AuthContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context as RecipeContext } from "../../Context/RecipeContext";
import MDSpinner from "react-md-spinner";
import "./FeedElements.css";
import { Card } from "react-bootstrap";

function Feed() {
	const { handleLogout } = useContext(Context);
	const { getAllRecipes, allRecipes, loading, handleGetRecipe } = useContext(
		RecipeContext
	);

	if (loading) {
		return <MDSpinner id="feedSpinner" size={100} />;
	}

	return (
		<>
			<div>
				<div>
					<Button onClick={handleLogout}>Logout</Button>
				</div>
				<div>
					<Link to="/recipes/add">Add recipe</Link>
				</div>
				<div style={{ display: "flex", flexDirection: "row" }}>
					{allRecipes.map((recipe, index) => (
						<Card style={({ width: "18rem" }, { flex: 1 })} key={index}>
							<Card.Img variant="top" src={recipe.recipe_photos[0][0].base64} />
							<Card.Body>
								<Card.Title>{recipe.recipe_title}</Card.Title>
								<Card.Text>{recipe.recipe_subtitle}</Card.Text>
								<Button
									variant="primary"
									key={index}
									id={index}
									onClick={handleGetRecipe}
								>
									View more
								</Button>
							</Card.Body>
						</Card>
					))}
				</div>
			</div>
		</>
	);
}

export default Feed;
