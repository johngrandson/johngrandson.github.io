import { Outlet } from 'react-router-dom';

import Footer from '../sections/Footer';

function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
