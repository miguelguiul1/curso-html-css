import './App.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../componentes/cabecalho/cabecalho'

function App() {
  return (
    <div className="App">
      <header>  
      <Cabecalho titulo="Página Principal" 
      link={<> <Link to="/contador">Ir para Contador</Link>
      <Link to="/contato">Ir para Contato</Link>
      <Link to="/mudar">Ir para Mudar</Link>
      <Link to="/calculadora">Ir para Calculadora</Link> </> } /> 

      </header>



    </div>
  );
}

export default App;
