import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/AuthContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Feed() {
	const { handleLogout } = useContext(Context);
	useEffect(() => {}, []);
	return (
		<>
			<div>
				<h1>Hello from Feed...you're logged!</h1>
			</div>
			<div>
				<Link to="/recipes/add">Add recipe</Link>
			</div>
			<br />
			<div>
				<Button onClick={handleLogout}>Logout</Button>
			</div>
		</>
	);
}

export default Feed;
