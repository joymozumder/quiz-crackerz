import React, { useState } from 'react';
import { Card, ListGroup, Toast } from 'react-bootstrap';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import './Question.css';

const Question = ({ quizQuestion, questionNumber }) => {
    const { question, options, correctAnswer, id } = quizQuestion;
    const [answer, setAnswer] = useState(false);
    const [show, setShow] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    console.log(questionNumber, question);
    const checkAnswer = (e) => {
        console.log(e);
        if (e.target.value === correctAnswer) {
        setAnswer(true);
        } else {
        setAnswer(false);
        }
    };
    
    return (
        <div>
            <Toast
                className="ms-auto"
                onClose={() => setShow(false)}
                show={show}
                delay={8000}
                autohide>
                <Toast.Header className={`${answer ? "bg-success" : "bg-danger"}`}>
                <strong className="me-auto text-white">
                    {answer ? "Right" : "Wrong"} Answer !!!
                </strong>
                </Toast.Header>
            </Toast>
            <Card className="mb-2">
                <Card.Header className="d-flex justify-content-between">
                    <p className="py-3">
                        <strong> {questionNumber}.</strong> {question}
                    </p>
                    <p className="p-3" onClick={() => setShowAnswer(!showAnswer)}>
                        {showAnswer ? (
                        <EyeSlashIcon className="icon" />
                        ) : (
                        <EyeIcon className="icon" />
                        )}
                    </p>
                </Card.Header>
                <ListGroup variant="flush">
                {options.map((option, indx) => (
                    <ListGroup.Item key={indx}>
                    <input
                        type="radio"
                        id={`group${questionNumber}-${indx}`}
                        name={`group${questionNumber}`}
                        value={option}
                        onClick={(e) => {
                            console.log(e);
                            checkAnswer(e);
                            setShow(true);
                          }}
                    ></input>
                    <label
                        className="ms-2"
                        htmlFor={`group${questionNumber}-${indx}`}
                    >
                        {option}
                    </label>
                    <br></br>
                    </ListGroup.Item>
                ))}
                <ListGroup.Item className={showAnswer ? "d-block" : "d-none"}>
                    <strong>Answer:</strong> {correctAnswer}
                </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
};

export default Question;