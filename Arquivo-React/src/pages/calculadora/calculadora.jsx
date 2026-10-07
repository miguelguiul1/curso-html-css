import './calculadora.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Calculadora() {
  const [n1, setn1] = useState(0);
  const [n2, setn2] = useState(0);
  const [resultado, setResultado] = useState(0);

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>
      <input onChange={(e) => setn1(Number(e.target.value))} />
      <input onChange={(e) => setn2(Number(e.target.value))} />
      <button onClick={() => setResultado(n1 + n2)}>Somar</button>
      <button onClick={() => setResultado(n1 - n2)}>Subtrair</button>
      <button onClick={() => setResultado(n1 * n2)}>Multiplicar</button>
      <button onClick={() => setResultado(n1 / n2)}>Dividir</button>
      <p>Resultado: {resultado}</p>

      <Link to="/">Voltar para Home</Link>
      <Link to="/contador">Ir para Contador</Link>
      <Link to="/contato">Ir para Contato</Link>
      <Link to="/mudar">Ir para Mudar</Link>
    </div>
  );
}