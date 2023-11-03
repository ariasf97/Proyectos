
import { Link } from 'react-router-dom';
import '../assets/styles/FooterCA.css';

export function FooterCA() {
    return (
        <footer className='ca-footer'>
            <section className="ca-footer-content">
                <img src="src/assets/img/logo-1.0-(Blanco).webp" />
                <ul>
                    <li>
                        <h3>Nuestras Politicas</h3>
                        <a>Política de privacidad</a>
                        <a>Términos y Condiciones</a>

                        <Link to={`/politica-cookies`}>Política de cookies</Link>

                    </li>
                </ul>
            </section>
            <section className="bottom"><p>© 2023 Emergia Customer Care – Distribuidor autorizado.</p>

                <a href='mailto:proteccion.datos@emergiacc.com' target='_blank' rel='noopener noreferrer'>Darse de baja de la lista de envíos del SMS - proteccion.datos@emergiacc.com</a>
            </section>
        </footer>
    )
}
