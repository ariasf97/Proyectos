// AppContext.js
import { createContext, useState } from 'react';
export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {


  const [primary, setprimary] = useState('#000');


  return (
    <AppContext.Provider
      value={{

        primary,
        setprimary,
      }}>
      {children}
    </AppContext.Provider>
  );
};
