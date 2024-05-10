import React from 'react';
import logo from '../assets/images/logo.svg';
import './login.css';
const Login = ({ clase }) => (
  <div className={clase}>
  <div className='desing'>
  <img src={logo} alt="logo" />
  </div>
    <div className='container'><a href='/#home'><img src={logo} alt="logo" /></a>
    <h1>Bienvenido</h1>
    <form action="">
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Contraseña" />
      <input type="submit" value="Ingresar" />
    </form>
        <h2>¿No tienes una cuenta?</h2>
        <a href='/register'>Regístrate</a>
    </div>
  </div>

);

export default Login;