import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../../utils/format';
import styles from './PillButton.module.css';

interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  /** `dark` sobre fundo da página; `black` dentro de painéis. */
  tone?: 'dark' | 'black';
}

/** Botão de filtro/opção em formato de pílula, com estado selecionado. */
export function PillButton({ active, tone = 'dark', className, ...rest }: PillButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cx(styles.pill, styles[tone], active && styles.active, className)}
      {...rest}
    />
  );
}
