import type { Condicao } from '../../data/motos';
import { cx } from '../../utils/format';
import styles from './Badge.module.css';

interface BadgeProps {
  cond: Condicao;
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ cond, size = 'sm', className }: BadgeProps) {
  return (
    <span className={cx(styles.badge, styles[size], styles[cond], className)}>
      {cond === 'nova' ? 'Nova' : 'Seminova'}
    </span>
  );
}
