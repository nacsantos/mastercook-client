import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import banner from "../../assets/images/banner.jpg";
import "./BannerElements.css";

const Banner = () => {
	return (
		<>
			<div className="container" id="bannerRecipe">
				<Row>
					<Col className="align-self-center">
						<h1 className="h1Center">Add Recipe</h1>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Banner;
