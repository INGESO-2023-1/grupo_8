// Importa los paquetes de React JS
import axios from "axios";
import { useState } from "react";
import axiosInstance from "../axiosApi";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../styles/Login.css'; // Importa el archivo CSS para el estilo

// Define la función Signin.
const Signin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Crea el método submit.
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/token/', {
        username: username,
        password: password
      });

      axiosInstance.defaults.headers['Authorization'] = 'JWT ' + response.data.access;
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      navigate('/hello');
    } catch (error) {
      throw error;
    }
  };

  return (
    
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Iniciar sesión</h3>
          <div className="form-group mt-3">
            <label>Nombre de usuario</label>
            <input
              className="form-control mt-1"
              placeholder="Ingresa nombre de usuario"
              name="username"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Ingresa contraseña"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <a href="/register">
              ¿Aún no tienes una cuenta? Registrate aquí
            </a>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Ingresar
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="/">
              Volver al inicio
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
