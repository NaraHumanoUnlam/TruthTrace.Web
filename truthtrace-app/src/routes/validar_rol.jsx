import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const Validar = ( {src} ) => (
  <div className='bg_validar'>
    <div className='validar'>
      <a href='#home' className='logo' >
        <img src={src} alt="logo"  />
      </a>
      <h1>Bienvenido</h1>
      <h2>¿Cuál es tu rol?</h2>
      <Link to="/TruthTrace.Web/login/empresa" className='button-empresa'>Empresa</Link>
      <Link to="/TruthTrace.Web/login/transportista" className='button-usuario'>Transportista</Link>
    </div>
  </div>
);

export default Validar;