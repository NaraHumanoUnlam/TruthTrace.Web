import React from 'react';
import './styles.css';
import logo from '../assets/images/logo.png'; 
import imagen from '../assets/images/portada-about.svg';
import Header from '../components/header/header';
import Principles from '../components/principles/principles';
import About from '../components/about/about.jsx';

const Home = () => (
    <div className="main">
        <Header src={logo}/>
        <h1 className='slogan'>Seguridad en cada envío,<br/> confianza en cada entrega</h1>
        <h2 className='slogan2'>Descubre la diferencia con blockchain</h2>
       <Principles /> 
       <About img={imagen} />
    </div>
)

export default Home;