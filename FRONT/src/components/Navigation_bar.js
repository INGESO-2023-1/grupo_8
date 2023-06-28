import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';

function Navigation() {

    return (
        <div>
            <Navbar bg="dark" variant='dark'>
                <Navbar.Brand href='/'>Guasac 2</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                </Nav>
                <Nav className='me-auto'>
                    <Nav.Link href='/chat'>Chat</Nav.Link>
                </Nav>
                <Nav>
                   <Nav.Link href='/logout'>Logout</Nav.Link>
                </Nav>

            </Navbar>
        </div>
    );
}

export default Navigation;