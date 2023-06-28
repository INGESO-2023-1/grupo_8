import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import testimonial1 from '../images/testimonial1.png';
import testimonial2 from '../images/testimonial2.png';
import logo from '../images/logo.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/styles.css'; 

function Inicio() {
  return (
    <div style={{ backgroundColor: '#A8D8B9', minHeight: '100vh' }}>
      {/* Encabezado */}
      <header className="py-5 text-center">
      <div style={{ backgroundColor: '#fff', width: '200px', height: '200px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
        <img src={logo} alt="Logo Guasac" style={{ width: '200px', height: '200px', borderRadius: '50%' }}/>
      </div>

        <p className="lead">Envía tus mensajes al instante, comparte emociones y crea conexiones inolvidables con nuestro servicio de mensajería</p>
      </header>

      {/* Sección de presentación */}
      <section>
        <Container style={{ backgroundColor: '#A8D8B9' }}>
          <Row>
            <Col md={4}>
              <div className="feature text-center" style={{ backgroundColor: '#77c6a3', borderRadius: '15px', padding: '20px', height: '120px' }}>
                <i className="fa fa-clock-o"></i>
                <h3 style={{ color: '#FFFFFF' }}>Rapidez</h3>
                <p style={{ color: '#FFFFFF' }}>Entrega instantánea de tus mensajes a través de nuestra plataforma.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature text-center" style={{ backgroundColor: '#77c6a3', borderRadius: '15px', padding: '20px', height: '120px' }}>
                <i className="fa fa-shield"></i>
                <h3 style={{ color: '#FFFFFF' }}>Seguridad</h3>
                <p style={{ color: '#FFFFFF' }}>Protegemos tus mensajes y datos personales.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature text-center" style={{ backgroundColor: '#77c6a3', borderRadius: '15px', padding: '20px', height: '120px' }}>
                <i className="fa fa-check-circle"></i>
                <h3 style={{ color: '#FFFFFF' }}>Simplicidad</h3>
                <p style={{ color: '#FFFFFF' }}>Nuestro servicio es fácil de usar y te permite enviar mensajes en pocos pasos.</p>
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
                <div className="testimonial-image-container">
                  <img src={testimonial1} alt="Cliente 1" className="mb-3" />
                </div>
                <p className="mb-3">"¡Increíble servicio de mensajería telefónica! Rápido, confiable y fácil de usar. Lo recomiendo totalmente."</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="testimonial text-center">
                <div className="testimonial-image-container">
                  <img src={testimonial2} alt="Cliente 2" className="mb-3" />
                </div>
                <p className="mb-3">"Estoy muy satisfecho con el servicio de mensajería telefónica. Me ha ahorrado mucho tiempo y me facilita la comunicación con mis contactos."</p>
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
                <h2>Envía mensajes telefónicos en pocos pasos</h2>
                <ol className="steps">
                  <li>Regístrate en nuestra plataforma utilizando tu número de teléfono.</li>
                  <li>Agrega a tus contactos.</li>
                  <li>Elige el contacto al que deseas enviar el mensaje telefónico.</li>
                  <li>Escribe tu mensaje y confírmalo antes de enviarlo.</li>
                  <li>¡Envía el mensaje y espera la entrega instantánea!</li>
                </ol>
                <Button variant="primary" as={Link} to="/register" style={{ backgroundColor: '#77c6a3' }}>¡Regístrate ahora!</Button>
              </div>
            </Col>

            {/* Columna de Inicio de Sesión */}
            <Col md={4}>
              <div className="login">
                <h3>¿Ya eres cliente?</h3>
                <p>Inicia sesión para acceder a tu cuenta</p>
                <Button variant="primary" as={Link} to="/login" style={{ backgroundColor: '#77c6a3' }}>Iniciar sesión</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Información de contacto */}
      <footer className="py-4 bg-dark text-white">
        <Container>
          <p>Contáctanos para obtener más información:</p>
          <p>Teléfono: +56 9 7255 2023</p>
          <p>Email: Guasac2@gmail.com</p>
          <p>INF-225 2023-1</p>
        </Container>
      </footer>
    </div>
  );
};

export default Inicio;
