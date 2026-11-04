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

    if (cupomAplicado.toUpperCase() === "CUPOM10") {
      total *= 0.90;
    }

    return total;
  }

/* --------------------------------------------------------------------- */

  const [tamanho, setTamanho] = useState("pequeno");

  const [quantidadeUnidade, setQuantidadeUnidade] = useState(1);

  const [cupomUnidade, setCupomUnidade] = useState("");

  function aplicarCupomUnidade() {
    setCupomUnidade(cupomUnidade);
  }

  function valorFinalUnidade() {
    let precoUnidade = 0;

    if (tamanho === "pequeno") {
      precoUnidade = 10;
    }
    if (tamanho === "medio") {
      precoUnidade = 15;
    }
    if (tamanho === "grande") {
      precoUnidade = 20;
    }

    let total = quantidadeUnidade * precoUnidade;

    if (cupomUnidade.toUpperCase() === "DESCONTO10") {
      total *= 0.90;
    }

    if (cupomUnidade.toUpperCase() === "DESCONTO20") {
      total *= 0.80;
    }

    if (cupomUnidade.toUpperCase() === "DESCONTO30") {
      total *= 0.70;
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

      <div className='Ingresso'>
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

      <div className='IngressoUnidade'>

        <h1>Ingresso por Unidade</h1>

        <div className='precoTamanho'>
          <p>Tamanho: </p>
          <button type="checkbox" value={tamanho} onClick={(e) => setTamanho("pequeno")}>Pequeno - R$10,00</button>
          <button type="checkbox" value={tamanho} onClick={(e) => setTamanho("medio")}>Médio - R$15,00</button>
          <button type="checkbox" value={tamanho} onClick={(e) => setTamanho("grande")}>Grande - R$20,00</button>
        </div>

        <div className='quantidade'>
          <p>Quantidade: </p>
          <input type="number" min={1} value={quantidadeUnidade} onChange={(e) => setQuantidadeUnidade(Number(e.target.value))} />
        </div>

        <div className='cupom'>
          <p>Cupom de Desconto? </p>
          <button type="checkbox" onClick={() => setCupomUnidade("DESCONTO10")}>Sim 😀</button>
        </div>

        <div className='codigo-cupom'>
          <p>Código do Cupom: </p>
          <input type="text" alt='DESCONTO10' value={cupomUnidade} onChange={(e) => setCupomUnidade(e.target.value)} />
        </div>

        <div>
          <button onClick={aplicarCupomUnidade}>CALCULAR</button>

          <h1>{valorFinalUnidade().toFixed(2)}</h1>
        </div>

      </div>

    </div>


  );
}