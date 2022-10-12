import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({topic}) => {
    const { id, name, logo, total } = topic;
    return (
        <div>
            <div >
                <Card className='p-3' style={{ backgroundColor: "lightblue" }}>
                    <Card.Img variant="top" className='img-fluid' src={ logo } />
                    <Card.Body>
                        <Card.Title>{ name }</Card.Title>
                        <Card.Text>
                        <strong>Total Question : </strong>{ total }
                        </Card.Text>
                        
                        <Link to={`quiz/${id}`}><Button variant="primary" >Start Practice</Button></Link>
                        
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Topic;