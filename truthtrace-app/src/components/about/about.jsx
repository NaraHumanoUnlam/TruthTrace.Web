import React from "react";
import imagen1 from "../../assets/images/undraw_delivery_truck_vt6p.svg";
import imagen2 from "../../assets/images/undraw_statistics_re_kox4.svg";
import "./about.css";

const About = () => (
    <div className="portada" id="about">
        <div class="custom-shape-divider-top-1715612101">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>
        <div className="background">
            <div className="box">
                <h1>¿Qué es <span>TruthTrace</span>?</h1>
                <p className="text-wrapper">Una innovadora solución diseñada para combatir el fraude en los<br />procesos logísticos.
                    Incorporando tecnologías de vanguardia como<br /><span>blockchain</span> y <span>reconocimiento facial.</span></p>
            </div>
           
            <div className="img">
                <img src={imagen2} alt="security" />
            </div>
        </div>
        <div className="background">
            <div className="img">
                <img src={imagen1} alt="group meeting"/>
            </div>
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
