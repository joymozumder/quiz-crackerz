import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Question = ({ quizQuestion, questionNumber }) => {
    const { question, options, correctAnswer, id } = quizQuestion;
    return (
        <div>
            <Card className="mb-2">
                <Card.Header>
                <strong>{questionNumber}.</strong> {question}
                
                </Card.Header>
                <ListGroup variant="flush">
                {options.map((option, indx) => (
                    <ListGroup.Item key={indx}>
                    <input
                        type="radio"
                        id={`group${questionNumber}-${indx}`}
                        name={`group${questionNumber}`}
                        value={option}
                        
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
                
                </ListGroup>
      </Card>
        </div>
    );
};

export default Question;