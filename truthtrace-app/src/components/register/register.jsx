import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports.js';
import empresaLogo from '../../assets/images/empresa/logo.svg';
import usuarioLogo from '../../assets/images/usuario/logo.svg';
import empresaImg from '../../assets/images/people_collection.svg';
import './register.css';

Amplify.configure(awsExports);

const Register = ({ clase }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const logoSrc = clase === 'empresa' ? empresaLogo : usuarioLogo;
  const img = clase === 'empresa' ? empresaImg : empresaImg;

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email: username, // Asegúrate de que el email sea el nombre de usuario
        },
      });
      setSuccess('Registro exitoso. Por favor, verifica tu correo electrónico.');
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='empresa'>
      <div className='container'>
        <a href='/#home'>
          <img src={empresaLogo} alt="logo" className='logo_login'/>
        </a>
        <h1>Registrate</h1>
        <form onSubmit={handleSubmit} className="form_login">
          <div className="form_group">
            <label>Email:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form_group">
            <label>Contraseña:</label>
            <div className="password_wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button type="button" onClick={toggleShowPassword} className="password_toggle">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="form_group">
            <label>Repetir contraseña:</label>
            <div className="password_wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              <button type="button" onClick={toggleShowPassword} className="password_toggle">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          {error && <div className="error_message">{error}</div>}
          {success && <div className="success_message">{success}</div>}
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