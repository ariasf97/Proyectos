import '../../assets/styles/ConversionMessage.css';
import { ButtonAction } from '../Buttons/ButtonAction';
import logoImg from '../../assets/img/icono-1.0.webp'
import actionIMg from '../../assets/img/Chica-y-moto.webp'

export function ConversionMessage() {
    return (
        <section className="ca-conversionMessage"  >
            <article className='ca-conversionMessage-content-1'>
                <img
                    style={{ width: 'auto', height: '148px' }}
                    src={logoImg}
                    alt="CrediAutos - Logo"
                    className='ca-conversionMessage-logo'
                />
                <p><strong className='ca-strongBlue'>¡Conduce a tus sueños!</strong> ¿Has imaginado la libertad de recorrer las calles en tu propio <strong>auto o moto</strong>?
                    Ahora es el momento de hacerlo realidad con un crédito vehicular a medida <strong className='ca-strongBlue'>fácil y rápido.</strong>
                </p>
            </article>
            <br />
            <ButtonAction  />
            <article className='ca-conversionMessage-content-2'>
                <div>
                    <p>
                        ¡No esperes más para acelerar hacia tu fututo! Descubre hoy mismo cómo podemos convertir tus anhelos de <strong>Moto nueva </strong>
                        con un crédito vehicular a tu medida.<br /><br /> <strong className="ca-strongBlue">Fácil y Rapido</strong>
                    </p>
                    <ButtonAction />
                </div>
                <div>
                    <img 
                    className='ca-conversionMessage-img' 
                    src={actionIMg} 
                    alt="CrediAutos - Encuentra tu libertad sobre dos ruedas"
                    />
                </div>
            </article>
        </section>
    );
}
