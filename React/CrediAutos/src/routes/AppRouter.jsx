import { createBrowserRouter } from "react-router-dom";
import { HomePages } from "../pages";
import { PoliticaCookiesPages } from "../pages";
import ScrollToTop from "../components/ScrollToTop";

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
        path: '/politica-cookies',
        element: (
            <>
                <ScrollToTop />
                <PoliticaCookiesPages />
            </>
        ),
    },
]);