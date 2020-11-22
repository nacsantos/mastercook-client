import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "./Context/AuthContext";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import FeedPage from "./pages/feed";
import Home from "./pages";

function CustomRoute({ isPrivate, ...rest }) {
	const { loading, authenticated } = useContext(Context);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (isPrivate && !authenticated) {
		return <Redirect to="/" />;
	}

	return <Route {...rest} />;
}

export default function Routes() {
	return (
		<Switch>
			<CustomRoute exact path="/" component={Home} />
			<CustomRoute exact path="/signin" component={SigninPage} />
			<CustomRoute exact path="/signup" component={SignupPage} />
			<CustomRoute isPrivate exact path="/feed" component={FeedPage} />
		</Switch>
	);
}
