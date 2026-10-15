import "./contato.scss";
import { Link } from "react-router-dom";
import Cabecalho from '../../componentes/cabecalho/cabecalho'

export default function Contato() {
  return (
    <div className="contato">
      <Cabecalho titulo="Contato"
      link={<>  <Link to="/">Voltar para Home</Link>
      <Link to="/contador">Ir para Contador</Link>
      <Link to="/mudar">Ir para Mudar</Link>
      <Link to="/calculadora">Ir para Calculadora</Link> </> }/>

      <h1>Contato</h1>
      <p>Entre em contato conosco através do formulário abaixo:</p>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}