import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { Redirect } from "react-router-dom";

import "../RecipeContainer/RecipeContainer.css";
import "./ComparePricesContainer.css";

const supermarketData = [
    {
        "name": "LIDL"
    },
    {
        "name": "ALDI"
    },
    {
        "name": "AUCHAN"
    },
    {
        "name": "CONTINENTE"
    },
]

export const ComparePricesContainer = (props) => {
    const [pricesToShow, setPricesToShow] = useState([]);
    const [redirect, setRedirect] = useState(false);

    const DecreaseInput = (el) => {
        let ariaL = el.currentTarget.getAttribute("aria-label");
        document.getElementById(ariaL).stepDown();
    }

    const IncreaseInput = (el) => {
        let ariaL = el.currentTarget.getAttribute("aria-label");
        document.getElementById(ariaL).stepUp();
    }

    const ingItems = props.ings.map((element, index) => {
        return (
            <Container className="compareprices-elem-container">
                <Row>
                    <Col className="compareprices-elem-col align-left" lg="3">
                        <li key={element.text} className="recipe-ingredient">{element.text}</li>
                    </Col>
                    <Col className="compareprices-elem-col" lg="9">
                        <Container fluid>
                            <Row>
                                <Col className="compareprices-elem-col" lg="3">
                                    <Container fluid>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <span 
                                                    id={index + "-0-price"}
                                                >
                                                    {(Math.random() * 10).toFixed(2)}
                                                </span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <AiOutlineMinusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={DecreaseInput}
                                                    aria-label={index + "-0"}
                                                />
                                                <input 
                                                    className="compareprices-elem-input" 
                                                    id={index + "-0"} 
                                                    type="number" min="0" defaultValue="0"
                                                />
                                                <AiOutlinePlusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={IncreaseInput}
                                                    aria-label={index + "-0"}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="compareprices-elem-col" lg="3">
                                    <Container fluid>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <span 
                                                    id={index + "-1-price"}
                                                >
                                                    {(Math.random() * 10).toFixed(2)}
                                                </span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <AiOutlineMinusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={DecreaseInput}
                                                    aria-label={index + "-1"}
                                                />
                                                <input 
                                                    className="compareprices-elem-input" 
                                                    id={index + "-1"} 
                                                    type="number" min="0" defaultValue="0"
                                                />
                                                <AiOutlinePlusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={IncreaseInput}
                                                    aria-label={index + "-1"}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="compareprices-elem-col" lg="3">
                                    <Container fluid>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <span 
                                                    id={index + "-2-price"}
                                                >
                                                    {(Math.random() * 10).toFixed(2)}
                                                </span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <AiOutlineMinusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={DecreaseInput}
                                                    aria-label={index + "-2"}
                                                />
                                                <input 
                                                    className="compareprices-elem-input" 
                                                    id={index + "-2"} 
                                                    type="number" min="0" defaultValue="0"
                                                />
                                                <AiOutlinePlusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={IncreaseInput}
                                                    aria-label={index + "-2"}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="compareprices-elem-col" lg="3">
                                    <Container fluid>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <span 
                                                    id={index + "-3-price"}
                                                >
                                                    {(Math.random() * 10).toFixed(2)}
                                                </span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <AiOutlineMinusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={DecreaseInput}
                                                    aria-label={index + "-3"}
                                                />
                                                <input 
                                                    className="compareprices-elem-input" 
                                                    id={index + "-3"} 
                                                    type="number" min="0" defaultValue="0"
                                                />
                                                <AiOutlinePlusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={IncreaseInput}
                                                    aria-label={index + "-3"}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    })

    const handleClickRedirect = () => {
        let namePrice = []
        for(let i = 0; i < props.ings.length; i++){
            let total = 0;
            for(let w = 0; w < supermarketData.length; w++){
                let num = document.getElementById(i + "-" + w).value;
                let price = document.getElementById(i + "-" + w + "-price").innerText;
                num = Number(num);
                price = Number(price);
                total += (price * num);
            }
            let k = "{\"" + props.ings[i].text + "\":" + total + "}";
            let t = JSON.parse(k);
            namePrice.push(t);
        }
        localStorage.setItem('checkoutList',JSON.stringify(namePrice));
        setRedirect(true);
    };

    const marketNames = supermarketData.map((element) => {
        return (
            <Col className="compareprices-elem-col">
                <span>{element.name}</span>
            </Col>
        )
    })

    if (redirect) {
        return <Redirect to={{pathname: "/checkout/x"}} />
    }

	return (
        <Container>
            <Row className="recipe-title-row">
                <Col lg="3" className="compareprices-elem-col"></Col>
                <Col lg="9" className="compareprices-elem-col">
                    <Container>
                        <Row>
                            {marketNames}
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row className="recipe-title-row">
                <Col className="recipe-title-col">
                    {ingItems}
                </Col>
            </Row>
            <Row>
                <Col className="go-checkout-col">
                    <button className="recipe-buy-button" onClick={handleClickRedirect}>Proceed to checkout {'>'}</button>
                </Col>
            </Row>
        </Container>
	);
};
