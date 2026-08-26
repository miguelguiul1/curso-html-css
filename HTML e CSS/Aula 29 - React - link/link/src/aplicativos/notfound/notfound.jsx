import './notfound.css';

import { Link } from 'react-router-dom';

export default function notfound() {
  return (
    <div>
      <h1>404 - Página não encontrada</h1>
      <p><Link to="/">Voltar para Página Inicial 😳😲😨</Link></p>
      <p><Link to="/contato">Ir para Contato 😣😏🙄</Link></p>
    </div>
  );
}