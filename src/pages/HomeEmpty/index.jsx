import GridTemplate from "../../components/GridTemplate";
import { useNavigate } from 'react-router-dom';

const HomeEmpty = () => {
  const navigate = useNavigate();
  
  const info = {
    name: "Maria Silva"
  }
    

  return (
    <GridTemplate>
        <div className="Home-empty">
          <h1 className="Home-empty-title"> <span  className="bold">Olá,</span> {info.name}</h1>
          <h2 className="Home-empty-subtitle">Veja seu calendário de monitorias ou busque monitores</h2>
        </div>
        <div className="Home-empty-options">
          <div className="Home-empty-options__card color"  onClick={() => navigate("/calendario")}>
            <span className="bold">Calendário</span> de monitoria
          </div>
          <div className="Home-empty-options__card"  onClick={() => navigate("/monitores")}>
            <span className="bold">Buscar</span> horários de monitores
          </div>
        </div>
    </GridTemplate>
  );
};
  
export default HomeEmpty;
  