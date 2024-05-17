import React, { useState } from 'react';
import empresaLogo from '../../assets/images/empresa/logo.svg';
import usuarioLogo from '../../assets/images/usuario/logo.svg';
import empresaImg from '../../assets/images/people_collection.svg';
import './register.css';

const Register = ({ clase }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const logoSrc = clase === 'empresa' ? empresaLogo : usuarioLogo;
    const img = clase === 'empresa' ? empresaImg : empresaImg;

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='empresa'>
          <div className='container'>
            <h1>Bienvenido</h1>
            <form onSubmit={handleSubmit} className="form_login">
                <div className="form_group">
                  <label>Email:</label>
                  <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="form_group">
                  <label>Password:</label>
                  <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="form_group">
                  <input type="submit" value="Crear cuenta" />
                </div>
            </form>
          </div>
          <div className='desing'>
            <img src={img} alt="logo" />
          </div>
        </div>
    );
};

export default Register;