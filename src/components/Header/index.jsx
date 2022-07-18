const Header = (props) => {
  return (
    <div className='Header'>
        <div className='Header-info'>
            <span>{props.info.name}</span>
            <span className='bold'>{props.info.type}</span>
        </div>
        <img src={props.info.img} alt="Imagem perfil" className='Header-img' />
    </div>
  );
};
  
export default Header;
  