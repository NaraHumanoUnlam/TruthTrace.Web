import React from 'react';
import './footer.css';

const Footer = ({ src }) => (
    <footer className="footer">
        <a href='#home' className="header_logo"><img src={src} alt="logo"/></a>
    </footer>
)

export default Footer;