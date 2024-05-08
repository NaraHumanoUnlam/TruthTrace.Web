import React from 'react';
import './header.css';
const Header = ({ src }: { src: string }) => (
    <header className="header">
        <nav className='menu'>
        <a href='#home' className="header__logo"><img src={src} alt="logo"  /></a>
            <ul className="header__menu">
                <li className="header__menu-item"><a href='#home'>Home</a></li>
                <li className="header__menu-item"><a href='#about'>Sobre nosotros</a></li>
                <li className="header__menu-item"><a href='#contact'>Contáctenos</a></li>
            </ul>
        </nav>
    </header>
)

export default Header;