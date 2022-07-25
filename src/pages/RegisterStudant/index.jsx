import React, { useEffect, useState } from 'react';
import imgLogo from '../../assets/img/logo.svg';
import imgRegister from '../../assets/img/register.svg';
import Input from "../../components/Input";
import Button from "../../components/Button";
import StepperRegister from "../../components/StepperRegister";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import RadioButton from '../../components/RadioButton';

const RegisterStudant = () => {
  const navigate = useNavigate();

  const materias = ["APC","CB"]
  const turmas = ["A","B", "C"]
  const course = ["Ciência da Computação","Computação Licenciatura", "Engenharia da Computação"]
  const gender = ["Feminino","Masculino"]
  let itens = [
    {label: "Informações pessoais", active: true},
    {label: "Preferências de recomendação", active: false},
    {label: "Senha", active: false}
  ] 
  const [step, setStep] = useState(0);

  function submit() {
    console.log("submit")
  }

  useEffect(() => {
    itens.forEach((item, index) => {
      if(index <= step)
        item.active = true;
      else
        item.active = false
    })
  });

  return (
    <div className='Register'>
      <div className="Register-wrapper container">
        <div className='Register-main'>
          <img className='Register-logo' src={imgLogo} alt="Logo recomendação de monitoria" />
          <div className='Register-title'>
            <IoIosArrowRoundBack className='Register-title__icon' onClick={() => navigate("/entrar")} />
            <h1 className='Register-title__text'>Cadastro de aluno</h1>
          </div>
          <div className='Register-stepper'>
            <StepperRegister itens={itens} />
          </div>
          {step === 0 &&
          <>
          <form className='Register-form'>
            <Input
              label="Nome"
              placeholder="Informe o seu nome completo"
              type="text"
              required={true}
              />

              <Input
                label="E-mail"
                placeholder="Informe o e-mail"
                type="email"
                required={true}
                />
              
              <Input
                label="Celular (opcional)"
                placeholder="(00) 00000-0000 "
                type="text"
                mask="(00) 00000-0000"
                required={true}
                />
                
              <Input
                label="Data de nascimento"
                placeholder="Informe "
                type="date"
                required={true}
                />
                
              <Input
                label="Matéria"
                placeholder="Selecione o curso "
                type="select"
                options={materias}
                />
                
              <Input
                label="Turma"
                placeholder="Selecione a turma"
                type="select"
                options={turmas}
                />            
                
            </form>
            <div className='Register-buttons'>
                <Button label="Cancelar" buttonStyle="secondary" onClick={() => navigate("/entrar")} />
                <Button label="Continuar" buttonStyle="primary" onClick={() => setStep(step + 1)} />
            </div>
            </>
          }

        {step === 1 &&
          <>
          <form className='Register-form'>
              
            <Input
              label="Curso"
              placeholder="Selecione o curso"
              type="select"
              options={course}
              />

            <div  className='Register-form__label'>
              <label className='Register-form__label'>Estudante cotista? </label>
              <RadioButton label="Sim" />
              <RadioButton label="Não" />
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
            <div className='Register-buttons'>
                <Button label="Voltar" buttonStyle="secondary" onClick={() => setStep(step - 1)} />
                <Button label="Continuar" buttonStyle="primary" onClick={() => setStep(step + 1)} />
            </div>
          </>
          }
          {step === 2 &&
            <>
            <form className='Register-form'>
              <Input
                label="Senha"
                placeholder="Informe a senha"
                type="password"
                required={true}
                />
                <Input
                  label="Confirme a senha"
                  placeholder="Informe a senha"
                  type="password"
                  required={true}
                  />
            </form>

            <div className='Register-buttons'>
                <Button label="Voltar" buttonStyle="secondary" onClick={() => setStep(step - 1)} />
                <Button label="Finalizar" buttonStyle="primary" onClick={() => submit()} />
            </div>
            </>
          }
          
          
        </div>
      </div>
        <div className='Register-img'>
          <img src={imgRegister} alt="Ilustração de Register" />
        </div>
    </div>
  );
};
  
  export default RegisterStudant;
  