import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styles from './Layout.module.css';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.shell}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
