import React from 'react';
import './principles.css';
import Card from '../card/card';
import { BsGlobe } from 'react-icons/bs';
import { IoIosPeople } from "react-icons/io";
import { PiShieldCheckFill } from "react-icons/pi";

const Principles = () => (
    <div className="principles" id='valores'>
        <div className="label">
                <h1>Nos preocupamos por tu <span>seguridad</span></h1>
                <h2>En TruthTrace nos dedicamos a proporcionar soluciones que brinden <br/> 
                <span>transparencia, seguridad y accesibilidad</span> en tus envíos.</h2>
        </div>
       <div className="cards-home">
            <Card icon={BsGlobe} title="Transparencia" text="Controla el ciclo de vida de tu producto en tu empresa o a lo largo de toda la cadena." />
            <Card icon={IoIosPeople} title="Accesibilidad" text="Nuestra plataforma está diseñada para ser accesible para todas las empresas." />
            <Card icon={PiShieldCheckFill} title="Seguridad" text="Controla tu carga en cada viaje y revisa su progreso para una logística sin sorpresas." />
       </div>
       <div class="custom-shape-divider-bottom-1715540864">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
    </div>
)

export default Principles;