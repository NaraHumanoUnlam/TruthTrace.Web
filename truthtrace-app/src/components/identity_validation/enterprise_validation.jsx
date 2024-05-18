import React, { useState } from 'react';
import './validation.css';
import '../login/login.css';
import empresaLogo from '../../assets/images/empresa/logo.svg';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import empresaImg from '../../assets/images/people_collection.svg';
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const EnterpriseValidation = () => {
  const [razonSocial, setRazonSocial] = useState('');
  const [cuit, setCuit] = useState('');
  const [open, setOpen] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://tu-api-endpoint.com/validar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ razonSocial, cuit }),
      });

      const result = await response.json();

      if (result.valid) {
        setValidationMessage('¡Datos validados!');
        setIsValid(true);
      } else {
        setValidationMessage('Datos inválidos');
        setIsValid(false);
      }
    } catch (error) {
      setValidationMessage('Error de validación');
      setIsValid(false);
    }

    setValidationMessage('¡Datos validados!');
    setIsValid(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (isValid) {
        navigate('/TruthTrace.Web/register');
      }  
  };

  return (
    <div className='empresa'>
        <div className='container'>
            <a href='/#home'>
              <img src={empresaLogo} alt="logo" className='logo_login'/>
            </a>
            <form onSubmit={handleSubmit} className='form_login'>
            <div className='form_group'>
            <label>Razón Social:</label>
                <input
                type="text"
                value={razonSocial}
                onChange={(e) => setRazonSocial(e.target.value)}
                required
                />
            </div>
            <div className='form_group'>
            <label>CUIT:</label>
                <input
                type="text"
                value={cuit}
                onChange={(e) => setCuit(e.target.value)}
                required
                />
            </div>
            <div className="form_group">
                <input type="submit" value="Validar"/>
            </div>
            </form>
            
            <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <div style={{ textAlign: 'center', marginTop: 20 }}>
                {isValid ? (
                    <FaCheckCircle size={50} color="green" />
                ) : (
                    <FaRegCircleXmark size={50} color="red" />
                )}
                </div>
                <DialogContentText>
                {validationMessage}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" className='button'>
                {isValid ? 'Continuar' : 'Cerrar'}
                </Button>
            </DialogActions>
            </Dialog>
        </div>
        <div className='desing'>
            <img src={empresaImg} alt="logo" />
        </div>
    </div>
  );
}

export default EnterpriseValidation;