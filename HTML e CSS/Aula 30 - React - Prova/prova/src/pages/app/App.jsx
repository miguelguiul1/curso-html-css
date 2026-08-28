import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <p> <Link to="/contato">Ir para página de contato 😋🤩🤔😗😶</Link></p>
      <p><Link to="/notfound">Ir para página não encontrada 😕😞</Link></p>
    </div>
  );
}

export default App;
