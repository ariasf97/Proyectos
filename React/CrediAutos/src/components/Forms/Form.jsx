import '../../assets/styles/Form.css'
import { useForm } from "react-hook-form";

export function  Form(){
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })
    console.log(errors)
    return (
        <section className="ca-form">
            <h2 className='subTitle'>Deja tu número, nos pondremos en contacto en breve</h2>
            <form onSubmit={onSubmit} >
                <div className="input-container">
                    <input
                        type="tel"
                        {...register('telefono', {
                            required: true, // Asegura que el campo sea requerido
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'El número de teléfono debe contener exactamente 10 dígitos numéricos.',
                            },
                        })}
                        maxLength={10}
                        name="telefono"
                    />
                    <span>Ingrese su número de teléfono</span>
                </div>
                <input
                    type="checkbox"
                    {...register('terminos', {
                        required: true,
                    })}
                    id="terminos"
                    name='terminos'
                />
                <label htmlFor="terminos">Acepto los términos de uso. <a href="#">ver más aquí</a></label>
                <div className='ca-form-button'>
                    <button className='submit'>Quiero que me llames</button>
                </div>
            </form>
        </section>
    );
}
