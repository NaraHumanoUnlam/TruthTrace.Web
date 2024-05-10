import React from 'react';
import './styles.css';
import imagen from '../assets/images/portada-about.svg';
import Principles from '../components/principles/principles';
import About from '../components/about/about.jsx';
import Hero from '../components/hero/hero.jsx';

const Home = () => (
    <div>
        <Hero />
        <Principles /> 
        <About img={imagen} />
    </div>
)

export default Home;