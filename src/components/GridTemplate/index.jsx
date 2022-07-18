import Header from "../Header";
import Navbar from "../Navbar";
import profileImg from '../../assets/img/profile.png';

const GridTemplate = (props) => {

    const menu = [
        {
            label: "Minhas monitorias",
            link: ""
        },{
            label: "Meus horários disponíveis",
            link: ""
        },{
            label: "Buscar monitores",
            link: ""
        },{
            label: "Preferências de recomendação",
            link: ""
        },
    ]    

    const info = {
        name: "Maria Silva",
        type: "Aluno",
        img: profileImg
    }

  return (
    <div className='GridTemplate container'>
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
  