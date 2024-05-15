import React from 'react';
import Header from '../header/header';
import './term.css';

const Terms = ({src}) => {
    return (
        <div className='container-terms'>
            <Header src={src} />
            <h1>Términos y condiciones</h1>
            <p>Ultima actualización 14/05/2024</p>
            <p>Al acceder y utilizar el sitio web, aceptas los términos y condiciones de uso. Si no estás de acuerdo con estos términos, por favor no accedas ni utilices el sitio web.</p>
            <h2>1. Información del sitio web</h2>
            <p>En este sitio web, se proporciona información sobre productos y servicios de la empresa.</p>
            <h2>2. Propiedad intelectual e industrial</h2>
            <p>Los derechos de propiedad intelectual e industrial de todos los textos, imágenes y elementos de diseño son propiedad de la empresa.</p>
            <h2>3. Contenidos</h2>
            <p>La empresa se reserva el derecho a modificar el contenido del sitio web sin previo aviso y sin ningún tipo de limitación.</p>
            <h2>4. Responsabilidad</h2>
            <p>La empresa no se hace responsable de la información y contenidos almacenados en foros, redes sociales o cualesquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web del prestador.</p>
            <h2>5. Política de privacidad</h2>
            <p>La empresa garantiza la confidencialidad de los datos personales aportados por los usuarios y su tratamiento automatizado de acuerdo a la legislación sobre protección de datos de carácter personal.</p>
            <h2>6. Legislación aplicable</h2>
            <p>Estos términos y condiciones se rigen por la legislación argentina.</p>
        </div>
    );
};

export default Terms;