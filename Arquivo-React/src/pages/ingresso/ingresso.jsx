import './ingresso.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cabecalho from '../../componentes/cabecalho/cabecalho';

export default function Ingresso() {

  const [quantidade, setQuantidade] = useState(1);

  const preco = 50;

  const [meiaEntrada, setMeiaEntrada] = useState(false);

  const [cupom, setCupom] = useState("");
  
  const [cupomAplicado, setCupomAplicado] = useState("");

  function aplicarCupom() {
    setCupomAplicado(cupom);
  }

  function valorFinal() {

    let total = quantidade * preco;

    if (meiaEntrada) {
      total /= 2;
    }

    if (cupomAplicado.toUpperCase() === "CUPOM50") {
      total *= 0.50;
    }

    if (cupomAplicado.toUpperCase() === "CUPOM20") {
      total *= 0.80;
    }

    return total;
  }

  return (
    <div className="ingresso">
      <Cabecalho titulo="Ingresso"
      link={<>  <Link to="/">Voltar para Home</Link>
      <Link to="/contador">Ir para Contador</Link>
      <Link to="/mudar">Ir para Mudar</Link>
      <Link to="/calculadora">Ir para Calculadora</Link> </> }/>

      <h1>Compra de Ingressos</h1>

      <p>Selecione a quantidade de ingressos que deseja comprar:</p>

      <input type="number" min={1} value={quantidade} onChange={(e) => setQuantidade(Number(e.target.value))} />

      <p>Meia Entrada?</p>

      <input type="checkbox" checked={meiaEntrada} onChange={() => setMeiaEntrada(!meiaEntrada)} />

      <p>CUPOM:</p>

      <input type="text" value={cupom} onChange={(e) => setCupom(e.target.value)} />

      <button onClick={aplicarCupom}>Aplicar Cupom</button>

      <p>Preço unitário: R$ {preco} </p>
      <p>Total: R$ {valorFinal().toFixed(2)} </p>

    </div>
  );
}