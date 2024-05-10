import React from 'react';
import './styles.css';
import logo from '../assets/images/logo.png'; 
import Header from '../components/header/header';
import Principles from '../components/principles/principles';
import About from '../components/about/about.jsx';
import Card from '../components/card/card.jsx';
import { BsGlobe } from 'react-icons/bs';
import { IoIosPeople } from "react-icons/io";
import { PiShieldCheckFill } from "react-icons/pi";

const Home = () => (
    <div className="main">
        <Header src={logo}/>
        <h1 className='slogan'>Seguridad en cada envío,<br/> confianza en cada entrega</h1>
        <h2 className='slogan2'>Descubre la diferencia con blockchain</h2>
       <Principles /> 
       <About />
       <div className="cards-home">
            <Card icon={BsGlobe} title="Transparencia" text="Controla el ciclo de vida de tu producto en tu empresa o a lo largo de toda la cadena." />
            <Card icon={IoIosPeople} title="Accesibilidad" text="Nuestra plataforma está diseñada para ser accesible para empresas de todos los tamaños." />
            <Card icon={PiShieldCheckFill} title="Seguridad" text="Controla tu carga en cada viaje y revisa su progreso para una logística sin sorpresas." />
       </div>
    </div>
)

export default Home;