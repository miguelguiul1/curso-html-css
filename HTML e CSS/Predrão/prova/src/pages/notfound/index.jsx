import './index.css'
import { Link } from 'react-router-dom';



export default function NotFound() {
  return (
    <div className="NotFound">
      <h1>404</h1>
      <p>Página não encontrada</p>
      <Link to="/contato"><p>Voltar para a página de contato</p></Link>
      <Link to="/"><p>Voltar para a página inicial</p></Link> 
      <img src="gato.jpg" alt="" />
    </div>
  );
}