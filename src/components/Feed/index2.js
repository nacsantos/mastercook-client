import React, { useContext, useState } from "react";
import "./FeedElements2.css";
import { Context as AuthContext } from "../../Context/AuthContext";
import { Context as RecipeContext } from "../../Context/RecipeContext";
import MDSpinner from "react-md-spinner";
import { BiListPlus } from "react-icons/bi";
import { IconContext } from "react-icons";
import Banner from "../Banner";
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	NavDropdown,
	Container,
} from "react-bootstrap";
import logo from "../../assets/logos/masterbook-logo.svg";

function Feed2() {
	const [search, setSearch] = useState("");
	const {
		getAllRecipes,
		allRecipes,
		loading,
		handleGetRecipe,
		handleAddRecipe,
	} = useContext(RecipeContext);
	const { authenticated, handleLogout } = useContext(AuthContext);

	if (loading) {
		return <MDSpinner id="feedSpinner" size={100} />;
	}
	console.log(allRecipes);
	// console.log(allRecipes[8].recipe_photos[0]);

	const filteredRecipes = allRecipes.filter((recipe) => {
		return (
			recipe.recipe_owner_user.owner_user_username
				.toLowerCase()
				.includes(search.toLowerCase()) ||
			recipe.recipe_title.toLowerCase().includes(search.toLowerCase())
		);
		// country.name.toLowerCase().includes(search.toLowerCase());
	});
	console.log("filtereted", filteredRecipes);
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="/feed">
					<img
						alt="logo"
						src={logo}
						width="100"
						height="50"
						className="d-inline-block align-top"
					/>{" "}
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/feed">Feed</Nav.Link>
					<Form inline id="formInline">
						<FormControl
							type="text"
							placeholder="Search for users or recipes..."
							className="mr-sm-2 w-100"
							onChange={(e) => setSearch(e.target.value)}
						/>
						{/* <Button variant="outline-warning">Search</Button> */}
					</Form>
				</Nav>
				{authenticated && (
					<Button variant="outline-warning" onClick={handleLogout}>
						Logout
					</Button>
				)}
			</Navbar>
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
										<BiListPlus onClick={handleAddRecipe} id="firstCard" />
									</div>
								</IconContext.Provider>
							</div>
						</div>
						{filteredRecipes.map((recipe, index) => (
							<div className="col-md-6 col-lg-4" key={index}>
								<div className="card border-0 transform-on-hover">
									<a className="lightbox" href="">
										<img
											src={recipe.recipe_photos[0]}
											className="card-img-top"
											key={index}
											id={index}
											onClick={handleGetRecipe}
										></img>
									</a>
									<div className="card-body">
										<h6>{recipe.recipe_title}</h6>
										<p className="text-muted card-text">
											{recipe.recipe_subtitle}
										</p>
										<p className="text-muted card-text">
											Created by: {recipe.recipe_owner_user.owner_user_username}
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
