import { useEffect } from 'react';
import initAOS from '../utils/aos';
import Header from './Header.js'


const Layout = ({ children }) => {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
