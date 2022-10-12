import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Accordion defaultActiveKey="0" className='w-75 mt-5'>
            <h1 className='text-center'>Question & Answer</h1>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the purpose of react router?</Accordion.Header>
                    <Accordion.Body>
                    Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
                    </Accordion.Body>
                </Accordion.Item>
                
                
            </Accordion>
        </div>
    );
};

export default Blog;