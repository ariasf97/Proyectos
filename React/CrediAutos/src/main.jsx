import ReactDOM from 'react-dom/client'
import React from "react";
import App from './App.jsx'
import './index.css'
import { UtmSourceProvider } from './context/UtmSourceProvider.jsx'
import './services/fontAwesone.js'
import { ChakraProvider } from '@chakra-ui/react'



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>  
        <UtmSourceProvider>
            <ChakraProvider>
            <App />
            </ChakraProvider> 
        </UtmSourceProvider>
    </React.StrictMode>
);