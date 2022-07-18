import GridTemplate from "../../components/GridTemplate";

const Home = () => {
  const info = {
    name: "Maria Silva"
  }

  return (
    <GridTemplate>
        <div className="Home">
          <h1 className="Home-title"> <span  className="bold">Olá,</span> {info.name}</h1>
          <h2 className="Home-subtitle">Por enquanto você não tem nenhum horário de monitoria</h2>
        </div>
        <div className="Home-options">
          <div className="Home-options__card color">
            <span className="bold">Informar</span> meus horários 
          </div>
          <div className="Home-options__card">
            <span className="bold">Buscar</span> horários de monitores
          </div>
        </div>
    </GridTemplate>
  );
};
  
export default Home;
  