import './contato.css';

import { Link } from 'react-router-dom';

export default function contato() {
  return (
    <div>
      <h1>Contato</h1>
      <p><Link to="/">Voltar para Página Inicial 😳😲😨</Link></p>
      <p><Link to="/404">Ir para 404 😫🥱😴</Link></p>
    </div>

  );
}