import { Outlet } from 'react-router-dom';

import Footer from '../footer/footer';
import Header from '../header/header';
import MainVisuallyHidden from '../main-visually-hidden/main-visually-hidden';

function Layout() {
  return (
    <>
      <MainVisuallyHidden />
      <div className="wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
