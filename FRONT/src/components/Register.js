import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles/styles.css';

function Register() {
  const [user_name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const user_pass = password;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('//localhost:8000/api/register', { user_name, password, user_pass, phoneNumber, email })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
  <Container className="d-flex justify-content-center align-items-center container-style">
    <Link to="/" className="position-absolute top-0 start-0 m-3">Volver al inicio</Link>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Usuario:</Form.Label>
          <Form.Control
            type="text"
            value={user_name}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Número de teléfono:</Form.Label>
          <Form.Control
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Correo electrónico:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default Register;