import "./mudar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Mudar() {

  const [textoDigitado, setTextoDigitado] = useState("");

  const [textoEscrito, setTextoEscrito] = useState("");
  const [texto, setTexto] = useState("");

  const [corEscolhida, setCorEscolhida] = useState("#ffffff");
  const [cor, setCor] = useState("");

  function Digitar(e) { 
    setTextoDigitado(e.target.value);
  }

  function PegarTexto(e) {
    setTextoEscrito(e.target.value);
  }
  function MudarTexto() {
    setTexto(textoEscrito);
  }

  function PegarCor(e) {
    setCorEscolhida(e.target.value);
  }
  function MudarCor() {
    setCor(corEscolhida);
  }

  return (
    <div className="digitar" style={{ backgroundColor: cor }}>

      <h1>Digite aqui ↓</h1>
      <input type="text" onChange={Digitar} />
      <h2>Texto: {textoDigitado}</h2>

      <h1>Digite aqui ↓</h1>
      <input type="text" onChange={PegarTexto} />
      <h2>Texto: {texto}</h2>
      <button onClick={MudarTexto}>Mudar Texto</button>
      <div>

      <h1>Escolha cor de fundo: </h1>
      <input type="color" value={corEscolhida} onChange={PegarCor} />
      <button onClick={MudarCor}>Mudar Cor</button>

        <Link to="/">Voltar para Home</Link>
        <Link to="/contador">Ir para Contador</Link>
        <Link to="/contato">Ir para Contato</Link>
        <Link to="/calculadora">Ir para Calculadora</Link>
      </div>
    </div>
  );
}