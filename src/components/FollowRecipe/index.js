import React, {useState, useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import moment from 'moment';

import "../RecipeContainer/RecipeContainer.css";
import "./FollowRecipe.css";

export const FollowRecipe = (props) => {
    const [chosenInstruction, setChosenInstruction] = useState(0);
    const [timer, setTimer] = useState("");
    const [started, setStarted] = useState(false);
    const [interval, setNewInterval] = useState("");
    console.log("ddsd",props)

    useEffect(() => {    
        // Update the document title using the browser API
        let k = chosenInstruction;
        let i = chosenInstruction < props.inst.length ? k += 1 : 0;
        let y = i / props.inst.length * 100;
        props.updateProgress(y);
    });

    const handleClickRedirect = () => {
        window.location.reload(false);
    };

    const calculateTimeLeft = () => {

        setNewInterval("");
        clearInterval(interval);
        setStarted(true);

        let timerString = props.inst[chosenInstruction].substring(7);
        let hours = timerString.substring(0,2);
        let minutes = timerString.substring(3,5);
        let seconds = timerString.substring(6);

        var now = new Date();
        var target = moment(now).add(hours, 'h').add(minutes, 'm').add(seconds, 's').toDate();
        let timeLeft = {};
        
        const difference = target - now;

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        var strTime = timeLeft.hours + ":" + timeLeft.minutes + ":" + timeLeft.seconds;
        var cdt = moment(strTime, 'HH:mm:ss');
        let firstDate = cdt.add(1, 'seconds');
        let myfunc = setInterval(function() {
            let toShow = firstDate.subtract(1, 'seconds').format('HH:mm:ss');
            if(toShow === "00:00:00"){
                setTimer("00:00:00");
                clearInterval(myfunc);
            } else{
                setTimer(toShow)
            }
        }, 1000)
        setNewInterval(myfunc);
    }

    const handleClickPlus = () => {
        let k = chosenInstruction;
        let i = chosenInstruction < props.inst.length ? k += 1 : 0;
        setChosenInstruction(i);
        let y = (i + 1) / props.inst.length * 100;
        props.updateProgress(y);
        setTimer("");
        setStarted(false);
        clearInterval(interval);
        setNewInterval("");
    };

    const handleClickLess = () => {
        let k = chosenInstruction;
        let i = chosenInstruction < props.inst.length ? k -= 1 : 0;
        setChosenInstruction(i);
        let y = (i + 1) / props.inst.length * 100;
        props.updateProgress(y);
        setTimer("");
        setStarted(false);
        clearInterval(interval);
        setNewInterval("");
    };

	return (
        <Container className="recipe-title-container followrecipe-container">
            <Row className="recipe-title-row">
                <Col className="followrecipe-button-col">
                    {
                        chosenInstruction !== 0 ?
                        <button className="recipe-buy-button" onClick={handleClickLess}>Previous</button> :
                        <span></span>
                    }
                    {
                        chosenInstruction !== (props.inst.length - 1) ?
                        <button className="recipe-buy-button" onClick={handleClickPlus}>Next</button> :
                        <button className="recipe-buy-button" onClick={handleClickRedirect}>Finish</button>
                    }
                </Col>
            </Row>
            <Row className="recipe-title-row">
                <Col className="recipe-title-col followrecipe-inst-col">
                    <div>
                        {
                            props.inst[chosenInstruction].text.includes("Timer:") ?
                            <>
                                {
                                    !started ?
                                    <button className="recipe-buy-button" onClick={calculateTimeLeft}>START TIMER</button> :
                                    <>
                                        {
                                            timer === "00:00:00" ? 
                                            <span className="time-text">Time's up!</span> : 
                                            <span className="time-text">{timer}</span>
                                        }
                                    </>
                                }
                            </> :
                            props.inst[chosenInstruction].text
                        }
                    </div>
                </Col>
            </Row>
        </Container>
	);
};
