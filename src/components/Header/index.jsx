import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  
  return (
    <div className='Header'>
        <div className='Header-info'  onClick={() => navigate(props.info.link)} >
            <span>{props.info.name}</span>
            <span className='bold'>{props.info.type}</span>
        </div>
        <img src={props.info.img} alt="Imagem perfil" className='Header-img' />
    </div>
  );
};
  
export default Header;
  