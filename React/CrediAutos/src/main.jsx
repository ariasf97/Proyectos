import ReactDOM from 'react-dom/client'
import React from "react";
import App from './App.jsx'
import './index.css'
import { UtmSourceProvider } from './context/UtmSourceProvider.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
     <UtmSourceProvider>
        <App/>
    
    </UtmSourceProvider>
  </React.StrictMode>
);