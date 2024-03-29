import { useContext } from 'react';
import { AppContext } from '../context/AppProvider';


export const useAppContext = () => {
  return useContext(AppContext);
};
