
import './App.css';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <h1>Bem-vindo ao meu site!</h1>
    <Link  to="/contato"><p>Ir para a página de contato</p></Link>
    </div>
  );
}


