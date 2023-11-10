import { useEffect } from 'react';
import '../../assets/styles/Form.css';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';
import { generarToken, ejecutarLogica } from '../../services/api';

export function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const toast = useToast();

    const onSubmit = async (formData) => {
        try {
            await ejecutarLogica(formData);

            toast.promise(
                (async () => {
                    toast({
                        title: 'Enviando datos...',
                        status: 'info',
                        isClosable: true,
                    });

                    return 'Datos enviados con éxito';
                })(),
                {
                    loading: 'Enviando datos...',
                    success: {
                        title: 'Datos enviados con éxito',
                        description: '¡Se han enviado los datos correctamente!',
                    },
                    error: {
                        title: 'Error al enviar datos',
                        description: 'Hubo un problema al enviar los datos. Inténtalo de nuevo.',
                    },
                }
            );
        } catch (error) {
            handleSubmissionError(error);
        }
    };

    const handleSubmissionError = (error) => {
        console.error('Error al realizar la solicitud:', error.message);

        toast({
            title: 'Error al enviar datos',
            status: 'error',
            description: 'Hubo un problema al enviar los datos. Por favor, inténtalo de nuevo.',
            isClosable: true,
        });
    };

    useEffect(() => {
        generarToken('rdflorez', 'pruebaetb');
    }, []);

    useEffect(() => {
        if (errors.telefono) {
            if (errors.telefono.type === 'pattern') {
                toast({
                    status: 'warning',
                    description: 'El número de teléfono debe contener exactamente 10 dígitos numéricos y comenzar con "3".',
                    isClosable: true,
                });
            } else {
                toast({
                    status: 'error',
                    description: 'Recuerde que el campo de teléfono es requerido.',
                    isClosable: true,
                });
            }
        }

        if (errors.terminos) {
            toast({
                title: 'Recuerde aceptar los términos de uso para continuar.',
                status: 'warning',
                description: errors.terminos.message,
                isClosable: true,
            });
        }
    }, [errors.telefono, errors.terminos, toast]);

    return (
        <section className="ca-form">
            <h2 className='subTitle'>Deja tu número, nos pondremos en contacto en breve</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-container">
                    <input
                        type="tel"
                        {...register('telefono', {
                            required: true,
                            pattern: {
                                value: /^[3][0-9]{9}$/,
                                message: 'El número de teléfono debe contener exactamente 10 dígitos numéricos y comenzar con "3".',
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
