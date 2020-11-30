import React, { useContext } from "react";
import { CheckoutProvider } from "../../Context/CheckoutContext";

import { Row, Col } from "react-bootstrap";
import CheckoutData1 from "./CheckoutData1";
import CheckoutData2 from "./CheckoutData2";
import "./CheckoutElements.css";
import { Context } from "../../Context/CheckoutContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutForm = () => {
	return (
		<CheckoutProvider>
			<CheckoutContainer />
		</CheckoutProvider>
	);
};

const CheckoutContainer = () => {
	const { errorMessage, errorAddRecipe, setErrorAddRecipe } = useContext(
		Context
	);

	if (errorAddRecipe) {
		let message = errorAddRecipe;
		console.log(message);
		setErrorAddRecipe(false);
		const notify = () =>
			toast.error(errorMessage, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		return notify() && <AuxComponent />;
	} else {
		return <AuxComponent />;
	}
};

const AuxComponent = () => {
	return (
		<>
			<div className="container">
				<Row>
					<Col id="container1">
						<CheckoutData1 />
					</Col>
					<Col id="container2">
						<CheckoutData2 />
					</Col>
				</Row>
			</div>
		</>
	);
};

export default CheckoutForm;
