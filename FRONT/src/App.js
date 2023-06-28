import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Inicio from './components/Inicio';
import Home from './components/Home';
import GetSim from './components/GetSim';
import Signin from './components/SignIn';
import Register from './components/Register';
import Navigation from './components/Navigation_bar';
import Hello from './components/hello';
import Logout from './components/Logout';
import ChatComponent from './components/Chat-box';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);

  const roomName = 'xd';
  return (
    <Router>
      {isAuth ? <Navigation /> : null}
      <Routes>
        <Route path='/chat' element={<ChatComponent roomName={roomName}/>} />
        <Route path='/logout' element={<Logout />} />
        <Route path='hello' element={<Hello />} />
        <Route exact path="/" element={<Inicio />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/getsim" element={<GetSim />}/>
        <Route path="/login" element={<Signin />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
