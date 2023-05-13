import React, { useState } from "react";
import monitor1 from "../../assets/img/Monitor/Profile.png";
import Button from "../Button";
import Modal from "../Modal";
import Monitor from "../Monitor";

export default function CardSchedule() {
  
  const [isOpen, setIsOpen] = useState(false);

  const monitoriaInfo = [{
    id: 1,
    img: monitor1,
    local: "Laboratório do CIC",
    name: "Mateus Campos",
    matricula: "123456789",
    hours: [
      {day: "Segunda",  startHour: "09:00", endHour: "9:30"},
      {day: "Quarta",  startHour: "09:00", endHour: "9:30"},
    ]
  }];

  const monitorInfo = {
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
  }

  function excluir(id) {
    console.log("Excluir id:"+id);
  }

  return (
    <div className="CardSchedule">
      {monitoriaInfo.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-info" >
            <img className="card-img" src={item.img} alt="foto monitor" />
            <div className="card-info__text">
                <h2 className="text-local">Local: {item.local}</h2>
                <h1 className="text-name">Monitor: {item.name}</h1>
                <div className="schedule">
                  { item.hours.map((hours, index) => (
                    <div className="schedule-group" key={index}>
                      <p className="text-day">{hours.day}</p>
                      <p className="text-hour">{hours.startHour} - {hours.endHour}</p>
                    </div>
                  ))}
                </div>
            </div>
            </div>
            <div className="card-buttons">
              <Button buttonStyle="primary" label="Ver monitor" 
              class="toggle-button"
              id="centered-toggle-button"
              onClick={() => setIsOpen(true)}
              />
              <Button buttonStyle="secondary" label="Excluir monitoria" onClick={()=>excluir(item.id)} />
          </div>
        </div>
        ))}
        
        {isOpen && 
          <Modal setIsOpen={setIsOpen}>
            <Monitor info={monitorInfo} />
          </Modal>
          }

    </div>
  );
}