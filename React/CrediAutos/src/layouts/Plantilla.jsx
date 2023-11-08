
import PropTypes from 'prop-types';
import { HeaderCA } from '../components/Header/HeaderCA.jsx';
import { FooterCA } from '../components/Footer/FooterCA.jsx';

export const Plantilla = ({ children }) => {
    return (
        <>
            <HeaderCA />
            {children}
            <FooterCA />
        </>
    );
};

Plantilla.propTypes = {
    children: PropTypes.node.isRequired, // Verifica que "children" sea un nodo (elemento React) y sea requerido.
};
