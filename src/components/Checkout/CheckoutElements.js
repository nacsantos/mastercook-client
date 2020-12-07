import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormWrap = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 400px) {
		height: 80%;
	}
`;

export const Icon = styled(Link)`
	margin-left: 32px;
	margin-top: 32px;
	text-decoration: none;
	color: #fff;
	font-weight: 700;
	font-size: 32px;

	@media screen and (max-width: 400px) {
		margin-left: 32px;
		margin-top: 32px;
	}
`;

export const FormContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media screen and (max-width: 400px) {
		padding: 10px;
	}
`;

export const OrderDetails = styled.div`
	background: #AAAAAA;
  color: #FFFFFF;
	max-width: 400px;
	height: auto;
	width: 100%;
	z-index: 1;
	display: grid;
	margin: 0 auto;
	padding: 32px 32px;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
`;

export const H5 = styled.h5`
	color: #fff;
`;

export const OrderDetailsH6 = styled.h6`
	margin-bottom: 20px;
	color: #fff;
`;

export const Form = styled.form`
	background: #AAAAAA;
	max-width: 400px;
	height: auto;
	width: 100%;
	z-index: 1;
	display: grid;
	margin: 0 auto;
	padding: 32px 32px;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
`;

export const FormH1 = styled.h1`
	margin-bottom: 20px;
	color: #fff;
	font-size: 20px;
	font-weight: 400;
	text-align: center;
`;

export const FormLabel = styled.label`
	margin-bottom: 8px;
	font-size: 14px;
	color: #fff;
`;

export const FormInputFull = styled.input`
	padding: 10px 10px;
	margin-bottom: 10px;
	border: none;
	border-radius: 4px;
    width: 100%;
`;

export const FormInputBig = styled.input`
	padding: 10px 10px;
	margin-bottom: 10px;
	border: none;
	border-radius: 4px;
    width: 70%;
`;

export const FormInputMedium = styled.input`
	padding: 10px 10px;
	margin-bottom: 10px;
	border: none;
	border-radius: 4px;
    width: 45%;
`;

export const FormInputSmall = styled.input`
	padding: 10px 10px;
	margin-bottom: 10px;
	border: none;
	border-radius: 4px;
    width: 25%;
`;

export const FormButtonBig = styled.button`
	background: #E67F22;
	padding: 16px 0;
	border: none;
	border-radius: 4px;
	color: #fff;
	font-size: 20px;
	cursor: pointer;
    width: 100%
`;

export const ButtonMedium = styled.button`
	background: #E67F22;
	padding: 16px 0;
	border: none;
	border-radius: 4px;
	color: #fff;
	font-size: 20px;
	cursor: pointer;
    width: 75%
`;

export const ContainerSingleRow = styled('div')`
   width: 100%;
   display: flex;
   flex-flow: row wrap;
   justify-content: space-between;
   align-items: baseline;
 `;

export const SelectStyles = {
  container: base => ({
    ...base,
    flex: 1
  })
};

export const FormSelectState = styled.select`
    padding: 10px 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
    padding-left: 5px;
    font-size: 14px;
    
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const CreditDebitCardSubform = styled.div`
    
`;

export const FormSelectMonth = styled.select`
    padding: 10px 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
    width: 60%;
    padding-left: 5px;
    font-size: 14px;
    
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const FormSelectYear = styled.select`
    padding: 10px 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
    width: 35%;
    padding-left: 5px;
    font-size: 14px;
    
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const FormRadioWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: baseline;
`;

export const FormRadioWrapperCol = styled.div`
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: baseline;
`;

export const RadioMark = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid #777777;
  width: 14px;
  height: 14px;
  left: 0px;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: #E67F22;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 110ms;
  }
`;

export const RadioInput = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${RadioMark} {
    &::after {
      width: 10px;
      height: 10px;
      opacity: 1;
      left: 10%;
      top: 10%;
    }
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 14px;
  padding: 5px 10px 5px 0;
  position: relative;
  ${props =>
    props.disabled &&
    `
        cursor: not-allowed;
        opacity: 0.4;
    `}
`;

export const RadioText1 = styled.span`
    margin-top: -5%;
    display: flex;
	color: #fff;
	font-size: 14px;
`;

export const RadioText2 = styled.span`
    margin-top: -2.5%;
    display: flex;
	color: #fff;
	font-size: 14px;
`;

export const Text = styled.span`
	text-align: center;
	margin-top: 24px;
	color: #fff;
	font-size: 14px;
`;

export const TextSeparator = styled.span`
	text-align: center;
	color: #fff;
	font-size: 20px;
`;