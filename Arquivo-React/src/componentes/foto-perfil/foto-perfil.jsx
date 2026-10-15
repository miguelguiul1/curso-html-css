import './foto-perfil.scss';
import MiguelCareca from '../../assets/images/miguel-careca.webp';

export default function FotoPerfil(props) {
  return (
    <div className="foto-perfil">
      <img src={props.src ?? MiguelCareca} alt={props.alt ?? "Foto de perfil"} />
    </div>
  );
}