import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <p><Link to="/contato">Ir para Contato</Link></p>
    </div>
    
  );
}

export default App;
