import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {UtmSourceContext} from './UtmSourceContext.jsx'
export const UtmSourceProvider = ({ children }) => {
    const [utmSource, setUtmSource] = useState(null);

    useEffect(() => {
        // Obtener el valor de utm_source de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const source = urlParams.get('utm_source');
        if (source) {
            setUtmSource(source); 
        }
    },[]);

    return (
        <UtmSourceContext.Provider value={utmSource}>
            {children}
        </UtmSourceContext.Provider>
    );
};

UtmSourceProvider.propTypes = {
    children: PropTypes.node.isRequired, // Verifica que "children" sea un nodo (elemento React) y sea requerido.
};
