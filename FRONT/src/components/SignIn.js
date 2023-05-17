import React, { useState } from 'react';
import axios from 'axios';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/login', { username, password })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input type="text" name="usuario" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" name="contraseña" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Signin;