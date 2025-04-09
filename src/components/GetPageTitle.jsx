import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const GetPageTitle = () => {
  const location = useLocation();
  const { hash, pathname, search } = location;

  const SITE_NAME = 'Occhialy';

  useEffect(() => {
    // Logica per cambiare il titolo dinamicamente
    if (hash) {
      document.title = `${SITE_NAME} - ${hash.replace('#', '')}`;
    } else if (pathname === '/collection') {
      document.title = `${SITE_NAME} - Collezione`;
    } else if (pathname === '/about') {
      document.title = `${SITE_NAME} - About`;
    } else if (pathname === '/contact') {
      document.title = `${SITE_NAME} - Contatti`;
    } else {
      document.title = SITE_NAME;
    }
  }, [hash, pathname, search]);

  return null;
};

export default GetPageTitle;