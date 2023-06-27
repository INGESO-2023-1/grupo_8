import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './components/Inicio';
import Home from './components/Home';
import GetSim from './components/GetSim';
import Signin from './components/SignIn';
import Register from './components/Register';
import Navigation from './components/Navigation_bar';
import Hello from './components/hello';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
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
