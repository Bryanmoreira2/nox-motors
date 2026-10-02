import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { cx } from '../../utils/format';
import styles from './Header.module.css';

const LINKS = [
  { to: '/', label: 'Início', end: true },
  { to: '/modelos', label: 'Modelos' },
  { to: '/financiamento', label: 'Financiamento' },
  { to: '/lojas', label: 'Lojas' },
  { to: '/contato', label: 'Contato' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = (base: string) => ({ isActive }: { isActive: boolean }) =>
    cx(base, isActive && styles.active);

  return (
    <header className={styles.header}>
      <nav aria-label="Principal" className={styles.nav}>
        <Logo />
        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end} className={linkClass(styles.link)}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={styles.burger}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span className={styles.burgerAccent} />
          <span />
        </button>
      </nav>
      {open && (
        <ul className={styles.mobileMenu}>
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end} className={linkClass(styles.mobileLink)}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
