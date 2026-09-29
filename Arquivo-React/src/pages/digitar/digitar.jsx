import "./digitar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Digitar() {
  const [texto, setTexto] = useState("");

  function AtualizarTexto(e) {
    setTexto(e.target.value);
  }

  return (
    <div className="digitar">
      <h1>Digite aqui ↓</h1>
      <input type="text" value={texto} onChange={AtualizarTexto} />
      <h2>Texto: {texto}</h2>
      <div>
        <Link to="/">Voltar para Home</Link>
        <Link to="/contador">Ir para Contador</Link>
        <Link to="/contato">Ir para Contato</Link>
      </div>
    </div>
  );
}