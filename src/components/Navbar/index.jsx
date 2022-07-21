import img from '../../assets/img/logo.svg';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';


const Navbar = (props) => {
  const navigate = useNavigate();

  return (
    <div className='Navbar'>
        <img className='Navbar-img' src={img} alt="Imagem perfil" onClick={() => navigate("/")} />
        <div className='Navbar-menu'>
            
          {props.menu.map((item, index) => (
            <div key={index} className='Navbar-menu__item' onClick={() => navigate(item.link)} >
                {item.label}
            </div>
          ))}
        </div>

        <div className='Navbar-footer'>
            <Button buttonStyle="secondary" label="Sair" onClick={() => navigate("/entrar")} />
        </div>
    </div>
  );
};
  
export default Navbar;
  