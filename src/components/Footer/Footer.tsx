import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import styles from './Footer.module.css';

const LINKS = [
  { to: '/modelos', label: 'Modelos' },
  { to: '/financiamento', label: 'Financiamento' },
  { to: '/lojas', label: 'Lojas' },
  { to: '/contato', label: 'Contato' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Logo size="lg" />
        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className={styles.link}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.copy}>© 2026 Nox Motors. Todos os direitos reservados.</div>
    </footer>
  );
}
