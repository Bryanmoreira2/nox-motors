import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Você está em" className={styles.crumbs}>
      {items.map((c, i) => (
        <Fragment key={c.label}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {c.to ? (
            <Link to={c.to} className={styles.link}>
              {c.label}
            </Link>
          ) : (
            <span className={styles.current}>{c.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
