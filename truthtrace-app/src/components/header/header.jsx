import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ src }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='header'>
            <nav className='menu'>
                <a href='#home' className="header__logo"><img src={src} alt="logo" /></a>
                <button className="hamburger" onClick={toggleMenu}>
                    <svg viewBox="0 0 100 80" width="30" height="30">
                        <rect width="100" height="20" fill='#6840E6'></rect>
                        <rect y="30" width="100" height="20" fill='#6840E6'></rect>
                        <rect y="60" width="100" height="20" fill='#6840E6'></rect>
                    </svg>
                </button>
                <ul className={`header__menu ${menuOpen ? 'open' : ''}`}>
                    <li className="header__menu-item"><a href='#home'>Home</a></li>
                    <li className="header__menu-item"><a href='#about'>Sobre nosotros</a></li>
                    <li className="header__menu-item"><a href='#valores'>Valores</a></li>
                    <li><Link to="/Login" className='button-actionheader'>Ingresar</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default React.memo(Header);