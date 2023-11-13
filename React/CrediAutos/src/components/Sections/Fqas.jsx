import '../../assets/styles/Fqa.css';
import fqasIMG from '../../assets/img/Persona-index.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';

export function Fqas(){
    return(
        <section className='ca-fqas'>
            <section className="ca-fqas-section-1">
            <img 
            width='auto'
            height='550px'
            src={fqasIMG} 
            alt="FQAS" />
            <article className="ca-fqas-content">
                <h2 className='subTitle-2'>¿Cómo funciona?</h2>
                <ul style={{listStyleType:'none'}}>
                    <li><FontAwesomeIcon icon={fa1} size="3x" style={{color: "#2e85e4",}} /> Elige que en qué vehículo estás interesado</li>
                    <li><FontAwesomeIcon icon={fa2} size="3x" style={{color: "#2e85e4",}}/> Llámanos o déjanos tu teléfono de contacto</li>
                    <li><FontAwesomeIcon icon={fa3} size="3x" style={{color: "#2e85e4",}}/> Un asesor se comunicara contigo para que juntos elegir el crédito que mejor se adapte a tus necesidades.</li>
                </ul>
            </article>
            </section>
            <article className="ca-fqas-message">
                <p>
                Además, nuestro proceso de solicitud es rápido y sencillo. No dejes pasar esta oportunidad, 
                ¡comienza tu viaje hoy mismo hacia la carretera de tus sueños! #ConduceTuFuturo
                </p>
                </article>  
        </section>
    )
}