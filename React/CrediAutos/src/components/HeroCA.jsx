import { useState } from 'react';
import '../assets/styles/HeroCA.css';
import Form from './Form';
export function HeroCA() {
    const [valorInput, setValorInput] = useState('');

    const handleBlur = () => {
        console.log('El input ha perdido el foco');
        alert(valorInput)
    };
    return (
        <section className="ca-hero">
            <div className="empty-space"></div>
            <section className="ca-hero-content">
                <h1>¡Conduce a tus sueños!</h1>
                <img className='ca-hero-decoration' src="src/assets/img/deco-1.webp" alt="¡Conduce a tus sueños!" />
                <article>
                    <p>Financiamos tus sueños sobre ruedas, ofrecíendote tasas competitivas, plazos flexibles y un proceso <strong>fácil y rápido.</strong></p>
                </article>
                <section>aca va el formulario

                    <input
                        type="text"
                        value={valorInput}
                        onChange={(e) => setValorInput(e.target.value)}
                        onBlur={handleBlur} // Asocia el evento onBlur a la función handleBlur
                    />
                <Form title={"produco 1"} id={"2"}/>
                </section>
            </section>
        </section>
    );
}
