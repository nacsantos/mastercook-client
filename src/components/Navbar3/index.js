import React, { useContext, useState, useEffect } from "react";
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
import { Context as AuthContext } from "../../Context/AuthContext";
import { Context as RecipeContext } from "../../Context/RecipeContext";
import "./Navbar3.css";

export const Navbar3 = () => {
	const { authenticated, handleLogout } = useContext(AuthContext);

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
					{/* <Form inline>
						<FormControl
							type="text"
							placeholder="Search for users..."
							className="mr-sm-2"
					
						/>
						<Button variant="outline-warning">Search</Button>
					</Form> */}
				</Nav>
				{authenticated && (
					<Button variant="outline-warning" onClick={handleLogout}>
						Logout
					</Button>
				)}
			</Navbar>
		</>
	);
};

export default Navbar3;
