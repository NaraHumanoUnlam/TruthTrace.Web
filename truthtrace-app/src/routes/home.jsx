import React from 'react';
import './styles.css';
import Principles from '../components/principles/principles';
import About from '../components/about/about.jsx';
import Hero from '../components/hero/hero.jsx';
import Contact from '../components/contact/contact.jsx';
import Footer from '../components/footer/footer.jsx'
import logo from '../assets/images/logo.png';
import imagen from '../assets/images/logo.svg';


const Home = () => (
    <div>
        <Hero />
        <Principles /> 
        <About img={imagen} />
        <div className="contact_div">
            <Contact/>
        </div>
        <Footer src={logo} />
    </div>
)

export default Home;