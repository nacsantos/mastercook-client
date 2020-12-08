import React, { useState, useContext, useEffect } from "react";
import Banner from "../components/Banner";
import { Progress } from "antd";

// import Navbar3 from "../components/Navbar2";
import { RecipeContainer } from "../components/RecipeContainer";
import { CommentsContainer } from "../components/CommentsContainer";
import { FollowRecipe } from "../components/FollowRecipe";
import { Context } from "../Context/RecipeContext";
import MDSpinner from "react-md-spinner";
import Navbar3 from "../components/Navbar3";

let recipeData = {
	title: "Greek Cod",
	subtitle: "Authentic Greek Recipe",
	description: "Eat cod like a true Greek!",
	ingredients: ["ing0", "ing1", "ing2"],
	instructions: ["ins0", "ins1", "ins2", "Timer: 00:00:05", "Timer: 00:00:07"],
	comments: [
		{
			id: "00",
			user: "Leslie",
			photo: "/images/comments_profile_pic.jpg",
			comment: "Nice flavour!",
		},
		{
			id: "01",
			user: "Rodie",
			photo: "/images/comments_profile_pic.jpg",
			comment: "Super!",
		},
	],
};

export const RecipePage = () => {
	const [followRecipe, setFollowRecipe] = useState(false);
	const [progress, setProgress] = useState(0);
	const [loading, setLoading] = useState(false);
	const aux = localStorage.getItem("atual_recipe");
	var atual_recipe = JSON.parse(aux);
	console.log(atual_recipe);

	useEffect(() => {
		if (!atual_recipe) {
			setLoading(true);
		} else {
			setLoading(false);
		}
	}, []);

	const updateGrandparentHandle = () => {
		setFollowRecipe(true);
	};

	const increaseProgress = (x) => {
		setProgress(x);
	};

	if (loading) {
		return <MDSpinner id="feedSpinner" size={100} />;
	}

	return (
		<>
			{/*<div>
				{JSON.stringify(atual_recipe2.recipe_title)}
				<h1>
					<strong>Title: </strong>
					{atual_recipe.recipe_title}
				</h1>
				<h2>
					<strong>Subtitle: </strong>
					{atual_recipe.recipe_subtitle}
				</h2>
				<h3>
					<strong>Description: </strong>
					{atual_recipe.recipe_description}
				</h3>
				<h3>
					<strong>Ingredients: </strong>
					{atual_recipe.recipe_ingredients.map((ingredient, index) => (
						<h4 key={index}>
							{index}-{ingredient.text}
						</h4>
					))}
				</h3>
				<h3>
					<strong>Steps: </strong>
					{atual_recipe.recipe_ingredients.reverse().map((step, index) => (
						<h4 key={index}>
							{index}-{step.text}
						</h4>
					))}
				</h3>
			</div>

			<div>
				<h1>(atualRecipe.recipe_title || "")</h1>
			</div>*/}
			{!followRecipe ? (
				<>
					<Navbar3 />
					<Banner recipeName="Recipe" />
					<RecipeContainer
						updateGrandparent={updateGrandparentHandle}
						recipeData={atual_recipe}
					/>
					<CommentsContainer commentsData={atual_recipe.recipe_comments} />
				</>
			) : (
				<>
					<Navbar3 />
					<Progress
						percent={progress}
						strokeColor="#E67F22"
						showInfo={false}
						strokeWidth="0.5rem"
					/>
					<Banner recipeName="Follow Recipe" />
					<FollowRecipe
						updateProgress={increaseProgress}
						inst={atual_recipe.recipe_ingredients.reverse()}
					/>
				</>
			)}
		</>
	);
};
