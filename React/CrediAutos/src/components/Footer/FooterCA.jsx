
import { Link } from 'react-router-dom';
import '../../assets/styles/FooterCA.css';
import logoBlanco from '../../assets/img/Logo-1.0-(Blanco).webp'
export function FooterCA() {
    return (
        <footer className='ca-footer'>
            <section className="ca-footer-content">
                <img src={logoBlanco} 
                alt='Crediautos - logo'
                style={{ width: 'auto',margin: '0 0 30px', height: '60px', display: 'block'}}
                />
                <ul>
                    <li>
                        <h3>Nuestras Politicas</h3>
                        <Link to={`/Política-de-cookies`}>Política de cookies</Link>
                        <Link to={`/Política-de-Privacidad`}>Política de Privacidad</Link>
                    </li>
                </ul>
            </section>
            <section className="bottom"><p>© 2023 Emergia Customer Care – Distribuidor autorizado.</p>
                <a href='mailto:proteccion.datos@emergiacc.com' target='_blank' rel='noopener noreferrer'>Darse de baja de la lista de envíos del SMS - proteccion.datos@emergiacc.com</a>
            </section>
        </footer>
    )
}



