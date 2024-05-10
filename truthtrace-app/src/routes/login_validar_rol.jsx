import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => (
  <div>
    <h1>Bienvenido</h1>
    <h2>Roles</h2>
    <Link to="/login/empresa">Empresa</Link>
    <Link to="/login/transportista">Transportista</Link>
  </div>
);

export default Login;