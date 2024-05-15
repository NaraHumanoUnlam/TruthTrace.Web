import React from 'react';
import Header from '../header/header';
import './faq.css';

const FAQ = ({logo}) => {
    return (
        <div className='container-faq'>
            <Header src={logo}/>
            <h1>FAQ - Preguntas Frecuentes</h1>

            <div class="faq-section">
                <div class="faq-question">
                    1. ¿Qué es blockchain y cómo se aplica en la logística?
                </div>
                <div class="faq-answer">
                    <p>Blockchain es una tecnología de registro distribuido que garantiza la transparencia, seguridad y trazabilidad de las transacciones. En la logística, se utiliza para seguir y verificar el movimiento de mercancías, asegurando que los datos sobre envíos, entregas y cadenas de suministro sean inmutables y verificables por todas las partes involucradas.</p>
                </div>
            </div>

            <div class="faq-section">
                <div class="faq-question">
                    2. ¿Cuáles son los beneficios de usar blockchain en logística?
                </div>
                <div class="faq-answer">
                    <p>Transparencia: Todos los participantes pueden ver y verificar cada transacción.</p>
                    <p>Seguridad: Los datos son inmutables y están protegidos contra manipulaciones.</p>
                    <p>Trazabilidad: Permite rastrear la cadena de suministro completa desde el origen hasta el destino final.</p>
                    <p>Eficiencia: Reduce la necesidad de intermediarios y procesos manuales, acelerando las operaciones.</p>
                </div>
            </div>

            <div class="faq-section">
                <div class="faq-question">
                    3. ¿Cómo mejora la trazabilidad con blockchain?
                </div>
                <div class="faq-answer">
                    <p>Blockchain permite registrar cada paso del proceso logístico en un bloque seguro y verificable. Esto significa que se puede rastrear cada movimiento de un producto desde su origen hasta su destino final, identificando rápidamente cualquier problema o retraso.</p>
                </div>
            </div>

            <div class="faq-section">
                <div class="faq-question">
                    4. ¿Es seguro usar blockchain para la logística?
                </div>
                <div class="faq-answer">
                    <p>Sí, blockchain es extremadamente seguro debido a su naturaleza descentralizada y su mecanismo de consenso. Cada transacción es verificada por múltiples nodos antes de ser añadida a la cadena, lo que dificulta la manipulación o el fraude.</p>
                </div>
            </div>

            <div class="faq-section">
                <div class="faq-question">
                    5. ¿Qué costos están asociados con la implementación de blockchain en logística?
                </div>
                <div class="faq-answer">
                    <p>Los costos pueden variar según la complejidad de la implementación y el tamaño de la operación. Sin embargo, los beneficios a largo plazo, como la reducción de fraudes, la mejora de la eficiencia y la disminución de errores, generalmente superan los costos iniciales.</p>
                </div>
            </div>

            <div class="faq-section">
                <div class="faq-question">
                    6. ¿Cómo puede mi empresa empezar a usar blockchain en logística?
                </div>
                <div class="faq-answer">
                    <p>Para comenzar, es recomendable realizar una evaluación de las necesidades específicas de tu empresa y consultar con expertos en blockchain y logística. A partir de ahí, puedes desarrollar un plan de implementación, que puede incluir la integración de software blockchain y la capacitación de tu equipo.</p>
                </div>
            </div>

            <div class="faq-section">
                <div class="faq-question">
                    7. ¿Qué ejemplos de uso de blockchain en logística existen actualmente?
                </div>
                <div class="faq-answer">
                    <p>Algunos ejemplos incluyen:</p>
                    <ul>
                        <li><strong>Seguimiento de productos frescos:</strong> Para asegurar que se mantengan las condiciones adecuadas durante el transporte.</li>
                        <li><strong>Gestión de inventarios:</strong> Para mejorar la precisión y la eficiencia del seguimiento de existencias.</li>
                        <li><strong>Verificación de autenticidad:</strong> Para prevenir la falsificación de productos, especialmente en industrias como la farmacéutica y de lujo.</li>
                    </ul>
                </div>
            </div>

            <div class="faq-section">
                <div class="faq-question">
                    8. ¿Qué plataformas de blockchain son más utilizadas en logística?
                </div>
                <div class="faq-answer">
                    <p>Plataformas como Ethereum, Hyperledger Fabric y IBM Blockchain son comúnmente utilizadas debido a su robustez, flexibilidad y soporte comunitario. Estas plataformas permiten la creación de contratos inteligentes y aplicaciones personalizadas para satisfacer las necesidades específicas de la logística.</p>
                </div>
            </div>

            <div class="faq-section">
                <div class="faq-question">
                    9. ¿Cómo afecta blockchain a los intermediarios en la cadena de suministro?
                </div>
                <div class="faq-answer">
                    <p>Blockchain puede reducir la necesidad de intermediarios al proporcionar un registro transparente y confiable de transacciones directamente entre las partes involucradas. Esto no solo reduce costos, sino que también acelera los procesos y minimiza el riesgo de errores.</p>
                </div>
            </div>

            <div class="faq-section">
                <div class="faq-question">
                    10. ¿Qué desafíos existen al implementar blockchain en la logística?
                </div>
                <div class="faq-answer">
                    <ul>
                        <li><strong>Costos iniciales:</strong> La implementación puede requerir una inversión significativa en tecnología y capacitación.</li>
                        <li><strong>Interoperabilidad:</strong> Integrar blockchain con sistemas existentes puede ser complejo.</li>
                        <li><strong>Regulación:</strong> Las leyes y regulaciones aún están evolucionando, lo que puede crear incertidumbres.</li>
                        <li><strong>Adopción:</strong> Convencer a todos los participantes de la cadena de suministro para adoptar la tecnología puede ser un desafío.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FAQ;

