import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          {/* Lista de chats */}
          <div className="p-3">
            <h3>Chats</h3>
            <ul className="list-group">
              {/* Renderiza los chats aquí */}
              <li className="list-group-item">Chat 1</li>
              <li className="list-group-item">Chat 2</li>
              <li className="list-group-item">Chat 3</li>
            </ul>
          </div>
        </Col>
        <Col md={8}>
          {/* Chat seleccionado */}
          <div className="p-3">
            <h3>Chat seleccionado</h3>
            <div className="chat-messages">
              {/* Renderiza los mensajes del chat aquí */}
              <div className="message">Mensaje 1</div>
              <div className="message">Mensaje 2</div>
              <div className="message">Mensaje 3</div>
            </div>
            {/* Casilla de texto para escribir mensajes */}
            <Form className="mt-3">
              <Form.Control type="text" placeholder="Escribe tu mensaje" />
              <Button variant="primary" className="mt-2">Enviar</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
