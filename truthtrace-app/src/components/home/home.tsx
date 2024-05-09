import React from 'react';
import './home.css';
import Principles from '../principles/principles.tsx';
import logo from '../../assets/images/logo.png'; 
import Header from '../header/header.tsx';

const Home = () => (
    <div className="main">
        <Header src={logo}/>
        <h1 className='slogan'>Seguridad en cada envío,<br/> confianza en cada entrega</h1>
        <h2 className='slogan2'>Descubre la diferencia con blockchain</h2>
        <Principles/>
    </div>
)

export default Home;