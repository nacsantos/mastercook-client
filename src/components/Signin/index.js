import React, { useContext } from "react";
import { Context } from "../../Context/AuthContext";
import {
	Container,
	FormWrap,
	Icon,
	FormContent,
	Form,
	FormH1,
	FormLabel,
	FormInput,
	FormButton,
	Text,
} from "./SiginElements";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
	const { errorMessage, errorLogin, setErrorLogin } = useContext(Context);
	if (errorLogin) {
		let message = errorMessage;
		console.log(message);
		setErrorLogin(false);
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
		return notify() && <LoginForm />;
	} else {
		return <LoginForm />;
	}
};

const LoginForm = (props) => {
	const {
		handleChangeValues,
		handleLogin,
		errorMessage,
		errorLogin,
	} = useContext(Context);

	function onChange(event) {
		handleChangeValues(event);
	}
	return (
		<>
			<Container>
				<FormWrap>
					<Icon to="/">MasterCook</Icon>
					<FormContent>
						<Form action="#">
							<FormH1>Sign in to your account</FormH1>
							<FormLabel htmlFor="for">Email</FormLabel>
							<FormInput
								type="email"
								required
								id="email"
								name="email"
								onChange={onChange}
								// value={values.user}
							/>
							<FormLabel htmlFor="for">Password</FormLabel>
							<FormInput
								type="password"
								required
								id="password"
								name="password"
								onChange={onChange}
								// value={values.password}
							/>
							<FormButton type="button" onClick={handleLogin}>
								Continue
							</FormButton>
							<Text>Forgot password</Text>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
			<ToastContainer />
		</>
	);
};

export default SignIn;
