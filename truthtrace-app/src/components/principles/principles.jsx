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
            <Card icon={IoIosPeople} title="Accesibilidad" text="Nuestra plataforma está diseñada para ser accesible para empresas de todos los tamaños." />
            <Card icon={PiShieldCheckFill} title="Seguridad" text="Controla tu carga en cada viaje y revisa su progreso para una logística sin sorpresas." />
       </div>
    </div>
)

export default Principles;