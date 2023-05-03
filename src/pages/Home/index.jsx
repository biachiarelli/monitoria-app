import GridTemplate from "../../components/GridTemplate";
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  
  // const info = {
  //   name: "Maria Silva"
  // }

  //const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
  //const apiUrl = 'https://sistema-monitoria-unb.herokuapp.com/v1/curso/1';

  // fetch(apiUrl)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
    
  // Redux state
  const {userData} = useSelector(state => state)

  useEffect(() => {
  }, [])

  return (
    <GridTemplate>
        <div className="Home">
          <h1 className="Home-title"> <span  className="bold">Olá,</span> {userData.name}</h1>
          <h2 className="Home-subtitle">Por enquanto você não tem nenhum horário de monitoria</h2>
        </div>
        <div className="Home-options">
          <div className="Home-options__card color"  onClick={() => navigate("/horarios-disponiveis")}>
            <span className="bold">Informar</span> meus horários 
          </div>
          <div className="Home-options__card"  onClick={() => navigate("/buscar-monitor")}>
            <span className="bold">Buscar</span> horários de monitores
          </div>
        </div>
    </GridTemplate>
  );
};
  
export default Home;
  