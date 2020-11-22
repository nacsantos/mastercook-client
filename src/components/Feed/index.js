import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/AuthContext";

function Feed() {
	const { handleLogout } = useContext(Context);
	useEffect(() => {}, []);
	return (
		<>
			<div>Hello from div</div>
			<div>
				<button type="button" onClick={handleLogout}>
					Sair
				</button>
			</div>
		</>
	);
}

export default Feed;
