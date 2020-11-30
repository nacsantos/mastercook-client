import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

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

    const DecreaseInput = (el) => {
        let ariaL = el.currentTarget.getAttribute("aria-label");
        document.getElementById(ariaL).stepDown();
    }

    const IncreaseInput = (el) => {
        let ariaL = el.currentTarget.getAttribute("aria-label");
        document.getElementById(ariaL).stepUp();
    }

    const ingItems = props.ings.map((element) => {
        return (
            <Container className="compareprices-elem-container">
                <Row>
                    <Col className="compareprices-elem-col" lg="2">
                        {/*<img src={} />*/}
                        <li key={element.toString()} className="recipe-ingredient">{element}</li>
                    </Col>
                    <Col className="compareprices-elem-col" lg="3">
                        <li key={element.toString()} className="recipe-ingredient">{element}</li>
                    </Col>
                    <Col className="compareprices-elem-col" lg="7">
                        <Container fluid>
                            <Row>
                                <Col className="compareprices-elem-col" lg="3">
                                    <Container fluid>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <span>PRICE</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <AiOutlineMinusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={DecreaseInput}
                                                    aria-label={element.toString() + "-" + supermarketData[0].name}
                                                />
                                                <input 
                                                    className="compareprices-elem-input" 
                                                    id={element.toString() + "-" + supermarketData[0].name} 
                                                    type="number" min="0" defaultValue="0"
                                                />
                                                <AiOutlinePlusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={IncreaseInput}
                                                    aria-label={element.toString() + "-" + supermarketData[0].name}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="compareprices-elem-col" lg="3">
                                    <Container fluid>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <span>PRICE</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <AiOutlineMinusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={DecreaseInput}
                                                    aria-label={element.toString() + "-" + supermarketData[1].name}
                                                />
                                                <input 
                                                    className="compareprices-elem-input" 
                                                    id={element.toString() + "-" + supermarketData[1].name} 
                                                    type="number" min="0" defaultValue="0"
                                                />
                                                <AiOutlinePlusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={IncreaseInput}
                                                    aria-label={element.toString() + "-" + supermarketData[1].name}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="compareprices-elem-col" lg="3">
                                    <Container fluid>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <span>PRICE</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <AiOutlineMinusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={DecreaseInput}
                                                    aria-label={element.toString() + "-" + supermarketData[2].name}
                                                />
                                                <input 
                                                    className="compareprices-elem-input" 
                                                    id={element.toString() + "-" + supermarketData[2].name} 
                                                    type="number" min="0" defaultValue="0"
                                                />
                                                <AiOutlinePlusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={IncreaseInput}
                                                    aria-label={element.toString() + "-" + supermarketData[2].name}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="compareprices-elem-col" lg="3">
                                    <Container fluid>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <span>PRICE</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="compareprices-elem-col">
                                                <AiOutlineMinusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={DecreaseInput}
                                                    aria-label={element.toString() + "-" + supermarketData[3].name}
                                                />
                                                <input 
                                                    className="compareprices-elem-input" 
                                                    id={element.toString() + "-" + supermarketData[3].name} 
                                                    type="number" min="0" defaultValue="0"
                                                />
                                                <AiOutlinePlusCircle
                                                    className="compareprices-elem-icon"
                                                    onClick={IncreaseInput}
                                                    aria-label={element.toString() + "-" + supermarketData[3].name}
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
        window.location.reload(false);
    };

    const marketNames = supermarketData.map((element) => {
        return (
            <Col className="compareprices-elem-col">
                <span>{element.name}</span>
            </Col>
        )
    })

	return (
        <Container>
            <Row className="recipe-title-row">
                <Col lg="2" className="compareprices-elem-col"></Col>
                <Col lg="3" className="compareprices-elem-col"></Col>
                <Col lg="7" className="compareprices-elem-col">
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
