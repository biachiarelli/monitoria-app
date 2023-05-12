import Button from "../../components/Button";
import GridTemplate from "../../components/GridTemplate";
import Input from "../../components/Input";
import RadioButton from "../../components/RadioButton";
import { useState } from "react";

const Preferences = () => {
  const [isEditing, setIsEditing] = useState(false);
  const turmas = ["A","B", "C"]
  const course = ["Ciência da Computação","Computação Licenciatura", "Engenharia da Computação"]
  const gender = ["Feminino","Masculino"]

  const preference = {
    course: "Ciência da Computação",
    gender: "Feminino",
    turma: "A",
    matricula: "1234567",
    cotas: true
  }

  return (
    <GridTemplate>
        <div className="Preferences">
          <div className="Preferences-header">
            <h1 className="Preferences-title">Minhas preferências de recomendação</h1>
            <p className="Preferences-text">Essas foram informações que você salvou assim que fez o cadastro. Nós usamos essas informações para te recomendar monitores, mas você pode alterar a qualquer momento.</p>
          </div>
          { isEditing && 
          <form className='Preferences-form'>
              
            <Input
              label="Curso"
              placeholder="Selecione o curso"
              type="select"
              options={course}
              />

              <Input
                label="Matrícula"
                placeholder="Informe a matrícula"
                type="text"
                />

            <div  className='Preferences-form__item'>
              <label className='Input-label'>Estudante cotista? </label>
              <div className='Preferences-form__radio'>
                <RadioButton label="Sim" name="preferece" value={true} />
                <RadioButton label="Não" name="preferece" value={false} />
              </div>
            </div>
            
            <Input
              label="Gênero"
              placeholder="Selecione o gênero"
              type="select"
              options={gender}
              />

              <div className='Preferences-buttons'>
                  <Button label="Cancelar" buttonStyle="secondary" click={() => setIsEditing(false)} />
                  <Button label="Salvar" buttonStyle="primary" />
              </div>
              
          </form>
          }
          { !isEditing && 
            <div>
              <div className='Preferences-buttons'>
                  <Button label="Editar" buttonStyle="secondary" click={() => setIsEditing(true)} />
              </div>
            </div>
          }
        </div>
    </GridTemplate>
  );
};
  
export default Preferences;
  