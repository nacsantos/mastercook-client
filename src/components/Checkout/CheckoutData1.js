import React, { useContext, useState, Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../Context/CheckoutContext";

import {
	OrderDetails, OrderDetailsH6, ButtonMedium, H5
} from "./CheckoutElements";

import api from "../../api";
import { withRouter, Redirect } from "react-router-dom";

const total_order_ingredients_products = (order_ingredients_products) => {
       
    var order_ingredients_products_total = 0;
    
    var ingredient_product;

    for (ingredient_product in order_ingredients_products) {
        order_ingredients_products_total += parseFloat(order_ingredients_products[ingredient_product].price);
    }
    
    return order_ingredients_products_total;

};

class Order extends Component {
	constructor(props) {
        super(props);
        this.state = {
            order_ingredients_products: [],
            total: 0,
            show: false,
            redirect: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.setState({
            order_ingredients_products: JSON.parse(localStorage.getItem('checkoutList')),
            total: Number(localStorage.getItem('checkoutTotal').substring(1, localStorage.getItem('checkoutTotal').length - 1))
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.order_ingredients_products !== this.state.order_ingredients_products){
            this.setState({
                show: true
            })
        }
    }

    handleClick() {
        this.setState({
            redirect: true
        })
    }
    
    render() {

        if (this.state.redirect) {
            return <Redirect to={{pathname: "/compareprice/x"}} />
        }
        
        return (
            <>
                <h5 className="checkout-title">Order Details</h5>
                <Container className="checkout-container2" fluid>
                    <Row>
                        <Col>
                            <h6><b>Ingredient/Product</b></h6>
                        </Col>
                        <Col>
                            <h6><b>Price</b></h6>
                        </Col>
                    </Row>
                    {
                        this.state.show ?
                        this.state.order_ingredients_products.map(item => {
                            console.log(item)
                            return (
                                <Row>
                                    <Col>{item.ingredient}</Col>
                                    <Col>{item.price}€</Col>
                                </Row>
                            );
                        }) :
                        <></>
                    }
                    <hr />
                    <Row>
                        <Col>
                            <h5>Total: { 
                                this.state.show ?
                                this.state.total :
                                ""
                            } €</h5>
                        </Col>
                    </Row>
                    <hr />
                    <center>
                            <ButtonMedium onClick={this.handleClick}>Edit Order</ButtonMedium>
                    </center>
                </Container>
            </>
        );
	}
}
export default withRouter(Order);
