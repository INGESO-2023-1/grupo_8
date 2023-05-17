import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './components/Inicio';
import Home from './components/Home';
import GetSim from './components/GetSim';
import Signin from './components/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/getsim" element={<GetSim />}/>
      </Routes>
    </Router>

  );
}

export default App;
