import { useNavigate } from "react-router-dom";
import img from '../../assets/img/logo-mobile.svg';

const Header = (props) => {
  const navigate = useNavigate();
  
  return (
    <div className='Header'>
      <div className='Header-logo'>
        <img src={img} alt="Logo recomendação monitoria" onClick={() => navigate("/home")} />
      </div>
        <div className='Header-info'  onClick={() => navigate('/perfil')} >
            <span>{props.info.name}</span>
            <span className='bold'>{props.info.type}</span>
        </div>
        <img src={props.info.img} alt="Imagem perfil" className='Header-img'  onClick={() => navigate('/perfil')} />
    </div>
  );
};
  
export default Header;
  