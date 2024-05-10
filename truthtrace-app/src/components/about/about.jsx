import React from "react";
import "./about.css";

const About = ({img}) => (
    <div className="portada" id="about">
        <div className="box">
            <p className="text-wrapper">¿Qué es TruthTrace? </p> 
            <span className="span">
            Representa una innovadora solución diseñada para combatir el fraude en los procesos logísticos. Incorporando
                tecnologías de vanguardia como{" "}
                blockchain y reconocimiento facial.</span>
        </div><br />
        <img src={img} alt="Group-1" border="0" className="img-portada" /><br />
        <div className="box">
            <div className="text-wrapper">¿Cómo funciona?</div>
            <p className="span">
                TruthTrace se basa en la tecnología blockchain para garantizar la integridad de los datos y la transparencia
                en los procesos logísticos.
                El reconocimiento facial se utiliza para verificar la identidad de los conductores y garantizar que solo ellos
                puedan acceder a la carga.
            </p><br />
        </div>
        </div>
        )

        export default About;
