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
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does context api work?</Accordion.Header>
                    <Accordion.Body>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is useRef Hook?</Accordion.Header>
                    <Accordion.Body>
                    The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. 
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        </div>
    );
};

export default Blog;