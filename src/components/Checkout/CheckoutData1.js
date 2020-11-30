import React, { useContext, useState, Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Form, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Context } from "../../Context/CheckoutContext";

import {
	OrderDetails, OrderDetailsH6, ButtonMedium, H5
} from "./CheckoutElements";

import api from "../../api";
import { withRouter } from "react-router-dom";

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
		this.order_ingredients_products = props;
        this.order_ingredients_products = [
            { 
                "ingredient": "3 lb Cod Fillet",
                "price": "11"
            },
            { 
                "ingredient": "Chopped Fresh Parsley Leaves",
                "price": "1"
            },
            { 
                "ingredient": "Lemmons",
                "price": "2.99"
            }
        ];
        
	}
    
    render() {
        
        const order_ingredients_products_info = [];
        
        for (let ingredient_product in this.order_ingredients_products) {
            order_ingredients_products_info.push(this.order_ingredients_products[ingredient_product]);
        }
        
        return (
            <>
                <H5>Order Details</H5>
                <hr />
                <OrderDetails>
                    <Row>
                        <Col><OrderDetailsH6><b>Ingredient/Product</b></OrderDetailsH6></Col>
                        <Col><OrderDetailsH6><b>Price</b></OrderDetailsH6></Col>
                    </Row>
                    
                    <div>
                      {
                        order_ingredients_products_info.map(item => {
                          return <div><Row><Col>{item.ingredient}</Col><Col>{item.price}€</Col></Row></div>;
                        })
                      }
                    </div>
                    
                    <hr />
                    <Row>
                        <Col><h5>Total: {total_order_ingredients_products(this.order_ingredients_products)}€</h5></Col>
                    </Row>
                    <hr />
                    <center>
                            <ButtonMedium>Edit Order</ButtonMedium>
                    </center>
                </OrderDetails>
            </>
        );
	}
}
export default withRouter(Order);
