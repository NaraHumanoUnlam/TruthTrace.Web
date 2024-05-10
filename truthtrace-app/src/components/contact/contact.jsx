import React from "react";
import "./contact.css";

const Contact = () => (
    <div className="contact">
        <div className="interior">
            <p className="text-wrapper">Dejanos tu consulta en el siguiente recuadro</p>
            <input type="text" id="consulta" name="consulta" minlength="4" size="10" placeholder="Mensaje"/>
            <br/>
            <a className="btn" href="#">
                <div>Enviar</div>
            </a>
        </div>
    </div>
);

export default Contact;