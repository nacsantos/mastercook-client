import React from "react";
import "./App.css";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./history";
import { AuthProvider } from "./Context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<AuthProvider>
			<Router history={history}>
				<Routes />
			</Router>
		</AuthProvider>
	);
}

export default App;
