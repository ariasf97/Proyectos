import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CSSReset, ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';

import { AppProvider } from './context/AppProvider.jsx';

// Adjust the path accordingly


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      {/* Configura el modo oscuro */}
      <CSSReset /> {/* Restablece los estilos CSS predeterminados de Chakra UI */}
      <AppProvider>
        <App />
      </AppProvider>
    </ChakraProvider>
  </React.StrictMode>,
);