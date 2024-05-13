import React from "react";
import "./contact.css";

const Contact = () => (
    <div className="contact">
        <div className="interior">
            <p className="text-wrapper">Dejanos tu consulta en el siguiente recuadro</p>
            <input type="email" id="email" name="email" size="5" placeholder="Email de contacto"/>
            <input type="text" id="consulta" name="consulta" size="10" placeholder="Mensaje"/>

            <br/>
            <a className="btn" href="#">
                <div>Enviar</div>
            </a>
            <br/>
        </div>
    </div>
);

export default Contact;