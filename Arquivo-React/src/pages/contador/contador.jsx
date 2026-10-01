import "./contador.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contador() {
  const [contador, setContador] = useState(0);
  function Aumentar() {
    setContador(contador + 1);
  }
  function Diminuir() {
    setContador(contador - 1);
  }

  return (
    <div className="contador">
      <h1>Contador</h1>
      <button onClick={Diminuir}>-</button>
      <p>Valor: {contador}</p>
      <button onClick={Aumentar}>+</button>
      <div>
        <Link to="/">Voltar para Home</Link>
        <Link to="/mudar">Ir para Mudar</Link>
        <Link to="/contato">Ir para Contato</Link>
      </div>
    </div>
  );
}