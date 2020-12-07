import React from "react";
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	NavDropdown,
} from "react-bootstrap";
import logo from "../../assets/logos/masterbook-logo.svg";

export const Navbar3 = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="/feed">
					<img
						alt=""
						src={logo}
						width="100"
						height="50"
						className="d-inline-block align-top"
					/>{" "}
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
				</Nav>
			</Navbar>
		</>
	);
};

export default Navbar3;
