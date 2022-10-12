import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div>
            <div className="top-banner d-flex justify-content-center align-items-center">
            <h1 className='top-banner-heading text-white'>"Practice means to perform, over and over again in the face of all obstacles, some act of vision, of faith, of desire. Practice is a means of inviting the perfection desired." – Martha Graham</h1>
            </div>
            <div className="topics-container my-5" >
                <Container>
                    <Row xs={1} md={2} lg={4} className="g-4">
                    {topics.map((topic) => (
                        <Topic key={topic.id} topic={topic}></Topic>
                    ))}
                    </Row>
                </Container>
            </div>
        </div>
        
    );
};

export default Home;