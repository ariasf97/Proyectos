import { createBrowserRouter } from "react-router-dom";
import { HomePages } from "../pages";
import { PoliticaCookiesPages } from "../pages";

export const RoutesPath = createBrowserRouter([
    {
        path: "/",
        element: <HomePages />,
    },
    {
        path: "/politica-cookies",
        element: <PoliticaCookiesPages />,
    },
]);

