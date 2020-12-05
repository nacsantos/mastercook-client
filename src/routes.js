import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "./Context/AuthContext";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import FeedPage from "./pages/feed";
import Home from "./pages";
import { CheckoutPage } from "./pages/checkout";
import { CreateRecipePage } from "./pages/createRecipe";
import { RecipePage } from "./pages/recipe";
import { ComparePricesPage } from "./pages/comparePrices";
import MDSpinner from "react-md-spinner";
import "./App.css";
import PageNotFound from "./components/NotFound";

function CustomRoute({ isPrivate, ...rest }) {
	const { loading, authenticated } = useContext(Context);

	if (loading) {
		return <MDSpinner id="feedSpinner" size={100} />;
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
			<CustomRoute isPrivate exact path="/recipe/x" component={RecipePage} />
			<CustomRoute
				isPrivate
				exact
				path="/checkout/x"
				component={CheckoutPage}
			/>
			<CustomRoute
				isPrivate
				exact
				path="/recipes/add"
				component={CreateRecipePage}
			/>
			<CustomRoute isPrivate exact path="/recipe/" component={RecipePage} />
			<CustomRoute
				isPrivate
				exact
				path="/compareprice/x"
				component={ComparePricesPage}
			/>
			<Route component={PageNotFound} />
		</Switch>
	);
}
