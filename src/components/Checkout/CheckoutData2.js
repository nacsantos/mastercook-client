import React, { useContext, useState, Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Row, Col } from "react-bootstrap";
import { Context } from "../../Context/CheckoutContext";
import { withRouter } from "react-router-dom";

import {
	Container,
	FormWrap,
	Icon,
	FormContent,
	Form,
	FormH1,
	FormLabel,
	FormInputFull,
	FormInputBig,
	FormInputMedium,
	FormInputSmall,
	FormSmall,
	FormButtonBig,
    CreditDebitCardSubform,
    FormSelectState,
    FormSelectMonth,
    FormSelectYear,
	Text,
    TextSeparator,
    ContainerSingleRow,
    SelectStyles,
    FormRadioWrapper,
    FormRadioWrapperCol,
    RadioMark,
    RadioInput,
    RadioLabel,
    RadioText1,
    RadioText2,
} from "./RecipeElements";
import api from "../../api";
class DeliveryAndPayment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user_order_delivery_full_name: "",
			user_order_delivery_address: "",
			user_order_delivery_zip_postal_code: "",
			user_order_delivery_city: "",
            user_order_delivery_state: "",
            user_order_delivery_type_service: "",
            user_order_payment_type: "",
            user_order_payment_credit_debit_card_brand: "",
            user_order_payment_credit_debit_card_num: "",
            user_order_payment_credit_debit_card_cvv: "",
            user_order_payment_credit_debit_card_expiration_month: "",
            user_order_payment_credit_debit_card_expiration_year: "",
            user_order_payment_credit_debit_card_holder: "",
		};
        this.showCreditDebitCartSubform = false;
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    }
    
	handleSubmit = async (event) => {
		event.preventDefault();
        
		api
			.post("/api/users/register", {
                user_order_last_name: this.state.user_order_last_name,
                user_last_name: this.state.user_order_last_name,
                user_order_last_name: this.state.user_order_last_name,
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
		const id = target.id;
		const value = target.value;
		const name = target.name;
        
        this.setState({
            [name]: value,
        });   
        
        if (name === "user_order_payment_type") {      

            if (value === "Credit/Debit Card") {
                this.showCreditDebitCartSubform = true;
            }
            else {
                this.showCreditDebitCartSubform = false;
            }
        }
	}

    render() {
        
        return (
		<>
            <h4>Delivery and Payment Details</h4>
            <hr />
            <Form onSubmit={this.handleSubmit}>
                <FormLabel htmlFor="for">Full Name</FormLabel>
                <FormInputFull
                    name="user_order_delivery_full_name"
                    value={this.state.user_order_delivery_full_name}
                    type="text"
                    required
                    onChange={this.handleInputChange}
                />
                <FormLabel htmlFor="for">Address</FormLabel>
                <FormInputFull
                    name="user_order_delivery_address"
                    value={this.state.user_order_delivery_address}
                    type="text"
                    required
                    onChange={this.handleInputChange}
                />
                <FormLabel htmlFor="for">Zip/Postal Code</FormLabel>
                <ContainerSingleRow>
                    <FormInputMedium
                        name="user_order_delivery_zip_postal_code_1"
                        value={this.state.user_order_delivery_zip_postal_code_1}
                        type="text"
                        required
                        onChange={this.handleInputChange}
                    />
                    <TextSeparator>-</TextSeparator>
                    <FormInputMedium
                        name="user_order_delivery_zip_postal_code_2"
                        value={this.state.user_order_delivery_zip_postal_code_2}
                        type="text"
                        required
                        onChange={this.handleInputChange}
                    />
                </ContainerSingleRow>
                <FormLabel htmlFor="for">City</FormLabel>
                <FormInputFull
                    name="user_order_delivery_city"
                    value={this.state.user_order_delivery_city}
                    type="text"
                    required
                    onChange={this.handleInputChange}
                />
                <FormLabel htmlFor="for">State</FormLabel>        
                <FormSelectState name="user_order_delivery_state"
                    styles={SelectStyles}
                    value={this.state.user_order_delivery_state}
                    type="select"
                    required
                    onChange={this.handleInputChange}>
                      <option>Select a state</option>
                      <option value="Aveiro">Aveiro</option>
                      <option value="Beja">Beja</option>
                      <option value="Braga">Braga</option>
                      <option value="Bragança">Bragança</option>
                      <option value="Castelo Branco">Castelo Branco</option>
                      <option value="Coimbra">Coimbra</option>
                      <option value="Évora">Évora</option>
                      <option value="Faro">Faro</option>
                      <option value="Guarda">Guarda</option>
                      <option value="Leiria">Leiria</option>
                      <option value="Lisboa">Lisboa</option>
                      <option value="Portalegre">Portalegre</option>
                      <option value="Porto">Porto</option>
                      <option value="Santarém">Santarém</option>
                      <option value="Setúbal">Setúbal</option>
                      <option value="Viana do Castelo">Viana do Castelo</option>
                      <option value="Vila Real">Vila Real</option>
                      <option value="Viseu">Viseu</option>
                      <option value="Açores">Açores</option>
                      <option value="Madeira">Madeira</option>
                </FormSelectState>
                <FormLabel htmlFor="for">Delivery Type/Service</FormLabel>
                <FormSelectState name="user_order_delivery_type_service"
                    styles={SelectStyles}
                    value={this.state.user_order_delivery_type_service}
                    type="select"
                    required
                    onChange={this.handleInputChange}>
                      <option>Select a delivery type/service</option>
                      <option value="Standard">Standard [+2€ - 2 days]</option>
                      <option value="Express">Express [+3€ - 1 day]</option>
                      <option value="Glovo">Glovo [+4€ - 1~2 hour(s)]</option>
                </FormSelectState> 
                <hr/>        
                <FormLabel htmlFor="for">Payment Type</FormLabel>
                <FormSelectState
                    name="user_order_payment_type"
                    styles={SelectStyles}
                    value={this.state.user_order_payment_type}
                    type="select"
                    required
                    onChange={this.handleInputChange}>
                      <option>Select a payment type</option>
                      <option value="Credit/Debit Card">Credit/Debit Card</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                      <option value="Paypal">Paypal</option>
                </FormSelectState>
        
                <CreditDebitCardSubform id="credit_debit_card_subform" hidden={!this.showCreditDebitCartSubform}>
                    <br/>
                    <FormLabel htmlFor="for">Credit/Debit Card Brand</FormLabel>
                    <FormRadioWrapper>
                        <RadioLabel>
                            <RadioInput 
                                id="american_express"
                                name="user_order_payment_credit_debit_card_brand"
                                value="American Express"
                                type="radio"
                                onChange={this.handleInputChange}
                            />
                            <RadioMark />
                            <RadioText2>American Express</RadioText2>
                        </RadioLabel>
                        <RadioLabel>
                            <RadioInput
                                id="mastercard"
                                name="user_order_payment_credit_debit_card_brand"
                                value="MasterCard"
                                type="radio"
                                onChange={this.handleInputChange}
                            />                  
                            <RadioMark />
                            <RadioText2>MasterCard</RadioText2>
                        </RadioLabel>
                        <RadioLabel>
                            <RadioInput
                                id="visa"
                                name="user_order_payment_credit_debit_card_brand"
                                value="Visa"
                                type="radio"
                                onChange={this.handleInputChange}
                            />                  
                            <RadioMark />
                            <RadioText1>Visa</RadioText1>
                        </RadioLabel>
                    </FormRadioWrapper>
                    <FormLabel htmlFor="for">Card Number and CVV</FormLabel>
                    <ContainerSingleRow>
                        <FormInputBig
                            name="user_order_payment_credit_debit_card_num"
                            value={this.state.user_order_payment_credit_debit_card_num}
                            type="text"
                            required
                            onChange={this.handleInputChange}
                        />
                        <FormInputSmall
                            name="user_order_payment_credit_debit_card_cvv"
                            value={this.state.user_order_payment_credit_debit_card_cvv}
                            type="text"
                            required
                            onChange={this.handleInputChange}
                        />
                    </ContainerSingleRow>
                    <FormLabel htmlFor="for">Expiration Date</FormLabel>
                    <ContainerSingleRow>
                        <FormSelectMonth name="user_order_payment_credit_debit_card_expiration_month"
                                value={this.state.user_order_payment_credit_debit_card_expiration_month}
                                styles={SelectStyles}
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
                            <TextSeparator>/</TextSeparator>
                            <FormSelectYear name="user_order_payment_credit_debit_card_expiration_year"
                                value={this.state.user_order_payment_credit_debit_card_expiration_year}
                                styles={SelectStyles}
                                type="select"
                                required
                                onChange={this.handleInputChange}>
                              <option>Year</option>
                              <option value="2030">2030</option>
                              <option value="2029">2029</option>
                              <option value="2028">2028</option>
                              <option value="2027">2027</option>
                              <option value="2026">2026</option>
                              <option value="2025">2025</option>
                              <option value="2024">2024</option>
                              <option value="2023">2023</option>
                              <option value="2022">2022</option>
                              <option value="2021">2021</option>
                              <option value="2020">2020</option>
                            </FormSelectYear>
                        </ContainerSingleRow>
                        <FormLabel htmlFor="for">Credit/Debit Card Holder</FormLabel>
                        <FormInputFull
                            name="user_order_payment_credit_debit_card_holder"
                            value={this.state.user_order_payment_credit_debit_card_holder}
                            type="text"
                            required
                            onChange={this.handleInputChange}
                        />
                    <hr/>
                </CreditDebitCardSubform>
                <br />
                
                <FormButtonBig type="submit">Proceed</FormButtonBig>
            </Form>
            <br />
            <br />
		</>
		);
	}
}
export default withRouter(DeliveryAndPayment);
