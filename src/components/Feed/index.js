import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/AuthContext";

function Feed() {
	const { handleLogout } = useContext(Context);
	useEffect(() => {}, []);
	return (
		<>
			<div>
				<h1>Hello from Feed...you're logged!</h1>
			</div>
			<div>
				<button type="button" onClick={handleLogout}>
					Logout
				</button>
			</div>
		</>
	);
}

export default Feed;
