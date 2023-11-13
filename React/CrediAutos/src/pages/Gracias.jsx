import { Button } from '@chakra-ui/react'
import '../assets/styles/Gracias.css'
import { Link } from 'react-router-dom';

export const Gracias = () => {
    return (
        <section className='ca-gracias'>
            <article className="ca-gracias-content">
                <h2>¡Gracias por su registro!</h2>
                <p>
                    Pronto uno de nuestros asesores se comunicará con usted.</p>
                <Link to="/">
                    <Button
                        bgColor='var(--primary)'
                        color='var(--white)'
                    >
                        Volver a Crediautos
                    </Button>
                </Link>
            </article>
        </section>
    );
}