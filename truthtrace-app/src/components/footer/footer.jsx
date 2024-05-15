import React from 'react';
import './footer.css';

const Footer = ({ src }) => (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <a className="footer-logo" href="#">
            <img src={src} alt="Logo" />
          </a>
        </div>
        <div className="footer-section">
          <p className="footer-title">Enlaces</p>
          <ul className="footer-list">
            <li className="footer-item"><a href="#" className="footer-link">FAQ</a></li>
            <li className="footer-item"><a href="#" className="footer-link">Ayuda</a></li>
            <li className="footer-item"><a href="#" className="footer-link">Soporte</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <p className="footer-title">Legales</p>
          <ul className="footer-list">
            <li className="footer-item"><a href="#" className="footer-link">Terminos y condiciones</a></li>
            <li className="footer-item"><a href="#" className="footer-link">Privacidad</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <p className="footer-title">Redes Sociales</p>
          <ul className="footer-list">
            <li className="footer-item"><a href="https://www.instagram.com/truthtracearg/" className="footer-link">Instagram</a></li>
            <li className="footer-item"><a href="https://www.linkedin.com/company/truthtrace-arg" className="footer-link">Linkedin</a></li>
            <li className="footer-item"><a href="https://twitter.com/truthtracearg" className="footer-link">Twitter</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <p className="footer-title">Company</p>
          <ul className="footer-list">
            <li className="footer-item"><a href="#about" className="footer-link">Sobre Nosotros</a></li>
            <li className="footer-item"><a href="#contacto" className="footer-link">Contacto</a></li>
          </ul>
        </div>
    </div>
    <p> © TruthTrace Argentina - Todos los derechos reservados </p>
  </footer>
)

export default Footer;