import { useEffect, useState, useRef } from 'react';
import Cookies from 'js-cookie';
import { Image, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import galleta from '../assets/img/galleta.webp'

const CookieBanner = () => {
    const [isOpen, setIsOpen] = useState(false);
    const leastDestructiveRef = useRef(null);

    const hasCookiesAccepted = Cookies.get('cookiesAccepted') === 'true';
    const hasBannerShown = localStorage.getItem('cookieBannerShown') === 'true';

    useEffect(() => {
        if (!hasCookiesAccepted && !hasBannerShown) {
            setIsOpen(true);
        } else if (hasCookiesAccepted) {
            loadGTMScript();
        }
    }, []);

    const loadGTMScript = () => {
        const consentStatus = Cookies.get('cookiesAccepted');
        if (consentStatus === 'true') {
            // Código del script de GTM
            const script = document.createElement('script');
            script.innerHTML = `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5SQND6H');
            `;
            document.head.appendChild(script);

            const noscript = document.createElement('noscript');
            noscript.innerHTML = `
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SQND6H"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `;
            document.body.appendChild(noscript);
        } else {
            console.log('El usuario no ha aceptado las cookies. No se cargará GTM.');
        }
    };

    const onClose = (valor) => {
        setIsOpen(false);

        if (valor === 'false') {
            Cookies.set('cookiesAccepted', 'false', { expires: 365 });
            localStorage.setItem('cookieBannerShown', 'true');
            console.log('El usuario ha rechazado las cookies. No se cargará GTM.');
        } else if (valor === 'true') {
            Cookies.set('cookiesAccepted', 'true', { expires: 365 });
            localStorage.setItem('cookieBannerShown', 'true');
            loadGTMScript();
        }
    };

    return (
        <AlertDialog
            isCentered
            isOpen={isOpen}
            onClose={() => onClose('false')}
            closeOnOverlayClick={false}
            closeOnEsc={false}
            leastDestructiveRef={leastDestructiveRef}
        >
            <AlertDialogOverlay>
                <AlertDialogContent  pt={10} pb={10} pl={2} pr={2} maxW='lg' borderRadius='12px'>
                    <AlertDialogHeader textAlign='center' fontSize="1.6rem" fontWeight="bold" color='var(--primary)'>
                        <Image
                            mx='auto' 
                            borderRadius='full'
                            boxSize='150px'
                            src={galleta}
                            alt='Dan Abramov'
                        />
                        Aceptar Cookies
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        Este sitio web utiliza cookies para ofrecerte la mejor experiencia posible. Las cookies son pequeños archivos de datos que nos ayudan a entender cómo interactúas con nuestro sitio y a mejorar tu navegación. Al hacer clic en Aceptar, estás dando tu consentimiento para el uso de todas las cookies. Si deseas obtener más información, visita nuestra
                        <Link to={`/Política-de-cookies`} style={{color: 'var(--primary)'}}> Política de Cookies</Link>.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={leastDestructiveRef} colorScheme="facebook" onClick={() => onClose('true')} ml={3}>
                            Aceptar
                        </Button>
                        <Button onClick={() => onClose('false')} size='sm' ml={3} color="#3f454f78">
                            Rechazar
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

export default CookieBanner;
