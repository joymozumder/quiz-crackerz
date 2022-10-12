import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const {id, total, name, logo, questions} = quiz;
    return (
        <Container className='mb-5'>
            <h2 className='text-center'>{name}</h2>
        </Container>
    );
};

export default Quiz;