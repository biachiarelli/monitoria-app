import CardSchedule from "../../components/CardSchedule";
import GridTemplate from "../../components/GridTemplate";

const Home = () => {
  
  const info = {
    name: "Maria Silva"
  }    

  return (
    <GridTemplate>
        <div className="Home">
          <h1 className="Home-title"> <span  className="bold">Olá,</span> {info.name}</h1>
          <h2 className="Home-subtitle">Suas  monitorias agendadas:</h2>
        </div>
        <div className="Home-options">
          <CardSchedule />
        </div>
    </GridTemplate>
  );
};
  
export default Home;
  