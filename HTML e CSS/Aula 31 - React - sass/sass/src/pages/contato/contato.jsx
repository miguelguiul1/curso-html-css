import './contato.scss';

import { Link } from 'react-router-dom';

export default function Contato() {
  return (
    <div className="contato">
      <h1>Contato</h1>
      <p><Link to="/">Ir para App</Link></p>
    </div>
  );
}

