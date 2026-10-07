import './App.scss';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>Arquivo React</h1>
      <Link to="/contador">Ir para Contador</Link>
      <Link to="/contato">Ir para Contato</Link>
      <Link to="/mudar">Ir para Mudar</Link>
      <Link to="/calculadora">Ir para Calculadora</Link>
    </div>
  );
}

export default App;
