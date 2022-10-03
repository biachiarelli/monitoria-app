import GridTemplate from "../../components/GridTemplate";

const Schedules = () => {

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

  return (
    <GridTemplate>
        <div className="Schedules">
          <h1 className="Schedules-title"> Meus horários disponíveis</h1>
            <div className="Schedules-label">
               <h2 className="Schedules-label__text">Clique para marcar como disponível/indisponível</h2>
               <div className="Schedules-label__itens">
                <div className="Schedules-label__item"><span className="square gray"></span> Indisponível</div>
                <div className="Schedules-label__item"><span className="square light"></span> Com monitoria</div>
                <div className="Schedules-label__item"><span className="square dark"></span> Disponível</div>
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
                  <td></td>
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
  