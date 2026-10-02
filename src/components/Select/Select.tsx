import type { SelectHTMLAttributes } from 'react';
import { cx } from '../../utils/format';
import styles from './Select.module.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** `field` para formulários; `pill` para barras de filtro. */
  variant?: 'field' | 'pill';
}

export function Select({ variant = 'field', className, children, ...rest }: SelectProps) {
  return (
    <span className={cx(styles.wrap, className)}>
      <select className={cx(styles.select, styles[variant])} {...rest}>
        {children}
      </select>
      <svg aria-hidden="true" width="10" height="6" viewBox="0 0 10 6" className={styles.icon}>
        <path d="M1 1l4 4 4-4" stroke="#75F25C" strokeWidth="1.6" fill="none" />
      </svg>
    </span>
  );
}
