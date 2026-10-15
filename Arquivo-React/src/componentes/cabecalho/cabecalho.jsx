import './cabecalho.scss'
import FotoPerfil from '../foto-perfil/foto-perfil'

export default function Cabecalho(props) {
  return (
    <header className="cabecalho">
      <FotoPerfil />

      <div className="texto">
        <h1>{props.titulo ?? "ARQUIVO REACT 😲"}</h1>
        <h3>{props.link ?? "Link para a página"}</h3>
      </div>
    </header>
  )
}