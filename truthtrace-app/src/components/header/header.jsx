import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

const Header = ({ src }) => (
    <header className="header" id='home'>
        <nav className='menu'>
        <a href='#home' className="header__logo"><img src={src} alt="logo"  /></a>
            <ul className="header__menu">
                <li className="header__menu-item"><Link to={`#home`}>Home</Link></li>
                <li className="header__menu-item"><Link to={`#about`}>Sobre nosotros</Link></li>
                <li className="header__menu-item"><Link to={`#contact`}>Sobre nosotros</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;