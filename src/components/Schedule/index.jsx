import React from "react";
import Button from "../Button";
import Input from "../Input";
import RadioButton from "../RadioButton";

export default function Schedule({info}) {
  return (
    <div className="Schedule">
        <h1 className="Schedule-title">Monitoria</h1>
        <p className="Schedule-text">Escolha 1 horário de monitoria dentre as opções e coloque as demais informações:</p>


        {info.hours.map((item, index)=> (
          <div key={index} className="Schedule-radio">
            <RadioButton 
              type="radio" 
              value={item.day +"-"+ item.startHour } 
              label={item.day +"-"+ item.startHour } 
              name="time" 
              />
          </div>
          
        ))}

        <Input
          label="Local de preferência para monitoria"
          placeholder="Ex: laboratório de informática (LINF), Teams, Sala de estudos (CIC)..."
          type="text"
          required={true}
          />
          <Input
            label="Observação (opcional)"
            placeholder="Informe mais alguma bservação, caso necessário"
            type="text"
            required={false}
            />

        <div className="Schedule-buttons">
          <Button buttonStyle="secondary" label="Voltar" />
          <Button buttonStyle="primary" label="Confirmar"  />
        </div>
    </div>
  );
}