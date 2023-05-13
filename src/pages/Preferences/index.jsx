import Button from "../../components/Button";
import GridTemplate from "../../components/GridTemplate";
import Input from "../../components/Input";
import RadioButton from "../../components/RadioButton";
import { useState } from "react";

const Preferences = () => {
  const [isEditing, setIsEditing] = useState(false);

  const course = ["Ciência da Computação","Computação Licenciatura", "Engenharia da Computação"]
  const gender = ["Feminino","Masculino", "Todos"]
  const cotas = ["Sim","Não", "Todos"]

  const preference = {
    course: "Ciência da Computação",
    gender: "Feminino",
    turma: "A",
    matricula: "1234567",
    cotas: "Sim"
  }

  return (
    <GridTemplate>
        <div className="Preferences">
          <div className="Preferences-header">
            <h1 className="Preferences-title">Minhas preferências de recomendação</h1>
            <p className="Preferences-text">Essas foram informações que você salvou assim que fez o cadastro. Nós usamos essas informações para te recomendar monitores, mas você pode alterar a qualquer momento.</p>
          </div>
          { isEditing && 
          <form>
              <div className='Preferences-form'>
                <Input
                  label="Curso"
                  placeholder="Selecione o curso"
                  type="select"
                  options={course}
                  />
                
                <Input
                  label="Gênero"
                  placeholder="Selecione o gênero"
                  type="select"
                  options={gender}
                  />
                  
                  <div  className='Preferences-form__item'>
                    <label className='Input-label'>Estudante cotista? </label>
                    <div className='Preferences-form__radio'>
                      {cotas.map((item, index) => (
                        <RadioButton key={index} label={item} name="preferece" value={item} />
                      ))}
                    </div>
                  </div>
              </div>

              <div className='Preferences-buttons'>
                  <Button label="Cancelar" buttonStyle="secondary" onClick={() => setIsEditing(false)} />
                  <Button label="Salvar" buttonStyle="primary" />
              </div>
              
          </form>
          }
          { !isEditing && 
              <div className='Preferences-info'>
                <div className="info-group">
                  <h2 className="info-label">Curso</h2>
                  <p className="info-label">{preference.course}</p>
                </div>
                <div className="info-group">
                  <h2 className="info-label">Gênero</h2>
                  <p className="info-label">{preference.gender}</p>
                </div>
                <div className="info-group">
                  <h2 className="info-label">Cotas</h2>
                  <p className="info-label">{preference.cotas}</p>
                </div>
                <div className='Preferences-buttons'>
                  <Button label="Editar" buttonStyle="secondary" onClick={() => setIsEditing(true)} />
                </div>
              </div>
          }
        </div>
    </GridTemplate>
  );
};
  
export default Preferences;
  