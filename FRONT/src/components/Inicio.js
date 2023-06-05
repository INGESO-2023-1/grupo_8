import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import testimonial1 from '../images/testimonial1.png';
import testimonial2 from '../images/testimonial2.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Inicio() {
    return (
        <div style={{ backgroundColor: '#EEF2ED', minHeight: '100vh' }}>
        {/* Encabezado */}
        <header className="py-5 text-center">
          <h1>Guasac 2</h1>
          <p className="lead"> Envía tus mensajes al instante, comparte emociones y crea conexiones inolvidables con nuestro servicio de mensajería </p>
        </header>
  
        {/* Sección de presentación */}
        <section className="py-5 bg-light">
          <Container>
            <Row>
              <Col md={4}>
                <div className="feature text-center">
                  <i className="fa fa-clock-o"></i>
                  <h3>Rapidez</h3>
                  <p>Entrega instantánea de tus mensajes a través de nuestra plataforma.</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="feature text-center">
                  <i className="fa fa-shield"></i>
                  <h3>Seguridad</h3>
                  <p>Protegemos tus mensajes y datos personales.</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="feature text-center">
                  <i className="fa fa-check-circle"></i>
                  <h3>Simplicidad</h3>
                  <p>Nuestro servicio es fácil de usar y te permite enviar mensajes en pocos pasos.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
  
        {/* Testimonios de clientes */}
        <section className="py-5">
          <Container>
            <Row>
              <Col md={6}>
                <div className="testimonial text-center">
                  <img src={testimonial1} alt="Cliente 1" className="mb-3" />
                  <p className="mb-3">"¡Increíble servicio de mensajería telefónica! Rápido, confiable y fácil de usar. Lo recomiendo totalmente."</p>
                  <h4>Cliente 1</h4>
                </div>
              </Col>
              <Col md={6}>
                <div className="testimonial text-center">
                  <img src={testimonial2} alt="Cliente 2" className="mb-3" />
                  <p className="mb-3">"Estoy muy satisfecha con el servicio de mensajería telefónica. Me ha ahorrado mucho tiempo y me facilita la comunicación con mis contactos."</p>
                  <h4>Cliente 2</h4>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
  
        <section className="py-5">
        <Container>
            <Row>
            {/* Columna de Registro y Pasos */}
            <Col md={8}>
                <div className="registration">
                <h2 >Envía mensajes telefónicos en pocos pasos</h2>
                <ol className="steps">
                    <li>Regístrate en nuestra plataforma utilizando tu número de teléfono.</li>
                    <li>Agrega a tus contactos.</li>
                    <li>Elige el contacto al que deseas enviar el mensaje telefónico.</li>
                    <li>Escribe tu mensaje y confírmalo antes de enviarlo.</li>
                    <li>¡Envía el mensaje y espera la entrega instantánea!</li>
                </ol>
                <Button variant="primary" as={Link} to="/register">¡Regístrate ahora!</Button>
                </div>
            </Col>

            {/* Columna de Inicio de Sesión */}
            <Col md={4}>
                <div className="login">
                <h3>¿Ya eres cliente?</h3>
                <p>Inicia sesión para acceder a tu cuenta</p>
                <Button variant="primary" as={Link} to="/login">Iniciar sesión</Button>
                </div>
            </Col>
            </Row>
        </Container>
        </section>
  
        {/* Información de contacto */}
        <footer className="py-4 bg-dark text-white">
          <Container>
            <p>Contáctanos para obtener más información:</p>
            <p>Teléfono: +11 2 3344 5566 </p>
            <p>Email: name.lastname@mail.com</p>
            <p>INF-225 2023-1</p>
          </Container>
        </footer>
      </div>
    );
  };
  


export default Inicio;
