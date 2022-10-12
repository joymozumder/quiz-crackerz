import React from 'react';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='d-flex align-items-center not-found '>
            <div className='mx-auto text-center '>
            <h1>404</h1>
            <h4>Sorry, the page not found</h4>
            <p>The link you followed probably broken or the page has been removed.</p>
        </div>
        </div>
        
    );
};

export default NotFound;