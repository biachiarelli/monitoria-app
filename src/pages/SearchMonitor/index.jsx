import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import GridTemplate from "../../components/GridTemplate";
import monitor1 from "../../assets/img/Monitor/Profile.png";
import monitor2 from "../../assets/img/Monitor/Profile-1.png";
import monitor3 from "../../assets/img/Monitor/Profile-2.png";
import { useState } from "react";
import Modal from "../../components/Modal";
import Monitor from "../../components/Monitor";

const SearchMonitor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [monitorInfo, setMonitorInfo] = useState({});

  const navigate = useNavigate();
  const monitor = [
    {
      course:"Ciência da computação",      
      img: monitor1,
      name: "Mateus Campos",
      matricula: "123456789",
      email: "mateus@email.com",
      hours: [
        {day: "Segunda",  startHour: "09:00", endHour: "9:30"},
        {day: "Terça",  startHour: "09:00", endHour: "9:30"},
        {day: "Quarta",  startHour: "09:00", endHour: "9:30"},
        {day: "Quinta",  startHour: "09:00", endHour: "9:30"},
      ]
    },
    {
      course:"Engenharia de Computação",
      name: "Sâmela Vilarins",
      img: monitor2,
      matricula: "123456789",
      email: "samela@email.com",
      hours: [
        {day: "Segunda",  startHour: "09:00", endHour: "9:30"},
        {day: "Terça",  startHour: "09:00", endHour: "9:30"},
        {day: "Quarta",  startHour: "09:00", endHour: "9:30"},
        {day: "Quinta",  startHour: "09:00", endHour: "9:30"},
      ]
    },
    {
      course:"Ciência da computação",
      name: "Marcia Lima",
      img: monitor3,
      matricula: "123456789",
      email: "marcia@email.com",
      hours: [
        {day: "Segunda",  startHour: "09:00", endHour: "9:30"},
        {day: "Terça",  startHour: "09:00", endHour: "9:30"},
        {day: "Quarta",  startHour: "09:00", endHour: "9:30"},
        {day: "Quinta",  startHour: "09:00", endHour: "9:30"},
      ]
    },

  ]

  function verDetalhes(item) {
    setIsOpen(true);
    setMonitorInfo(item)
  }
  
  return (
    <GridTemplate>
        <div className="SearchMonitor">
          <div className="SearchMonitor-header">
            <h1 className="SearchMonitor-title"> Monitores recomendados</h1>
            <div className="SearchMonitor-subtitle">
              <span className="SearchMonitor-subtitle__text">Monitores com suas preferências compatíveis com os seus:</span>
              <Button buttonStyle="primary" label="Preferências de recomendação" onClick={() => navigate("/preferencias")} />
            </div>
          </div>

          <div className="SearchMonitor-cards">
            {monitor.map((item, index)=> (
                <div key={index} className="card">
                  <img className="card-img" src={item.img} alt="foto monitor" />
                  <span className="card-course">{item.course}</span>
                  <span className="card-name">{item.name}</span>
                  <Button buttonStyle="secondary" label="Ver horários disponíveis" onClick={()=> verDetalhes(item)} />
                </div>
              ))}
          </div>
          <hr />
          <div className="SearchMonitor-header">
            <h1 className="SearchMonitor-title">Buscar monitores por horários disponíveis</h1>
            <div className="SearchMonitor-subtitle">
              <span className="SearchMonitor-subtitle__text">Monitores com horários compatíveis com os seus:</span>
              <Button buttonStyle="primary" label="Preferências de recomendação" onClick={() => navigate("/calendario")} />
            </div>
          </div>

          {isOpen && 
          <Modal setIsOpen={setIsOpen}>
            <Monitor info={monitorInfo} />
          </Modal>
          }
          
        </div>
    </GridTemplate>
  );
};
  
export default SearchMonitor;
  