import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const {id, total, name, logo, questions} = quiz;
    return (
        <Container className='mb-5'>
            <h2 className='text-center'>{name}</h2>
            {
                questions.map((question, indx) => <Question key={question.id} quizQuestion={question} questionNumber={indx+1}></Question>)
            }
        </Container>
    );
};

export default Quiz;