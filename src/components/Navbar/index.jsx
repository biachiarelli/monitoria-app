import img from '../../assets/img/logo.svg';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import imgMobile from '../../assets/img/menu-mobile.svg';


const Navbar = (props) => {
  const navigate = useNavigate();
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  function clickMenuMobile() {
    if(showMenuMobile) {
      setShowMenuMobile(false)
    } else {
      setShowMenuMobile(true)
    }
  }

  function isActive(label) {
    const pathname = window.location.pathname;
    let r = false;

    props.menu.forEach(item => {
      if(item.link === pathname && item.label === label){
        r = true
      }
    });

    return r;
  }

  return (
    <div className={`Navbar ${showMenuMobile ? "showMenu" : ""}`}>
      <div className='Navbar-mobile' >
        <img src={imgMobile} alt="Menu"  onClick={clickMenuMobile}/>
      </div>
      <div className={`Navbar-container ${showMenuMobile ? "showMenu" : ""}`} >
        <div className='Navbar-img'>
          <img src={img} alt="Logo Recomendação Monitoria" onClick={() => navigate("/")} />
        </div>
        <div className='Navbar-menu'>
            
          {props.menu.map((item, index) => (
            <div key={index} className={`Navbar-menu__item ${isActive(item.label) ? "active" : ""}`} onClick={() => navigate(item.link)} >
                {item.label}
            </div>
          ))}
        </div>

        <div className='Navbar-footer'>
            <Button buttonStyle="secondary" label="Sair" onClick={() => navigate("/entrar")} />
        </div>
      </div>
    </div>
  );
};
  
export default Navbar;
  