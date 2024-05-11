import React from "react";
import "./about.css";

const About = ({img}) => (
    <div className="portada" id="about">
        <div className="box">
            <h1>¿Qué es <span>TruthTrace</span>?</h1>
            <p className="text-wrapper">Una innovadora solución diseñada para combatir el fraude en los<br/>procesos logísticos. 
                Incorporando tecnologías de vanguardia como<br/><span>blockchain</span> y <span>reconocimiento facial.</span></p>
        </div>
        
        <div className="box">
            <h2>¿Cómo funciona?</h2>
            <p className="text-wrapper">
                TruthTrace se basa en la tecnología blockchain para garantizar<br/>
                la integridad de los datos y la transparencia en los procesos logísticos.<br/><br/>
                El reconocimiento facial se utiliza para verificar la identidad de los<br/>
                conductores y garantizar que solo ellos puedan acceder a la carga.
            </p>
        </div>
        <div className="box">
            <h2>Nuestras soluciones</h2>
            <p className="text-wrapper">
                Con nuestra plataforma, obtendrás acceso a una serie de<br/>
                herramientas diseñadas para garantizar la seguridad de tus envíos,<br/>
                asegurando tu carga de principio a fin.
            </p>
        </div>
    </div>
)

export default About;
