
import '../../assets/styles/HeroCA.css';
import { Form } from '../Forms/Form';
import Deco from '../../assets/img/deco-1.webp'
export function HeroCA() {
    return (
        <section className="ca-hero">
            <div className="empty-space"></div>
            <section className="ca-hero-content">
                <h1 id='formu'>¡Conduce a tus sueños!</h1>
                <img
                    width='25vw'
                    height='auto'
                    className='ca-hero-decoration' src={Deco}
                    alt="¡Conduce a tus sueños!" />
                <article>
                    <p>Financiamos tus sueños sobre ruedas, ofreciéndote tasas competitivas, plazos flexibles y un proceso<strong> fácil y rápido.</strong></p>
                </article>
                <section>
                    <Form />
                </section>
            </section>
        </section>
    );
}
