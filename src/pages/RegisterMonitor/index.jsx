import React, { useEffect, useState } from 'react';
import imgLogo from '../../assets/img/logo.svg';
import imgRegister from '../../assets/img/register.svg';
import Input from "../../components/Input";
import Button from "../../components/Button";
import StepperRegister from "../../components/StepperRegister";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import RadioButton from '../../components/RadioButton';
import api from '../../api/api';

const RegisterMonitor = () => {
  const navigate = useNavigate();

  const materias = ["APC", "CB"]
  const turma = ["2020/1", "2020/2", "2021/1", "2021/2", "2022/1", "2022/2", "2023/1", "2023/2",]
  const course = ["Ciência da Computação", "Computação Licenciatura", "Engenharia da Computação"]
  const gender = ["Feminino", "Masculino"]
  let itens = [
    { label: "Informações pessoais", active: true },
    { label: "Preferências de recomendação", active: false },
    { label: "Senha", active: false }
  ]
  const [step, setStep] = useState(0);

  // All the sign in data is stored here
  const [data, setData] = useState({
    id: 0,
    name: '',
    telephone: '',
    birthDate: '',
    discipline: '',
    class: '',
    course: "",
    quotaHolder: false,
    gender: "",
    email: "",
    password: "",
    role: "Monitor"
  })

  // Check the confirmation password
  const [checkPassword, setCheckPassword] = useState('')

  function submit() {
    // Send to backend
    api.post('/signup', data)

    // Clean the state
    setData({
      id: 0,
      name: '',
      telephone: '',
      birthDate: '',
      discipline: '',
      class: '',
      course: "",
      quotaHolder: false,
      gender: "",
      email: "",
      password: "",
      role: "Monitor"
    })

    //Navigate to Login
    navigate('/')
  }

  useEffect(() => {
    itens.forEach((item, index) => {
      if (index <= step)
        item.active = true;
      else
        item.active = false
    })
  });

  function getItens() {
    return itens;
  }

  return (
    <div className='Register-monitor'>
      <div className="Register-wrapper container">
        <div className='Register-main'>
          <img className='Register-logo' src={imgLogo} alt="Logo recomendação de monitoria" />
          <div className='Register-title'>
            <IoIosArrowRoundBack className='Register-title__icon' onClick={() => navigate("/entrar")} />
            <h1 className='Register-title__text'>Cadastro de monitor</h1>
          </div>
          <div className='Register-stepper'>
            <StepperRegister getItens={getItens} length={itens.length} />
          </div>
          {step === 0 &&
            <>
              <form className='Register-form'>
                <Input
                  label="Nome"
                  placeholder="Informe o seu nome completo"
                  type="text"
                  required={true}
                  returnValue={(response) => setData({ ...data, name: response })}
                />

                <Input
                  label="E-mail"
                  placeholder="Informe o e-mail"
                  type="email"
                  required={true}
                  returnValue={(response) => setData({ ...data, email: response })}
                />

                <Input
                  label="Celular (opcional)"
                  placeholder="(00) 00000-0000 "
                  type="text"
                  mask="(00) 00000-0000"
                  required={true}
                  returnValue={(response) => setData({ ...data, telephone: response })}
                />

                <Input
                  label="Data de nascimento"
                  placeholder="Informe "
                  type="date"
                  required={true}
                  returnValue={(response) => setData({ ...data, birthDate: response })}
                />

                <Input
                  label="Matéria que está como monitor"
                  placeholder="Selecione a matéria "
                  type="select"
                  options={materias}
                  returnValue={(response) => setData({ ...data, discipline: response })}
                />

                <Input
                  label="Turma que está como monitor"
                  placeholder="Selecione a turma"
                  type="select"
                  options={turma}
                  returnValue={(response) => setData({ ...data, class: response })}
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
                  returnValue={(response) => setData({ ...data, course: response })}
                />

                <Input
                  label="Matrícula"
                  placeholder="Informe a matrícula"
                  type="text"
                  returnValue={(response) => setData({ ...data, id: response })}
                />

                <div className='Register-form__item'>
                  <label className='Input-label'>Estudante cotista? </label>
                  <RadioButton
                    label="Sim"
                    name="register-studant"
                    returnValue={(response) => setData({ ...data, quotaHolder: response })}
                  />
                  <RadioButton
                    label="Não"
                    name="register-studant"
                    returnValue={(response) => setData({ ...data, quotaHolder: response })}
                  />
                </div>

                <Input
                  label="Gênero"
                  placeholder="Selecione o gênero"
                  type="select"
                  options={gender}
                  returnValue={(response) => setData({ ...data, gender: response })}
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
                  returnValue={(response) => setData({ ...data, password: response })}
                  mesage={data.password !== checkPassword ? "Senhas não coincidem." : ""}
                />
                <Input
                  label="Confirme a senha"
                  placeholder="Informe a senha"
                  type="password"
                  required={true}
                  returnValue={(response) => setCheckPassword(response)}
                  mesage={data.password !== checkPassword ? "Senhas não coincidem." : ""}
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

export default RegisterMonitor;
