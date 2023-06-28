import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosApi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Home.css';

const Hello = () => {
    const[message, setMessage] = useState("");

    useEffect(() => {
        async function ObtainMessage() {
            try{
                const response = await axiosInstance.get('/hello/');
                const message = response.data.hello;
                setMessage(message);
            }catch(error){
                console.log('Error: ', JSON.stringify(error, null, 4));
                throw error;
            }

        }

        ObtainMessage();
    }, []);



return (
    <Container fluid style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Row style={{ flex: 1 }}>
        <Col md={4} className="custom-primary d-flex flex-column">
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
        <Col md={8} className="custom-secondary d-flex flex-column">
            {/* Chat seleccionado */}
            <div className="p-3">
            <h3>Chat seleccionado / Nombre del contacto</h3>
            <div className="chat-messages">
                {/* Renderiza los mensajes del chat aquí */}
                <div className="message">
                <div className="message-content">Hola!</div>
                </div>
                <div className="message">
                <div className="message-content">Cómo estás?</div>
                </div>
            </div>
            </div>
            {/* Casilla de texto para escribir mensajes */}
            <div className="mt-auto">
            <Form className="p-3">
                <Row>
                <Col xs={10}>
                    <Form.Control
                    type="text"
                    placeholder="Escribe tu mensaje"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                </Col>
                <Col xs={2}>
                    <Button variant="primary" style={{ backgroundColor: '#177a4d'}} >Enviar</Button>
                </Col>
                </Row>
            </Form>
            </div>
            <Button
            variant="secondary"
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px'
            }}
          >
            Home
          </Button>
        </Col>
        </Row>
    </Container>
    );
}

export default Hello;