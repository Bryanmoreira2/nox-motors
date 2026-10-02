import { Link } from 'react-router-dom';
import { Badge } from '../Badge/Badge';
import { motoImg, type Moto } from '../../data/motos';
import { cx, formatBRL, parcelaPadrao } from '../../utils/format';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  moto: Moto;
  /** Mostra selo, ano/km e parcela (usado no catálogo). */
  detailed?: boolean;
}

export function ProductCard({ moto, detailed = false }: ProductCardProps) {
  const href = `/modelos/${moto.id}`;

  return (
    <article className={cx(styles.card, detailed && styles.detailed)}>
      {detailed && <Badge cond={moto.cond} className={styles.badge} />}
      <Link to={href} tabIndex={-1} className={styles.media}>
        <img src={motoImg(moto.id)} alt={moto.name} />
      </Link>
      <h3 className={styles.name}>{moto.name}</h3>
      {detailed && <p className={styles.meta}>{moto.meta}</p>}
      <p className={styles.price}>{formatBRL(moto.price)}</p>
      {detailed && <p className={styles.parcela}>ou 48x de {formatBRL(parcelaPadrao(moto.price))}</p>}
      <Link to={href} aria-label={`Ver detalhes da ${moto.name}`} className={styles.cta}>
        Ver detalhes
      </Link>
    </article>
  );
}
