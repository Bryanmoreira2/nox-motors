import { Link } from 'react-router-dom';
import { cx } from '../../utils/format';
import styles from './Logo.module.css';

interface LogoProps {
  size?: 'md' | 'lg';
}

export function Logo({ size = 'md' }: LogoProps) {
  return (
    <Link to="/" aria-label="Nox Motors — início" className={cx(styles.logo, styles[size])}>
      <span className={styles.bars}>
        <span className={styles.bar} />
        <span className={cx(styles.bar, styles.barFaded)} />
      </span>
      <span>nox</span>
      <span className={styles.tag}>MOTORS</span>
    </Link>
  );
}
