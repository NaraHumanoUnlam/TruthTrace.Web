import React from "react";
import imagen1 from "../../assets/images/group_meeting.svg";
import imagen2 from "../../assets/images/security_center.svg";
import "./about.css";

const About = () => (
    <div className="portada" id="about">

        <div className="background">
            <div className="box">
                <h1>¿Qué es <span>TruthTrace</span>?</h1>
                <p className="text-wrapper">Una innovadora solución diseñada para combatir el fraude en los<br />procesos logísticos.
                    Incorporando tecnologías de vanguardia como<br /><span>blockchain</span> y <span>reconocimiento facial.</span></p>
            </div>
            <div className="img">
                <img src={imagen1} alt="group meeting" />
            </div>
        </div>
        <div className="background">
            <div className="img"><img src={imagen2} alt="security" /></div>
            <div className="box">
                <h1>¿Cómo funciona?</h1>
                <p className="text-wrapper">
                    TruthTrace se basa en la tecnología blockchain para garantizar<br />
                    la integridad de los datos y la transparencia en los procesos logísticos.<br /><br />
                    El reconocimiento facial se utiliza para verificar la identidad de los<br />
                    conductores y garantizar que solo ellos puedan acceder a la carga.
                </p>
            </div>
        </div>
    </div>
)

export default About;
