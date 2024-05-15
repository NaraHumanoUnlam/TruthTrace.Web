import React from 'react';
import Header from '../header/header';
import './help.css';

const Help = ({src}) => {
    return (
        <div className='container-help'>
            <Header  src={src}/>
            <h1>Ayuda</h1>
            <h2>¿En qué podemos ayudarte?</h2>
            <p>Si tienes alguna duda, por favor, ponte en contacto con nosotros.</p>
            <p>Correo:
                <a href="mailto: " >truthtrace@outlook.com</a>
            </p>
            <p>Teléfono:
                <a href="tel: ">(54) 911234-5678</a>
            </p>           
        </div>
    );
};
export default Help;