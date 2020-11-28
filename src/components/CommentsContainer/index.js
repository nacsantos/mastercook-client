import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GrAddCircle } from 'react-icons/gr';
import { useForm } from 'react-hook-form';

import "./CommentsContainer.css";

export const CommentsContainer = (props) => {
    const [comment, setComment] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const commentsList = props.commentsData.map(element => {
        return (
            <Row key={element.id} className="comment-row">
                <Col className="comment-col" lg="2">
                    <img className="comments-pic" src={element.photo}/>
                    <p className="comments-username">{element.user}</p>
                </Col>
                <Col lg="10" className="comments-text-col">
                    <p className="comments-text">{element.comment}</p>
                </Col>
            </Row>
        )
    })

    const NewComment = () => {
        setComment(true);
    }
    
	return (
		<Container className="comments-container">
            <Row className="comments-row">
                <Col>
                    <h5 className="comments-title">Comments</h5>
                </Col>
                <Col className="comments-add-col">
                    <GrAddCircle className="comments-add" onClick={NewComment}/>
                </Col>
            </Row>
            {!comment ? "" :
                <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col>
                                <textarea className="comments-new-comment" name="comment-text" ref={register({required: true, min: 1})} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="comments-submit-col">
                                <button type="submit" className="recipe-buy-button">Submit</button>
                            </Col>
                        </Row>
                    </form>
                    
                </>
            }
            {commentsList}
        </Container>
	);
};
