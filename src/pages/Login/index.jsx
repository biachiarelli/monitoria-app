import imgLogo from '../../assets/img/logo.svg';
import imgLogin from '../../assets/img/login-img.svg';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Alert from '../../components/Alert';
import api from '../../api/api'
import { SaveUserData } from '../../redux/actions/userdata';
import { useDispatch, useSelector } from 'react-redux';

export default function Login({ setToken }) {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [typeMessage, setTypeMessage] = useState("");

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  // Redux call
  const dispatch = useDispatch()

  const handleSubmit = async e => {
    e.preventDefault()
    //navigate("/home");
    console.log(data)

    const response = await api.post('/login', data)

    // If the login is OK
    if (response.status === 200) {
      console.log(response.data)

      // Send to Redux
      dispatch(SaveUserData(response.data))
      navigate("/home");
    }
  }

  return (
    <div className='Login'>
      <div className="Login-wrapper container">
        <div className='Login-main'>
          <img className='Login-logo' src={imgLogo} alt="Logo recomendação de monitoria" />
          <h1 className='Login-title'>Entrar</h1>
          {alert && <Alert type={typeMessage} message={messageAlert} />}
          <form className='Login-form' onSubmit={handleSubmit}>
            <Input
              label="E-mail"
              placeholder="Informe o e-mail cadastrado"
              type="email"
              required={true}
              returnValue={e => setData({ ...data, email: e })}
            />
            <div className='Login-input-link'>
              <Input
                label="Senha"
                placeholder="Informe a senha cadastrada"
                type="password"
                required={true}
                returnValue={e => setData({ ...data, password: e })}
              />
              <span className='Login-link'>Esqueci minha senha</span>
            </div>

            <Button type="submit" label="Entrar" buttonStyle="primary" />
          </form>
          <div className="Login-footer">
            <div className="Login-text-line"><hr />Primeiro acesso?<hr /></div>
            <div className="Login-buttons">
              <Button label="Sou aluno" buttonStyle="primary" onClick={() => navigate("/cadastro-aluno")} />
              <Button label="Sou monitor" buttonStyle="secondary" onClick={() => navigate("/cadastro-monitor")} />
            </div>
          </div>
        </div>
        <div className='Login-img'>
          <img src={imgLogin} alt="Ilustração de login" />
        </div>
      </div>
    </div>
  );
};
