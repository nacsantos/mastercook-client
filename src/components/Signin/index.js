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
	const { handleChangeValues, handleLogin } = useContext(Context);

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
							<FormLabel htmlFor="for">Username</FormLabel>
							<FormInput
								type="text"
								required
								id="user_username"
								name="user_username"
								onChange={onChange}
								// value={values.user}
							/>
							<FormLabel htmlFor="for">Password</FormLabel>
							<FormInput
								type="password"
								required
								id="user_password"
								name="user_password"
								onChange={onChange}
								// value={values.password}
							/>
							<FormButton type="button" onClick={handleLogin}>
								Sign In
							</FormButton>
                            <br/>
                            <center>
                                <a href=""><Text>Forgot password?</Text></a>
                            </center>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
			<ToastContainer />
		</>
	);
};

export default SignIn;
