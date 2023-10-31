import { createContext, useContext, useState, useEffect } from 'react';

const UtmSourceContext = createContext();

export const useUtmSource = () => {
    return useContext(UtmSourceContext);
};

export const UtmSourceProvider = ({ children }) => {
    const [utmSource, setUtmSource] = useState(null);

    useEffect(() => {
        // Obtener el valor de utm_source de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const source = urlParams.get('utm_source');
        if (source) {
            setUtmSource(source); 
        }
    }, []);

    return (
        <UtmSourceContext.Provider value={utmSource}>
            {children}
        </UtmSourceContext.Provider>
    );
};
