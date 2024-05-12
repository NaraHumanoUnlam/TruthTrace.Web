import React from 'react';
import empresaLogo from '../../assets/images/empresa/logo.svg';
import usuarioLogo from '../../assets/images/usuario/logo.svg';
import empresaImg from '../../assets/images/empresa/person-computer-purple.svg';
import './login.css';

const Login = ({ clase }) => {
  const logoSrc = clase === 'empresa' ? empresaLogo : usuarioLogo;
  const img = clase === 'empresa' ? empresaImg : empresaImg;
  return (
  <div className={clase}>
    <div className='desing'>
      <img src={img} alt="logo" />
    </div>
    <div className='container'>
      <a href='/#home'><img src={logoSrc} alt="logo" /></a>
      <h1>Bienvenido</h1>
      <form action="" className='form_login'>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Contraseña" />
        <input type="submit" value="Ingresar" />
      </form>
          <h2>¿No tienes una cuenta?</h2>
          <a href='/register'>Regístrate</a>
    </div>
  </div>

)};

export default Login;