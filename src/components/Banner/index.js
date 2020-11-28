import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./BannerElements.css";

const Banner = (props) => {


	return (
		<>
			<Container id="bannerRecipe">
				<Row>
					<Col className="banner-col">
						<h1 className="h1Center">{props.recipeName}</h1>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Banner;
