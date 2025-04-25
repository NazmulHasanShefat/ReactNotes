import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const navbar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                       <li><NavLink className={({isActive})=>isActive?"active-link mx-3":"pending-link mx-3"} to='/'>home</NavLink></li>
                       <li><NavLink className={({isActive})=>isActive?"active-link mx-3":"pending-link mx-3"} to='/contact'>contact</NavLink></li>
                       <li><NavLink className={({isActive})=>isActive?"active-link mx-3":"pending-link mx-3"} to='/blog'>blog</NavLink></li>
                       <li><NavLink className={({isActive})=>isActive?"active-link mx-3":"pending-link mx-3"} to='/product/10/handbag'> product</NavLink></li>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
           </Navbar>
        </div>
    );
};

export default navbar;