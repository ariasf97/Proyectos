import { useLayoutEffect } from 'react';
import '../../assets/styles/Form.css';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';
import {UseUtmSource} from '../../hooks/UseUtmSource'
import { generarToken, realizarPeticionPost } from '../../services/api';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export function Form({isActive}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const toast = useToast();
    const navigate = useNavigate();
    const UTMS = UseUtmSource();
    const utmSource = UTMS.utmSource
    const utmMedium = UTMS.medium
    const utmCampaign = UTMS.Campaign
    console.log('source',utmSource,'medium',utmMedium,'cam',utmCampaign)

    const onSubmit = async (formData) => { 
        const token = await generarToken('rdflorez', 'pruebaetb');
        toast.promise(
            realizarPeticionPost(utmSource,utmMedium, utmCampaign, formData.telefono, formData.terminos, token),
            {
                success: (success) => {
                    console.log(success)
                    if (success.status == 200) {
                        navigate("/Gracias-por-su-registro")
                        return { title: 'Se han enviado con éxito los datos', description: 'Pronto un asesor se comunicará con usted.' };
                    }
                },
                error: (error) => {
                    if (error.response && error.response.status === 405) {
                        return { title: 'Error Registro Duplicado', description: 'El registro está duplicado. Por favor, verifique la información.' };
                    }
                    console.log(error)
                    return { title: 'Ha ocurrido un error', description: 'Intente de nuevo más tarde.' };

                },
                loading: { title: 'Se estan enviado los datos', description: 'Espere un momento, por favor.' },
            }
        );
    };

    useLayoutEffect(() => {
        if (errors.telefono) {
            const statusTelefono = errors.telefono.type === 'pattern'
            const messageError = statusTelefono ? 'info' : 'error'
            toast({
                title: messageError,
                status: messageError,
                description: statusTelefono ? 'El número de teléfono debe contener exactamente 10 dígitos numéricos y comenzar con "3".' : 'Recuerde que el campo de teléfono es requerido.',
                isClosable: true,
            });
        } if (errors.terminos) {
            toast({
                title: 'Advertencia',
                status: 'warning',
                description: 'Recuerde aceptar los términos de uso para continuar.',
                isClosable: true,
            });
        }
    }, [errors.telefono, errors.terminos]);

    return (
        <section className={`${isActive && 'ca-form'}` }>
            <h2 className='subTitle'>Deja tu número, nos pondremos en contacto en breve</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-container">
                    <input
                        type="tel"
                        {...register('telefono', {
                            required: true,
                            pattern: {
                                value: /^[3][0-9]{9}$/,
                            },
                        })}
                        maxLength={10}
                        name="telefono"
                        onInput={(e) => {
                            e.preventDefault();
                            const inputValue = e.target.value;
                            const onlyNumbers = inputValue.replace(/[^0-9]/g, '');
                            e.target.value = onlyNumbers;
                        }}
                        autoFocus={true}
                    />
                    <span>Ingrese su número de teléfono</span>
                </div>
                <input
                    type="checkbox"
                    {...register('terminos', {
                        required: true,
                    })}
                    name='terminos'
                />
                <label className='label'>Acepto los términos de uso. <a href="#">ver más aquí</a></label>
                <div className='ca-form-button'>
                    <button className='submit'>Quiero que me llames</button>
                </div>
            </form>
        </section>
    );
}
Form.propTypes = {
    isActive: PropTypes.bool,
};
Form.defaultProps = {
    isActive: true,
};