import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

const Header = ({ src }) => (
    <header className="header" id='home'>
        <nav className='menu'>
            <a href='#home' className="header__logo"><img src={src} alt="logo"/></a>
            <ul className="header__menu">
                <li className="header__menu-item"><a href='#home'>Home</a></li>
                <li className="header__menu-item"><a href='#about'>Sobre nosotros</a></li>
                <li className="header__menu-item"><a href='#valores'>Valores</a></li>
                <li className="header__menu-item"><Link to="/Login">Ingresar</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;