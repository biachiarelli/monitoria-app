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
          <h2 className="Home-empty-subtitle">Acesso rápido as funcionalidades do sistema:</h2>
        </div>
        <div className="Home-empty-options">
          <div className="Home-empty-options__card color"  onClick={() => navigate("/minhas-monitorias")}>
            <span className="bold">Minhas</span> monitorias
          </div>
          
          <div className="Home-empty-options__card"  onClick={() => navigate("/calendario")}>
            <span className="bold">Calendário</span> de monitoria
          </div>
          <div className="Home-empty-options__card"  onClick={() => navigate("/monitores")}>
            <span className="bold">Buscar</span> monitores
          </div>
          <div className="Home-empty-options__card"  onClick={() => navigate("/preferencias")}>
            <span className="bold">Prefências</span> de recomendação
          </div>
        </div>
    </GridTemplate>
  );
};
  
export default HomeEmpty;
  