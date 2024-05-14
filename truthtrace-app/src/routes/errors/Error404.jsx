import React from 'react';
import './errors.css';
import url from '../../assets/images/undraw_Taken.png';
const Error404 = () => {
    return (
        <div className="error-container">
            <img src={url} alt="404" className="error-image" />
            <div className="error-code">404</div>
            <div className="error-message">Página no encontrada</div>
            <a href="/" className="home-link">Volver al inicio</a>
        </div>
    );
};

export default Error404;