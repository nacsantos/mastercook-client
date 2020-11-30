import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./Context/AuthContext";
import { RecipeProvider } from "./Context/RecipeContext";

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<RecipeProvider>
				<App />
			</RecipeProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
