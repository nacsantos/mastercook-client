import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "react-router-dom";
import {
	Container1,
	FormWrap,
	Icon,
	FormContent,
	Form,
	FormH1,
	FormLabel,
	FormInput,
	FormButton,
    FormSelectDay,
    FormSelectMonth,
    FormSelectYear,
	Text,
    TextSlashDate,
    ContainerSelectDate,
    SelectDateStyles,
    FormRadioWrapper,
    RadioMark,
    RadioInput,
    RadioLabel,
    RadioText1,
    RadioText2,
} from "./SignupElements";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import api from "../../api";
import "./Signup.css"


class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user_username: "",
			user_email: "",
			user_first_name: "",
			user_last_name: "",
            user_password_1: "",
            user_password_2: "",
            user_gender: "",
            user_birthday_day: "",
            user_birthday_month: "",
            user_birthday_year: "",
            user_profile_photo: "",
            user_role: "",
            user_register_timestamp: "",
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = async (event) => {
		event.preventDefault();
        
		api
			.post("/api/users/register", {
                user_username: this.state.user_username,
                user_email: this.state.user_email,
                user_first_name: this.state.user_first_name,
                user_last_name: this.state.user_last_name,
                user_password_1: this.state.user_password_1,
                user_password_2: this.state.user_password_2,
                user_gender: this.state.user_gender,
                user_birthday: String(this.state.user_birthday_year + "/" + this.state.user_birthday_month + "/" + this.state.user_birthday_day),
                user_profile_photo: "",
                user_role: "User",
                user_register_timestamp: new Date(),
			})
			.then(
				(response) => {
					toast.success("Registered with success!", {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						onClose: () => this.props.history.push("/"),
					});
				},
				(error) => {
					let messageError = error.response.data.error;
					toast.error(messageError, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			);
	};

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
        
        if(name == "user_gender") {
            this.setState({
                [name]: value,
            });  
        }
        else {
            this.setState({
                [name]: value,
            });   
        }
	}

	render() {
		return (
			<Container className="signup-container" fluid>
				<Container1>
					<FormWrap>
						<Icon to="/">MasterCook</Icon>
						<FormContent>
							<Form onSubmit={this.handleSubmit}>
								<FormH1>Sign up to your account</FormH1>
								<FormLabel htmlFor="for">Username</FormLabel>
								<FormInput
									name="user_username"
									value={this.state.user_username}
									type="text"
									required
									onChange={this.handleInputChange}
								/>
								<FormLabel htmlFor="for">E-mail</FormLabel>
								<FormInput
									name="user_email"
									value={this.state.user_email}
									type="email"
									required
									onChange={this.handleInputChange}
								/>
								<FormLabel htmlFor="for">First Name</FormLabel>
								<FormInput
									name="user_first_name"
									value={this.state.user_first_name}
									type="text"
									required
									onChange={this.handleInputChange}
								/>
								<FormLabel htmlFor="for">Last Name</FormLabel>
								<FormInput
									name="user_last_name"
									value={this.state.user_last_name}
									type="text"
									required
									onChange={this.handleInputChange}
								/>
								<FormLabel htmlFor="for">Password</FormLabel>
								<FormInput
									name="user_password_1"
									value={this.state.user_password_1}
									type="password"
									required
									onChange={this.handleInputChange}
								/>
								<FormLabel htmlFor="for">Repeat Password</FormLabel>
								<FormInput
									name="user_password_2"
									value={this.state.user_password_2}
									type="password"
									required
									onChange={this.handleInputChange}
								/>
								<FormLabel htmlFor="for">Gender</FormLabel>
                                <FormRadioWrapper>
                                    <RadioLabel>
                                        <RadioInput 
                                            id="male"
                                            name="user_gender"
                                            value="Male"
                                            type="radio"
									        onChange={this.handleInputChange}
                                        />
                                        <RadioMark />
                                        <RadioText1>Male</RadioText1>
                                    </RadioLabel>
                                    <RadioLabel>
                                        <RadioInput
                                            id="female"
                                            name="user_gender"
                                            value="Female"
                                            type="radio"
									        onChange={this.handleInputChange}
                                        />                  
                                        <RadioMark />
                                        <RadioText1>Female</RadioText1>
                                    </RadioLabel>
                                    <RadioLabel>
                                        <RadioInput
                                            id="prefer_not_to_say"
                                            name="user_gender"
                                            value="Prefer not to say"
                                            type="radio"
									        onChange={this.handleInputChange}
                                        />                  
                                        <RadioMark />
                                        <RadioText2>I prefer not to say</RadioText2>
                                    </RadioLabel>
                                </FormRadioWrapper>
                                <FormLabel htmlFor="for">Birthday</FormLabel>
                                <ContainerSelectDate>
                                    <FormSelectDay name="user_birthday_day"
                                        styles={SelectDateStyles}
                                        value={this.state.user_birthday_day}
                                        type="select"
                                        required
                                        onChange={this.handleInputChange}>
                                      <option>Day</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>
                                      <option value="11">11</option>
                                      <option value="12">12</option>
                                      <option value="13">13</option>
                                      <option value="14">14</option>
                                      <option value="15">15</option>
                                      <option value="16">16</option>
                                      <option value="17">17</option>
                                      <option value="18">18</option>
                                      <option value="19">19</option>
                                      <option value="20">20</option>            
                                      <option value="21">21</option>
                                      <option value="22">22</option>
                                      <option value="23">23</option>
                                      <option value="24">24</option>
                                      <option value="25">25</option>
                                      <option value="26">26</option>
                                      <option value="27">27</option>
                                      <option value="28">28</option>
                                      <option value="29">29</option>
                                      <option value="30">30</option>
                                      <option value="31">31</option>
                                    </FormSelectDay>
                                    <TextSlashDate>/</TextSlashDate>
                                    <FormSelectMonth name="user_birthday_month"
                                        value={this.state.user_birthday_month}
                                        styles={SelectDateStyles}
                                        type="select"
                                        required
                                        onChange={this.handleInputChange}>
                                      <option>Month</option>
                                      <option value="1">January</option>
                                      <option value="2">February</option>
                                      <option value="3">March</option>
                                      <option value="4">April</option>
                                      <option value="5">May</option>
                                      <option value="6">June</option>
                                      <option value="7">July</option>
                                      <option value="8">August</option>
                                      <option value="9">September</option>
                                      <option value="10">October</option>
                                      <option value="11">November</option>
                                      <option value="12">December</option>
                                    </FormSelectMonth>
                                    <TextSlashDate>/</TextSlashDate>
                                    <FormSelectYear name="user_birthday_year"
                                        value={this.state.user_birthday_year}
                                        styles={SelectDateStyles}
                                        type="select"
                                        required
                                        onChange={this.handleInputChange}>
                                      <option>Year</option>
                                      <option value="2020">2020</option>
                                      <option value="2019">2019</option>
                                      <option value="2018">2018</option>
                                      <option value="2017">2017</option>
                                      <option value="2016">2016</option>
                                      <option value="2015">2015</option>
                                      <option value="2014">2014</option>
                                      <option value="2013">2013</option>
                                      <option value="2012">2012</option>
                                      <option value="2011">2011</option>
                                      <option value="2010">2010</option>
                                      <option value="2009">2009</option>
                                      <option value="2008">2008</option>
                                      <option value="2007">2007</option>
                                      <option value="2006">2006</option>
                                      <option value="2005">2005</option>
                                      <option value="2004">2004</option>
                                      <option value="2003">2003</option>
                                      <option value="2002">2002</option>
                                      <option value="2001">2001</option>
                                      <option value="2000">2000</option>
                                      <option value="1999">1999</option>
                                      <option value="1998">1998</option>
                                      <option value="1997">1997</option>
                                      <option value="1996">1996</option>
                                      <option value="1995">1995</option>
                                      <option value="1994">1994</option>
                                      <option value="1993">1993</option>
                                      <option value="1992">1992</option>
                                      <option value="1991">1991</option>
                                      <option value="1990">1990</option>
                                      <option value="1989">1989</option>
                                      <option value="1988">1988</option>
                                      <option value="1987">1987</option>
                                      <option value="1986">1986</option>
                                      <option value="1985">1985</option>
                                      <option value="1984">1984</option>
                                      <option value="1983">1983</option>
                                      <option value="1982">1982</option>
                                      <option value="1981">1981</option>
                                      <option value="1980">1980</option>
                                      <option value="1979">1979</option>
                                      <option value="1978">1978</option>
                                      <option value="1977">1977</option>
                                      <option value="1976">1976</option>
                                      <option value="1975">1975</option>
                                      <option value="1974">1974</option>
                                      <option value="1973">1973</option>
                                      <option value="1972">1972</option>
                                      <option value="1971">1971</option>
                                      <option value="1970">1970</option>
                                      <option value="1969">1969</option>
                                      <option value="1968">1968</option>
                                      <option value="1967">1967</option>
                                      <option value="1966">1966</option>
                                      <option value="1965">1965</option>
                                      <option value="1964">1964</option>
                                      <option value="1963">1963</option>
                                      <option value="1962">1962</option>
                                      <option value="1961">1961</option>
                                      <option value="1960">1960</option>
                                      <option value="1959">1959</option>
                                      <option value="1958">1958</option>
                                      <option value="1957">1957</option>
                                      <option value="1956">1956</option>
                                      <option value="1955">1955</option>
                                      <option value="1954">1954</option>
                                      <option value="1953">1953</option>
                                      <option value="1952">1952</option>
                                      <option value="1951">1951</option>
                                      <option value="1950">1950</option>
                                      <option value="1949">1949</option>
                                      <option value="1948">1948</option>
                                      <option value="1947">1947</option>
                                      <option value="1946">1946</option>
                                      <option value="1945">1945</option>
                                      <option value="1944">1944</option>
                                      <option value="1943">1943</option>
                                      <option value="1942">1942</option>
                                      <option value="1941">1941</option>
                                      <option value="1940">1940</option>
                                      <option value="1939">1939</option>
                                      <option value="1938">1938</option>
                                      <option value="1937">1937</option>
                                      <option value="1936">1936</option>
                                      <option value="1935">1935</option>
                                      <option value="1934">1934</option>
                                      <option value="1933">1933</option>
                                      <option value="1932">1932</option>
                                      <option value="1931">1931</option>
                                      <option value="1930">1930</option>
                                      <option value="1929">1929</option>
                                      <option value="1928">1928</option>
                                      <option value="1927">1927</option>
                                      <option value="1926">1926</option>
                                      <option value="1925">1925</option>
                                      <option value="1924">1924</option>
                                      <option value="1923">1923</option>
                                      <option value="1922">1922</option>
                                      <option value="1921">1921</option>
                                      <option value="1920">1920</option>
                                      <option value="1919">1919</option>
                                      <option value="1918">1918</option>
                                      <option value="1917">1917</option>
                                      <option value="1916">1916</option>
                                      <option value="1915">1915</option>
                                      <option value="1914">1914</option>
                                      <option value="1913">1913</option>
                                      <option value="1912">1912</option>
                                      <option value="1911">1911</option>
                                      <option value="1910">1910</option>
                                      <option value="1909">1909</option>
                                      <option value="1908">1908</option>
                                      <option value="1907">1907</option>
                                      <option value="1906">1906</option>
                                      <option value="1905">1905</option>
                                      <option value="1904">1904</option>
                                      <option value="1903">1903</option>
                                      <option value="1902">1902</option>
                                      <option value="1901">1901</option>
                                      <option value="1900">1900</option>
                                    </FormSelectYear>
                                </ContainerSelectDate>
                                <br />
                                <FormButton type="submit">Sign Up</FormButton>    
                                <br />
                                <center>
                                    <a className="signup-text" href=""><Text>Forgot password?</Text></a>
                                    <br />
                                    <a className="signup-text" href=""><Text>Do you have an account? Sign up!</Text></a>
                                </center>
							</Form>
						</FormContent>
					</FormWrap>
				</Container1>
				<ToastContainer />
			</Container>
		);
	}
}
export default withRouter(SignUp);
