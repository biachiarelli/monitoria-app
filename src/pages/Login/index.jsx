import imgLogo from '../../assets/img/logo.svg';
import imgLogin from '../../assets/img/login-img.svg';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='Login'>
      <div className="Login-wrapper container">
        <div className='Login-main'>
          <img className='Login-logo' src={imgLogo} alt="Logo recomendação de monitoria" />
          <h1 className='Login-title'>Entrar</h1>
          <form className='Login-form'>
            <Input
              label="Matrícula"
              placeholder="Informe a sua matrícula da UnB"
              type="text"
              required={true}
              />
              <div className='Login-input-link'>
              <Input
                label="Senha"
                placeholder="Informe a senha cadastrada"
                type="password"
                required={true}
                />
                <span className='Login-link'>Esqueci minha senha</span>
              </div>
              
              <Button type="submit" label="Entrar" buttonStyle="primary" onClick={() => navigate("/home")} />
          </form>
          <div className="Login-footer">
            <div className="Login-text-line"><hr />Primeiro acesso?<hr /></div>
            <div className="Login-buttons">
              <Button label="Sou aluno"  buttonStyle="primary" onClick={() => navigate("/cadastro-aluno")} />
              <Button label="Sou monitor" buttonStyle="secondary" onClick={() => navigate("/cadastro-aluno")}/>
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
  
  export default Login;
  