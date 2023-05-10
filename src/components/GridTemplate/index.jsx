import Header from "../Header";
import Navbar from "../Navbar";
import profileImg from '../../assets/img/profile.png';

const GridTemplate = (props) => {

    const menu = [
        {
            label: "Minhas monitorias",
            link: "/home"
        },{
            label: "Meus horários disponíveis",
            link: "/horarios-disponiveis"
        },{
            label: "Buscar monitores",
            link: "/buscar-monitor"
        },{
            label: "Preferências de recomendação",
            link: "/preferencias"
        },
    ]    

    const info = {
        name: "Maria Silva",
        type: "Aluno",
        img: profileImg,
        link: "/perfil"
    }

  return (
    <div className='GridTemplate'>
        <div className='GridTemplate-navbar'>
            <Navbar  menu={menu} />
        </div>
        <div className='GridTemplate-header'>
            <Header info={info}/>
        </div>
        <div className='GridTemplate-main'>
            {props.children}
        </div>
    </div>
  );
};
  
export default GridTemplate;
  