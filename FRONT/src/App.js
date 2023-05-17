import './App.css';

import GetSim from './components/GetSim';
import Signin from './components/SignIn';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          
        </div>
      </header>
      <div className='simulador'>
        <GetSim />
        <Signin />
      </div>
      
    </div>
  );
}

export default App;
