import type { ReactNode } from 'react';
import { cx } from '../../utils/format';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
  children: ReactNode;
  label?: string;
  className?: string;
}

/** Grade responsiva de cards: 4 colunas (≥900px), 2 (≥360px) ou 1. */
export function ProductGrid({ children, label, className }: ProductGridProps) {
  return (
    <ul aria-label={label} className={cx(styles.grid, className)}>
      {children}
    </ul>
  );
}
