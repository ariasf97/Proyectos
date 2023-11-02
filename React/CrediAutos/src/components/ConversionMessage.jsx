import '../assets/styles/ConversionMessage.css';
import { ButtonAction } from './ButtonAction';

export function ConversionMessage() {
    return (
        <section className="ca-conversionMessage">
            <article className='ca-conversionMessage-content-1'>
                <img className='ca-conversionMessage-logo' src="src/assets/img/icono-1.0.webp" alt="CrediAutos - Logo" />
                <p><strong className='ca-strongBlue'>¡Conduce a tus sueños!</strong> ¿Has imaginado la libertad de recorrer las calles en tu propio <strong>auto o moto</strong>?
                Ahora es el momento de hacerlo realidad con un crédito vehicular a medida <strong className='ca-strongBlue'>fácil y rápido.</strong>
                </p>
            </article>
            <ButtonAction/>
        <article className='ca-conversionMessage-content-2'>
            <div>
                <p>
                    ¡No esperes más para acelerar hacia tu fututo! Descubre hoy mismo cómo podemos convertir tus anhelos de <strong>Moto nueva</strong>
                    con un crédito vehicular a tu medida.<br/><br/> <center><strong className="ca-strongBlue">Fácil y Rapido</strong></center> 
                </p>
            <ButtonAction/>
            </div>
            <div>
            <img className='ca-conversionMessage-img' src="src/assets/img/Chica-y-moto.webp" alt="CrediAutos - Encuentra tu libertad sobre dos ruedas" />
            </div>
        </article>
        </section>
    );
}
