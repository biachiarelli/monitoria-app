import GridTemplate from "../../components/GridTemplate";
import profileImg from '../../assets/img/profile.png';
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button";
import { useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();

  // Redux state
  const {userData} = useSelector(state => state) 

  const data = {
    img: userData.photo || profileImg,
    course: userData.course,
    subject: userData.discipline,
    class: userData.class,
    email: userData.email,
    name: userData.name
  }

  return (
    <GridTemplate>
        <div className="Profile">
          <h1 className="Profile-title">Meu perfil</h1>

          <div className="Profile-main">
            <img src={data.img} alt="Imagem perfil" className='Profile-img'  />
            <div className="Profile-info">
              <span className="Profile-info__course">{data.course}</span>
              <span className="Profile-info__name">{data.name}</span>
              <span className="Profile-info__subject">{data.subject} {data.class}</span>
              <span className="Profile-info__email">{data.email}</span>
            </div>
            <div className="Profile-buttons">
              <Button label="Editar perfil"  buttonStyle="primary" onClick={() => navigate("")} />
              <Button label="Alterar senha" buttonStyle="secondary" onClick={() => navigate("")}/>
            </div>
        </div>
      </div>
    </GridTemplate>
  );
};
  
export default Profile;
  