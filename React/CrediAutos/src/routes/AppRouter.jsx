import { createBrowserRouter } from "react-router-dom";
import { HomePages } from "../pages";
import { PoliticaCookiesPages, PoliticaPrivacidadPages} from "../pages";
import ScrollToTop from "../components/ScrollToTop";
import { Gracias } from "../pages/Gracias";


export const RoutesPath = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <ScrollToTop />
                <HomePages />
            </>
        ),
    },
    {
        path: '/Política-de-cookies',
        element: (
            <>
                <ScrollToTop />
                <PoliticaCookiesPages />
            </>
        ),
    },
    {
        path: '/Política-de-Privacidad',
        element: (
            <>
                <ScrollToTop />
                <PoliticaPrivacidadPages/>
            </>
        ),
    },
    {
        path: '/Gracias-por-su-registro',
        element: (
            <>
                <ScrollToTop />
                <Gracias />
            </>
        ),
    },
]);