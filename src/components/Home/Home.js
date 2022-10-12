import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div>
            <div className="top-banner">
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