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

const SignIn = () => {
	const { handleChangeValues, handleLogin } = useContext(Context);

	function onChange(event) {
		handleChangeValues(event);
	}
	function onSubmit() {
		handleLogin();
	}
	return (
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
	);
};

export default SignIn;
