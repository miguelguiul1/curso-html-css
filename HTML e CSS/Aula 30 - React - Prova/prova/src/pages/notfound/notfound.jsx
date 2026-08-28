import './notfound.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>404 - Página não encontrada</h1>
      <p> <Link to="/">Voltar para a página inicial 😁😂😊😎</Link></p>
      <p><Link to="/contato">Ir para página de contato 😋🤩🤔😗😶</Link></p>
    </div>
  );
}