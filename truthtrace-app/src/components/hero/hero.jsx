import React from 'react';
import logo from '../../assets/images/logo.png';
import Header from '../header/header';
import './hero.css';

const Hero = () => (
    <div>
        <div className="main">
            <Header src={logo}/>
            <h1 className='slogan'>Seguridad en cada envío,<br/> confianza en cada entrega</h1>
            <h2 className='slogan2'>Descubre la diferencia <br/> con blockchain</h2>
        </div>
    </div>
)

export default Hero;