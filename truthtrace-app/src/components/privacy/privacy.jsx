import React from 'react';
import Header from '../header/header';
import './privacy.css';


const Privacy = ({src}) => {
  return (
    <div className="privacy-container">
      <Header  src={src}/>
      <div className='text-container'>
      <h1>Acerca de TruthTrace</h1>
      <p>
        TruthTrace es una plataforma de logística que utiliza tecnologías avanzadas, incluyendo blockchain y reconocimiento facial, para mejorar la eficiencia y la seguridad en el seguimiento de productos y envíos.
      </p>
      <p>
        TruthTrace da la bienvenida a los usuarios a su plataforma y los invita a participar en una comunidad comprometida con la excelencia tecnológica y la innovación en el campo de la logística y el seguimiento de productos.
      </p>
      <h2>Términos de Privacidad</h2>
      <p>
        La privacidad de nuestros usuarios es una prioridad fundamental en TruthTrace. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal de nuestros usuarios.
      </p>
      <h2>Información Recopilada</h2>
      <p>
        En TruthTrace, recopilamos información personal y de seguimiento necesaria para el funcionamiento adecuado de nuestra plataforma. Esto puede incluir, entre otros datos:
      </p>
      <ul>
        <li>Información de registro, como nombre, dirección de correo electrónico y contraseña.</li>
        <li>Información de envío, como direcciones de origen y destino, detalles del producto y fechas de entrega.</li>
        <li>Información biométrica, como imágenes faciales para fines de autenticación y seguridad.</li>
        <li>Información de pago, en caso de realizar transacciones a través de nuestra plataforma.</li>
      </ul>
      <h2>Uso de la Información</h2>
      <p>
        La información recopilada se utiliza para diversos fines, incluyendo:
      </p>
      <ul>
        <li>Facilitar la creación y gestión de cuentas de usuario.</li>
        <li>Optimizar la experiencia del usuario y la funcionalidad de la plataforma.</li>
        <li>Garantizar la seguridad y la integridad de nuestros servicios, utilizando tecnologías como blockchain y reconocimiento facial.</li>
        <li>Procesar transacciones y pagos de manera segura y eficiente.</li>
      </ul>
      <h2>Divulgación de Información</h2>
      <p>
        En TruthTrace, nos comprometemos a proteger la privacidad de nuestros usuarios y no compartiremos su información personal con terceros sin su consentimiento, excepto en los casos permitidos por ley o cuando sea necesario para proteger nuestros intereses legales.
      </p>
      <h2>Actualizaciones a esta Política</h2>
      <p>
        Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento.
      </p>
      </div>
    </div>
  );
};

export default Privacy;
