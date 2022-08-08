import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import GridTemplate from "../../components/GridTemplate";
import monitor1 from "../../assets/img/Monitor/Profile.png";
import monitor2 from "../../assets/img/Monitor/Profile-1.png";
import monitor3 from "../../assets/img/Monitor/Profile-2.png";

const SearchMonitor = () => {
  const navigate = useNavigate();
  const monitor = [
    {
      course:"Ciência da computação",
      name: "Matheus Campos",
      img: monitor1
    },
    {
      course:"Engenharia de Computação",
      name: "Sâmela Vilarins",
      img: monitor2
    },
    {
      course:"Ciência da computação",
      name: "Marcia Lima",
      img: monitor3
    },

  ]
  
  return (
    <GridTemplate>
        <div className="SearchMonitor">
          <div className="SearchMonitor-header">
            <h1 className="SearchMonitor-title"> Monitores recomendados</h1>
            <div className="SearchMonitor-subtitle">
              <span className="SearchMonitor-subtitle__text">Monitores com suas preferências compatíveis com os seus:</span>
              <Button buttonStyle="primary" label="Preferências de recomendação" onClick={() => navigate("/buscar-monitor")} />
            </div>
          </div>

          <div className="SearchMonitor-cards">
            {monitor.map((item, index)=> (
                <div key={index} className="card">
                  <img className="card-img" src={item.img} alt="foto monitor" />
                  <span className="card-course">{item.course}</span>
                  <span className="card-name">{item.name}</span>
                  <Button buttonStyle="secondary" label="Ver horários disponíveis" />
                </div>
              ))}
          </div>
          <hr />
          <div className="SearchMonitor-header">
            <h1 className="SearchMonitor-title">Buscar monitores por horários disponíveis</h1>
            <div className="SearchMonitor-subtitle">
              <span className="SearchMonitor-subtitle__text">Monitores com horários compatíveis com os seus:</span>
              <Button buttonStyle="primary" label="Preferências de recomendação" onClick={() => navigate("/horarios-disponiveis")} />
            </div>
          </div>

          
        </div>
    </GridTemplate>
  );
};
  
export default SearchMonitor;
  