import Button from "../../components/Button";
import GridTemplate from "../../components/GridTemplate";
import Input from "../../components/Input";
import RadioButton from "../../components/RadioButton";

const Preferences = () => {

  const turmas = ["A","B", "C"]
  const course = ["Ciência da Computação","Computação Licenciatura", "Engenharia da Computação"]
  const gender = ["Feminino","Masculino"]

  
  return (
    <GridTemplate>
        <div className="Preferences">
          <div className="Preferences-header">
            <h1 className="Preferences-title">Minhas preferências de recomendação</h1>
            <p className="Preferences-text">Essas foram informações que você salvou assim que fez o cadastro. Nós usamos essas informações para te recomendar monitores, mas você pode alterar a qualquer momento.</p>
          </div>
          
          <form className='Preferences-form'>
              
            <Input
              label="Curso"
              placeholder="Selecione o curso"
              type="select"
              options={course}
              />

            <div  className='Preferences-form__item'>
              <label className='Input-label'>Estudante cotista? </label>
              <div className='Preferences-form__radio'>
                <RadioButton label="Sim" name="preferece" />
                <RadioButton label="Não" name="preferece" />
              </div>
            </div>
            
            <Input
              label="Gênero"
              placeholder="Selecione o gênero"
              type="select"
              options={gender}
              />

            <Input
              label="Idade"
              placeholder="Selecione a turma"
              type={turmas}
              />
          </form>
            <div className='Preferences-buttons'>
                <Button label="Editar" buttonStyle="secondary" />
            </div>
        </div>
    </GridTemplate>
  );
};
  
export default Preferences;
  