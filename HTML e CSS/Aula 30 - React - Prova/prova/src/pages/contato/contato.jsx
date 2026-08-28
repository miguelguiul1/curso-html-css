import './contato.css';
import { Link } from 'react-router-dom';

export default function Contato() {
  return (
    <div className="contato">
      <h1>Contato</h1>
      <p><Link to="/">Voltar para a página inicial 😁😂😊😎</Link></p>
      <p><Link to="/notfound">Ir para página não encontrada 😕😞</Link></p>
    </div>
  );
}