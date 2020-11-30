import React, { useState, useContext } from "react";
import Banner from "../components/Banner";
import { Progress } from "antd";

import Navbar3 from "../components/Navbar3";
import { RecipeContainer } from "../components/RecipeContainer";
import { CommentsContainer } from "../components/CommentsContainer";
import { FollowRecipe } from "../components/FollowRecipe";
import { Context } from "../Context/RecipeContext";
import MDSpinner from "react-md-spinner";

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
	const { atualRecipe, loadingAtualRecipe } = useContext(Context);

	const updateGrandparentHandle = () => {
		setFollowRecipe(true);
	};

	const increaseProgress = (x) => {
		setProgress(x);
	};

	if (loadingAtualRecipe) {
		return <MDSpinner id="feedSpinner" size={100} />;
	}

	return (
		<>
			<div>
				<h1>{atualRecipe.recipe_title}</h1>
			</div>

			{/* <div>
				<h1>(atualRecipe.recipe_title || "")</h1>
			</div>
			{!followRecipe ? (
				<>
					<Navbar3 />
					<Banner recipeName="Recipe" />
					<RecipeContainer
						updateGrandparent={updateGrandparentHandle}
						recipeData={recipeData}
					/>
					<CommentsContainer commentsData={recipeData.comments} />
				</>
			) : (
				<>
					<Navbar3 />
					<Progress
						percent={progress}
						strokeColor="#E67F22"
						showInfo={false}
						strokeWidth="0.2rem"
					/>
					<Banner recipeName="Follow Recipe" />
					<FollowRecipe
						updateProgress={increaseProgress}
						inst={recipeData.instructions}
					/>
				</>
			)} */}
		</>
	);
};
