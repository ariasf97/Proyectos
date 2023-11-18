import { createBrowserRouter } from "react-router-dom";
import { HomePages } from "../pages";
import { PoliticaCookiesPages, PoliticaPrivacidadPages} from "../pages";
import ScrollToTop from "../components/ScrollToTop";
import { Gracias } from "../pages/Gracias";
import CookieBanner from "../components/CookiesPolicy";


export const RoutesPath = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <ScrollToTop />
                <CookieBanner/>
                <HomePages />
            </>
        ),
    },
    {
        path: '/Política-de-cookies',
        element: (
            <>
                <ScrollToTop />
                <CookieBanner/>
                <PoliticaCookiesPages />
            </>
        ),
    },
    {
        path: '/Política-de-Privacidad',
        element: (
            <>
                <ScrollToTop />
                <CookieBanner/>
                <PoliticaPrivacidadPages/>
            </>
        ),
    },
    {
        path: '/Gracias-por-su-registro',
        element: (
            <>
                <ScrollToTop />
                <CookieBanner/>
                <Gracias />
            </>
        ),
    },
]);