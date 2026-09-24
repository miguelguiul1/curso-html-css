import "./contato.scss";
import { Link } from "react-router-dom";

export default function Contato() {
  return (
    <div className="contato">
      <h1>Contato</h1>
      <Link to="/">Voltar para Home</Link>
    </div>
  );
}