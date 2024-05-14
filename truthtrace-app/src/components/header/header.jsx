import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Archivo de estilos para el encabezado

const Header = ({ src }) => {

    return (
        <header className='header'>
            <nav className='menu'>
                <a href='#home' className="header__logo"><img src={src} alt="logo"/></a>
                <ul className="header__menu">
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
