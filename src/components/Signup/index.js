import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";

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
} from "./SigupElements";

const optionsError = {
	type: toast.TYPE.ERROR,
	position: "top-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
};
const optionsSuccess = {
	type: toast.TYPE.SUCCESS,
	position: "top-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	//onClose: () => <Redirect to="/" />,
};
export default class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", password: "", password2: "" };
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const user = {
			name: this.state.name,
			email: this.state.password,
			password: this.state.password,
			password2: this.state.password2,
		};
		axios
			.post("https://ipm-12-backend.herokuapp.com/api/users/register", {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
				password2: this.state.password2,
			})
			.then(function (response) {
				let messageSuccess = "Registered with success";
				toast.success(messageSuccess, optionsSuccess);
			})
			.catch(function (error) {
				let messageError = error.response.data.error;
				toast.error(messageError, optionsError);
			});
	};

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value,
		});
	}

	render() {
		return (
			<>
				<Container>
					<FormWrap>
						<Icon to="/">MasterCook</Icon>
						<FormContent>
							<Form onSubmit={this.handleSubmit}>
								<FormH1>Sign in to your account</FormH1>
								<FormLabel htmlFor="for">Name</FormLabel>
								<FormInput
									name="name"
									value={this.state.name}
									type="text"
									required
									onChange={this.handleInputChange}
								/>
								<FormLabel htmlFor="for">Email</FormLabel>
								<FormInput
									name="email"
									value={this.state.email}
									type="email"
									required
									onChange={this.handleInputChange}
								/>
								<FormLabel htmlFor="for">Password</FormLabel>
								<FormInput
									name="password"
									value={this.state.password}
									type="password"
									required
									onChange={this.handleInputChange}
								/>
								<FormLabel htmlFor="for">Repeat Password</FormLabel>
								<FormInput
									name="password2"
									value={this.state.password2}
									type="password"
									required
									onChange={this.handleInputChange}
								/>
								<FormButton type="submit">Submit</FormButton>
								<Text>Forgot password</Text>
							</Form>
						</FormContent>
					</FormWrap>
				</Container>
				<ToastContainer />
			</>
		);
	}
}
