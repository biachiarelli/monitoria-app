import React from "react";
import Button from "../Button";

export default function Monitor({info}) {
  return (
    <div className="Monitor">
        <img className="card-img" src={info.img} alt="foto monitor" />
        <div className="card-info__text">
          <h1 className="text-name">{info.name}</h1>
          <div className="schedule">
            { info.hours.map((item, index) => (
              <div className="schedule-group" key={index}>
                <p className="text-day">{item.day}</p>
                <p className="text-hour">{item.startHour} - {item.endHour}</p>
              </div>
            ))}
          </div>
          <div className="contato">
            <p className="label-contato">Contato</p>
            <p className="text-contato">{info.email}</p>
          </div>
        </div>
        <div className="card-buttons">
          <Button buttonStyle="primary" label="Agendar monitoria"  />
          <Button buttonStyle="secondary" label="Entrar em contato" onClick={() => window.location = `mailto:${info.email}`} />
        </div>
    </div>
  );
}