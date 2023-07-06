import { useState } from "react";
import GridTemplate from "../../components/GridTemplate";

const initialList = [
  { day: 'segunda',  hour: '09:00', status: true, person: 'Matheus Campos' }, 
  { day: 'segunda',  hour: '09:30', status: true, person: 'Matheus Campos' }, 
  { day: 'segunda',  hour: '10:00', status: null, person: '' }, 
  { day: 'segunda',  hour: '10:30', status: null, person: '' }, 
  { day: 'segunda',  hour: '11:00', status: null, person: '' }, 
  { day: 'segunda',  hour: '11:30', status: null, person: '' }, 
  { day: 'segunda',  hour: '12:00', status: null, person: '' }, 
  { day: 'segunda',  hour: '12:30', status: null, person: '' }, 
  { day: 'segunda',  hour: '13:00', status: false, person: '' }, 
  { day: 'segunda',  hour: '13:30', status: false, person: '' }, 
  { day: 'segunda',  hour: '14:00', status: false, person: '' }, 
  { day: 'segunda',  hour: '14:30', status: false, person: '' }, 
  { day: 'segunda',  hour: '15:00', status: false, person: '' }, 
  { day: 'segunda',  hour: '15:30', status: false, person: '' }, 
  { day: 'segunda',  hour: '16:00', status: null, person: '' }, 
  { day: 'segunda',  hour: '16:30', status: null, person: '' }, 
  { day: 'segunda',  hour: '17:00', status: null, person: '' }, 
  { day: 'segunda',  hour: '17:30', status: null, person: '' }, 
  { day: 'segunda',  hour: '18:00', status: null, person: '' }, 
  { day: 'segunda',  hour: '18:30', status: null, person: '' }, 
  { day: 'segunda',  hour: '19:00', status: null, person: '' }, 
  { day: 'segunda',  hour: '19:30', status: null, person: '' }, 
  { day: 'segunda',  hour: '20:00', status: null, person: '' }, 
  { day: 'segunda',  hour: '20:30', status: null, person: '' }, 
  { day: 'segunda',  hour: '21:00', status: null, person: '' }, 
  { day: 'segunda',  hour: '21:30', status: null, person: '' }, 
  { day: 'segunda',  hour: '22:00', status: null, person: '' }, 
  { day: 'segunda',  hour: '22:30', status: null, person: '' }, 
  
  { day: 'terça',  hour: '09:00', status: false, person: '' }, 
  { day: 'terça',  hour: '09:30', status: false, person: '' }, 
  { day: 'terça',  hour: '10:00', status: null, person: '' }, 
  { day: 'terça',  hour: '10:30', status: null, person: '' }, 
  { day: 'terça',  hour: '11:00', status: null, person: '' }, 
  { day: 'terça',  hour: '11:30', status: null, person: '' }, 
  { day: 'terça',  hour: '12:00', status: null, person: '' }, 
  { day: 'terça',  hour: '12:30', status: null, person: '' }, 
  { day: 'terça',  hour: '13:00', status: false, person: '' }, 
  { day: 'terça',  hour: '13:30', status: false, person: '' }, 
  { day: 'terça',  hour: '14:00', status: false, person: '' }, 
  { day: 'terça',  hour: '14:30', status: false, person: '' }, 
  { day: 'terça',  hour: '15:00', status: false, person: '' }, 
  { day: 'terça',  hour: '15:30', status: false, person: '' }, 
  { day: 'terça',  hour: '16:00', status: null, person: '' }, 
  { day: 'terça',  hour: '16:30', status: null, person: '' }, 
  { day: 'terça',  hour: '17:00', status: null, person: '' }, 
  { day: 'terça',  hour: '17:30', status: null, person: '' }, 
  { day: 'terça',  hour: '18:00', status: null, person: '' }, 
  { day: 'terça',  hour: '18:30', status: null, person: '' }, 
  { day: 'terça',  hour: '19:00', status: null, person: '' }, 
  { day: 'terça',  hour: '19:30', status: null, person: '' }, 
  { day: 'terça',  hour: '20:00', status: null, person: '' }, 
  { day: 'terça',  hour: '20:30', status: null, person: '' }, 
  { day: 'terça',  hour: '21:00', status: null, person: '' }, 
  { day: 'terça',  hour: '21:30', status: null, person: '' }, 
  { day: 'terça',  hour: '22:00', status: null, person: '' }, 
  { day: 'terça',  hour: '22:30', status: null, person: '' }, 

  
  { day: 'quarta',  hour: '09:00', status: true, person: 'Matheus Campos' }, 
  { day: 'quarta',  hour: '09:30', status: true, person: 'Matheus Campos' }, 
  { day: 'quarta',  hour: '10:00', status: null, person: '' }, 
  { day: 'quarta',  hour: '10:30', status: null, person: '' }, 
  { day: 'quarta',  hour: '11:00', status: null, person: '' }, 
  { day: 'quarta',  hour: '11:30', status: null, person: '' }, 
  { day: 'quarta',  hour: '12:00', status: null, person: '' }, 
  { day: 'quarta',  hour: '12:30', status: null, person: '' }, 
  { day: 'quarta',  hour: '13:00', status: false, person: '' }, 
  { day: 'quarta',  hour: '13:30', status: false, person: '' }, 
  { day: 'quarta',  hour: '14:00', status: false, person: '' }, 
  { day: 'quarta',  hour: '14:30', status: false, person: '' }, 
  { day: 'quarta',  hour: '15:00', status: false, person: '' }, 
  { day: 'quarta',  hour: '15:30', status: false, person: '' }, 
  { day: 'quarta',  hour: '16:00', status: null, person: '' }, 
  { day: 'quarta',  hour: '16:30', status: null, person: '' }, 
  { day: 'quarta',  hour: '17:00', status: null, person: '' }, 
  { day: 'quarta',  hour: '17:30', status: null, person: '' }, 
  { day: 'quarta',  hour: '18:00', status: null, person: '' }, 
  { day: 'quarta',  hour: '18:30', status: null, person: '' }, 
  { day: 'quarta',  hour: '19:00', status: null, person: '' }, 
  { day: 'quarta',  hour: '19:30', status: null, person: '' }, 
  { day: 'quarta',  hour: '20:00', status: null, person: '' }, 
  { day: 'quarta',  hour: '20:30', status: null, person: '' }, 
  { day: 'quarta',  hour: '21:00', status: null, person: '' }, 
  { day: 'quarta',  hour: '21:30', status: null, person: '' }, 
  { day: 'quarta',  hour: '22:00', status: null, person: '' }, 
  { day: 'quarta',  hour: '22:30', status: null, person: '' }, 

  { day: 'quinta',  hour: '09:00', status: false, person: '' }, 
  { day: 'quinta',  hour: '09:30', status: false, person: '' }, 
  { day: 'quinta',  hour: '10:00', status: null, person: '' }, 
  { day: 'quinta',  hour: '10:30', status: null, person: '' }, 
  { day: 'quinta',  hour: '11:00', status: null, person: '' }, 
  { day: 'quinta',  hour: '11:30', status: null, person: '' }, 
  { day: 'quinta',  hour: '12:00', status: null, person: '' }, 
  { day: 'quinta',  hour: '12:30', status: null, person: '' }, 
  { day: 'quinta',  hour: '13:00', status: false, person: '' }, 
  { day: 'quinta',  hour: '13:30', status: false, person: '' }, 
  { day: 'quinta',  hour: '14:00', status: false, person: '' }, 
  { day: 'quinta',  hour: '14:30', status: false, person: '' }, 
  { day: 'quinta',  hour: '15:00', status: false, person: '' }, 
  { day: 'quinta',  hour: '15:30', status: false, person: '' }, 
  { day: 'quinta',  hour: '16:00', status: null, person: '' }, 
  { day: 'quinta',  hour: '16:30', status: null, person: '' }, 
  { day: 'quinta',  hour: '17:00', status: null, person: '' }, 
  { day: 'quinta',  hour: '17:30', status: null, person: '' }, 
  { day: 'quinta',  hour: '18:00', status: null, person: '' }, 
  { day: 'quinta',  hour: '18:30', status: null, person: '' }, 
  { day: 'quinta',  hour: '19:00', status: null, person: '' }, 
  { day: 'quinta',  hour: '19:30', status: null, person: '' }, 
  { day: 'quinta',  hour: '20:00', status: null, person: '' }, 
  { day: 'quinta',  hour: '20:30', status: null, person: '' }, 
  { day: 'quinta',  hour: '21:00', status: null, person: '' }, 
  { day: 'quinta',  hour: '21:30', status: null, person: '' }, 
  { day: 'quinta',  hour: '22:00', status: null, person: '' }, 
  { day: 'quinta',  hour: '22:30', status: null, person: '' }, 

  
  { day: 'sexta',  hour: '09:00', status: false, person: '' }, 
  { day: 'sexta',  hour: '09:30', status: false, person: '' }, 
  { day: 'sexta',  hour: '10:00', status: null, person: '' }, 
  { day: 'sexta',  hour: '10:30', status: null, person: '' }, 
  { day: 'sexta',  hour: '11:00', status: null, person: '' }, 
  { day: 'sexta',  hour: '11:30', status: null, person: '' }, 
  { day: 'sexta',  hour: '12:00', status: null, person: '' }, 
  { day: 'sexta',  hour: '12:30', status: null, person: '' }, 
  { day: 'sexta',  hour: '13:00', status: false, person: '' }, 
  { day: 'sexta',  hour: '13:30', status: false, person: '' }, 
  { day: 'sexta',  hour: '14:00', status: false, person: '' }, 
  { day: 'sexta',  hour: '14:30', status: false, person: '' }, 
  { day: 'sexta',  hour: '15:00', status: false, person: '' }, 
  { day: 'sexta',  hour: '15:30', status: false, person: '' }, 
  { day: 'sexta',  hour: '16:00', status: null, person: '' }, 
  { day: 'sexta',  hour: '16:30', status: null, person: '' }, 
  { day: 'sexta',  hour: '17:00', status: null, person: '' }, 
  { day: 'sexta',  hour: '17:30', status: null, person: '' }, 
  { day: 'sexta',  hour: '18:00', status: null, person: '' }, 
  { day: 'sexta',  hour: '18:30', status: null, person: '' }, 
  { day: 'sexta',  hour: '19:00', status: null, person: '' }, 
  { day: 'sexta',  hour: '19:30', status: null, person: '' }, 
  { day: 'sexta',  hour: '20:00', status: null, person: '' }, 
  { day: 'sexta',  hour: '20:30', status: null, person: '' }, 
  { day: 'sexta',  hour: '21:00', status: null, person: '' }, 
  { day: 'sexta',  hour: '21:30', status: null, person: '' }, 
  { day: 'sexta',  hour: '22:00', status: null, person: '' }, 
  { day: 'sexta',  hour: '22:30', status: null, person: '' }, 

  
  { day: 'sábado',  hour: '09:00', status: null, person: 'Matheus Campos' }, 
  { day: 'sábado',  hour: '09:30', status: null, person: 'Matheus Campos' }, 
  { day: 'sábado',  hour: '10:00', status: null, person: '' }, 
  { day: 'sábado',  hour: '10:30', status: null, person: '' }, 
  { day: 'sábado',  hour: '11:00', status: null, person: '' }, 
  { day: 'sábado',  hour: '11:30', status: null, person: '' }, 
  { day: 'sábado',  hour: '12:00', status: null, person: '' }, 
  { day: 'sábado',  hour: '12:30', status: null, person: '' }, 
  { day: 'sábado',  hour: '13:00', status: null, person: '' }, 
  { day: 'sábado',  hour: '13:30', status: null, person: '' }, 
  { day: 'sábado',  hour: '14:00', status: null, person: '' }, 
  { day: 'sábado',  hour: '14:30', status: null, person: '' }, 
  { day: 'sábado',  hour: '15:00', status: null, person: '' }, 
  { day: 'sábado',  hour: '15:30', status: null, person: '' }, 
  { day: 'sábado',  hour: '16:00', status: null, person: '' }, 
  { day: 'sábado',  hour: '16:30', status: null, person: '' }, 
  { day: 'sábado',  hour: '17:00', status: null, person: '' }, 
  { day: 'sábado',  hour: '17:30', status: null, person: '' }, 
  { day: 'sábado',  hour: '18:00', status: null, person: '' }, 
  { day: 'sábado',  hour: '18:30', status: null, person: '' }, 
  { day: 'sábado',  hour: '19:00', status: null, person: '' }, 
  { day: 'sábado',  hour: '19:30', status: null, person: '' }, 
  { day: 'sábado',  hour: '20:00', status: null, person: '' }, 
  { day: 'sábado',  hour: '20:30', status: null, person: '' }, 
  { day: 'sábado',  hour: '21:00', status: null, person: '' }, 
  { day: 'sábado',  hour: '21:30', status: null, person: '' }, 
  { day: 'sábado',  hour: '22:00', status: null, person: '' }, 
  { day: 'sábado',  hour: '22:30', status: null, person: '' }, 
];

