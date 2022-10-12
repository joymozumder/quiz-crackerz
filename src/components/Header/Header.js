import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link className='text-decoration-none fw-bold' to="/"><Navbar.Brand >Cool Quizzes</Navbar.Brand></Link>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link className='me-3 custom-nav-item  text-decoration-none px-3 py-2  text-white rounded-2' to="/">Home</Link>
                    <Link className='me-3 custom-nav-item  text-decoration-none px-3 py-2  text-white rounded-2' to="/">Topics</Link>
                    <Link className='me-3 custom-nav-item  text-decoration-none px-3 py-2  text-white rounded-2' to="/statistics">Statistics</Link>
                    <Link className='me-3 custom-nav-item  text-decoration-none px-3 py-2  text-white rounded-2' to="/blog">Blog</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;