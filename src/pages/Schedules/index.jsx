import GridTemplate from "../../components/GridTemplate";

const Schedules = () => {

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
           
          </div>
        </div>
    </GridTemplate>
  );
};
  
export default Schedules;
  