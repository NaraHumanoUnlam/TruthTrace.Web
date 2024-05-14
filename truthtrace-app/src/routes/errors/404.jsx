import React from 'react';
import './errors.css';
import url from '../../assets/images/undraw_Taken.png';
const Error404 = () => {
    return (
        <div class="error-container">
            <img src={url} alt="404" class="error-image" />
            <div class="error-code">404</div>
            <div class="error-message">Página no encontrada</div>
            <a href="/" class="home-link">Volver al inicio</a>
        </div>
    );
};

export default Error404;