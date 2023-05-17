import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Inicio() {
    return (
        <div className="container">
            <h1>Welcome to My App</h1>
            <p>This is the homepage of my app.</p>
            <div className="alert alert-info" role="alert">
                This is an informational alert.
            </div>
            <button className="btn btn-primary">Click me</button>
        </div>
      );
    }


export default Inicio;
