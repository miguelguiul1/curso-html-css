import { Link } from 'react-router-dom';
import './index.css'

export default function contato() {
  return (
    <div className="Contato">
     <h1>Contato</h1>
     <Link to="/"><p>Voltar para a página inicial</p></Link>
    </div>
  );
}