const Schedules = () => {
  const [personalSchedule, setPersonalSchedule] = useState(initialList)
  const avaliableDays = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
  const avaliableHours = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
  ]


  function changeStatus(day, hour) {

    const newSchedule = personalSchedule.map(item => {
      if(item.day.toLowerCase() === day.toLowerCase()  && item.hour === hour) {

        if(item.status === null) {
          item.status = false
        } else {
          item.status = null
        }
      }
      return item;
    });

    setPersonalSchedule(newSchedule)

  }

  return (
    <GridTemplate>
        <div className="Schedules">
          <h1 className="Schedules-title"> Calendário de monitoria</h1>
            <div className="Schedules-label">
               <h2 className="Schedules-label__text">Clique para marcar como disponível/indisponível</h2>
               <div className="Schedules-label__itens">
                <div className="Schedules-label__item"><span className="square dark"></span> Com monitoria</div>
                <div className="Schedules-label__item"><span className="square light"></span> Disponível</div>
                <div className="Schedules-label__item"><span className="square gray"></span> Indisponível</div>
               </div>
            </div>
          <div className="Schedules-table">
           <table>
            <thead>
              <tr>
                <th>Horários / Data</th>
                {avaliableDays.map((day, index) => (
                  <th key={index}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
            {avaliableHours.map((hour, index) => (
              <tr key={index}>
                <td>{hour}</td>
                {avaliableDays.map((day, index) => (
                  <td key={index} >
                  {personalSchedule.filter(item => item.day.toLowerCase() === day.toLowerCase() && item.hour === hour)[0]?.status && 
                    <span className="dark"> 
                      {personalSchedule.filter(item =>  item.day.toLowerCase() === day.toLowerCase() && item.hour === hour)[0]?.person} 
                    </span>
                  }
                  {personalSchedule.filter(item => item.day.toLowerCase() === day.toLowerCase() && item.hour === hour)[0]?.status === false && 
                    <span className="light" onClick={()=> changeStatus(day, hour)}></span>
                  }
                  {personalSchedule.filter(item => item.day.toLowerCase() === day.toLowerCase() && item.hour === hour)[0]?.status === null && 
                    <span className="gray" onClick={()=> changeStatus(day, hour)}></span>
                  }
                 </td>
                ))}
              </tr>
              ))}
            </tbody>
           </table>
          </div>
        </div>
    </GridTemplate>
  );
};
  
export default Schedules;
  