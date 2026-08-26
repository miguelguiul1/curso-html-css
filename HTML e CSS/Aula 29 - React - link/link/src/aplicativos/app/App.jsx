
import './App.css';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <p><Link to="/contato">Ir para Contato 😳😲😨</Link></p>
      <p><Link to="/404">Ir para 404 😫🥱😴</Link></p>
    </div>
  );
}

export default App;
