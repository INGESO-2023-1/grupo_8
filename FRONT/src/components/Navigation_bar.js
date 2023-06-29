import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';

function Navigation() {
    const [isAuth, setIsAuth] = useState(false);
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
        setCurrentPath(window.location.pathname);
    }, [isAuth]);

    return (
        <div>
            <Navbar variant='dark' expand='lg' style={{ background: 'none' }}>
                <Navbar.Brand href='/'>Guasac 2</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-nav' />
                <Navbar.Collapse id='navbar-nav'>
                    <Nav className='me-auto'>
                        {isAuth ? (
                            <Nav.Link href='/' style={{ backgroundColor: '#356b53' }}>
                                Home
                            </Nav.Link>
                        ) : null}
                    </Nav>
                    <Nav>
                        {currentPath === '/login' && !isAuth && (
                            <Nav.Link href='/register' style={{ backgroundColor: '#356b53' }}>
                                Register
                            </Nav.Link>
                        )}
                        {currentPath === '/register' && !isAuth && (
                            <Nav.Link href='/login' style={{ backgroundColor: '#356b53' }}>
                                Login
                            </Nav.Link>
                        )}
                        {isAuth && (
                            <Nav.Link href='/logout' style={{ backgroundColor: '#356b53' }}>
                                Logout
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
