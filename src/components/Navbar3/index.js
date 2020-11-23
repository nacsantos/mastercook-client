import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../../assets/logos/masterbook-logo.svg";

export const Navbar3 = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<img
						alt=""
						src={logo}
						width="100"
						height="50"
						className="d-inline-block align-top"
					/>{" "}
					
				</Navbar.Brand>
			</Navbar>
		</>
	);
};

export default Navbar3;
