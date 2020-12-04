import React, { useContext } from "react";
import "./FeedElements2.css";
import { Context } from "../../Context/AuthContext";
import { Context as RecipeContext } from "../../Context/RecipeContext";
import MDSpinner from "react-md-spinner";
import { BiListPlus } from "react-icons/bi";
import { IconContext } from "react-icons";
import Banner from "../Banner";

function Feed2() {
	const { handleLogout } = useContext(Context);
	const {
		getAllRecipes,
		allRecipes,
		loading,
		handleGetRecipe,
		handleAddRecipe,
	} = useContext(RecipeContext);

	if (loading) {
		return <MDSpinner id="feedSpinner" size={100} />;
	}
	// console.log(allRecipes);
	// console.log(allRecipes[8].recipe_photos[0]);

	return (
		<>
			<Banner recipeName="Our recipes..." />
			<section className="gallery-block cards-gallery">
				<div className="container">
					<div className="row">
						<div className="card-group"></div>
						<div className="col-md-6 col-lg-4">
							<div className="card border-0 transform-on-hover">
								<IconContext.Provider
									value={{ color: "orange", size: "305px" }}
								>
									<div className="card-body">
										<BiListPlus onClick={handleAddRecipe} />
									</div>
								</IconContext.Provider>
							</div>
						</div>
						{allRecipes.map((recipe, index) => (
							<div className="col-md-6 col-lg-4">
								<div className="card border-0 transform-on-hover">
									<a className="lightbox" href="images/F1.jpg">
										<img
											src={recipe.recipe_photos[0]}
											className="card-img-top"
										></img>
									</a>
									<div className="card-body">
										<h6>{recipe.recipe_title}</h6>
										<p className="text-muted card-text">
											{recipe.recipe_subtitle}
										</p>
										<button
											type="button"
											className="btn btn-info"
											key={index}
											id={index}
											onClick={handleGetRecipe}
										>
											View more
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Feed2;
