import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Home.css'; // Archivo CSS personalizado para los colores

function Home() {
  return (
    <Container fluid style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Row style={{ flex: 1 }}>
        <Col md={4} className="custom-primary d-flex flex-column">
          {/* Lista de chats */}
          <div className="p-3">
            <h3>Chats</h3>
            <ul className="list-group">
              {/* Renderiza los chats aquí */}
              <li className="list-group-item">Chat prueba 1</li>
              <li className="list-group-item">Chat prueba 2</li>
              <li className="list-group-item">Chat prueba 3</li>
            </ul>
          </div>
        </Col>
        <Col md={8} className="custom-secondary d-flex flex-column">
          {/* Chat seleccionado */}
          <div className="p-3">
            <h3>Chat seleccionado / Nombre del contacto</h3>
            <div className="chat-messages">
              {/* Renderiza los mensajes del chat aquí */}
              <div className="message">
                <div className="message-content">Mensaje prueba 1</div>
              </div>
              <div className="message">
                <div className="message-content">Mensaje prueba 2</div>
              </div>
              <div className="message">
                <div className="message-content">Mensaje prueba 3</div>
              </div>
            </div>
          </div>
          {/* Casilla de texto para escribir mensajes */}
          <div className="mt-auto">
            <Form className="p-3">
              <Row>
                <Col xs={10}>
                  <Form.Control type="text" placeholder="Escribe tu mensaje" />
                </Col>
                <Col xs={2}>
                  <Button variant="primary">Enviar</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
