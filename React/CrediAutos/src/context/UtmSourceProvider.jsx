import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {UtmSourceContext} from './UtmSourceContext.jsx'
export const UtmSourceProvider = ({ children }) => {
    const [utmSource, setUtmSource] = useState('sin_utm');
    const [Campaign, setCampaign] = useState('sin_campaign');
    const [medium, setMedium] = useState('sin_medium');
    const [gclid, setGclid] = useState('N/A')


    useEffect(() => {
        // Obtener el valor de utm de la URL
        const urlParams = new URLSearchParams(window.location.search)
        const utmSource = urlParams.get('utm_source')
        const utmCampaign = urlParams.get('utm_campaign')
        const utmMedium = urlParams.get('utm_medium')
        const utmGclid = urlParams.get('gclid')


        //cambio de estado
        utmSource ? setUtmSource(utmSource) : setUtmSource('sin_utm');
        utmCampaign ? setCampaign(utmCampaign) : setCampaign('sin_campaign');
        utmMedium ? setMedium(utmMedium) : setMedium('sin_medium');
        utmGclid ? setGclid(utmGclid) : setGclid('N/A')

        
    },[]);

    return (
        <UtmSourceContext.Provider value={{utmSource, Campaign, medium, gclid }}>
            {children}
        </UtmSourceContext.Provider>
    );
};

UtmSourceProvider.propTypes = {
    children: PropTypes.node.isRequired, // Verifica que "children" sea un nodo (elemento React) y sea requerido.
};
