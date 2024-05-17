import React from 'react';
import empresaLogo from '../../assets/images/empresa/logo.svg';
import usuarioLogo from '../../assets/images/usuario/logo.svg';
import empresaImg from '../../assets/images/people_collection.svg';
import AlternateSignin from '../alternateSignin/alternateSignin';
import './login.css';

const Login = ({ clase }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await signIn(username, password);
  };
  const logoSrc = clase === 'empresa' ? empresaLogo : usuarioLogo;
  const img = clase === 'empresa' ? empresaImg : empresaImg;
  return (
  <div className={clase}>
    <div className='desing'>
      <img src={img} alt="logo" />
    </div>
    <div className='container'>
      <a href='/#home'>
        <img src={logoSrc} alt="logo" className='logo_login'/>
      </a>
      <h1>Bienvenido</h1>
      <form action="" className="form_login">
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Email" />
        </div>
        <div className="form_group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Contraseña" />
        </div>
        <div className="form_group">
          <input type="submit" value="Ingresar" />
        </div>
      </form>
      <div className='options_login'>
        <a href="#" className='forgot_pass'>Olvide mi contraseña</a>
        <p className='register'>¿No tienes una cuenta? <a href='/TruthTrace.Web/register'>Regístrate</a> </p>
      </div>
      <h2>O conectate con</h2>
      <AlternateSignin></AlternateSignin>
    </div>
  </div>

)};

export default Login;