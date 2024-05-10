import React from 'react';
import { Link } from 'react-router-dom';
import src from '../assets/images/logo.svg';


const Validador = () => (
  <div className='validar'>
    <a href='#home' ><img src={src} alt="logo"  /></a>
    <h1>Bienvenido</h1>
    <h2>¿Cuál es tu rol?</h2>
    <Link to="/login/empresa" className='button-empresa'>Empresa</Link>
    <Link to="/login/transportista" className='button-usuario'>Transportista</Link>
  </div>
);

export default Validador;