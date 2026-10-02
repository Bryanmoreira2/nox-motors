import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PageHero } from '../../components/PageHero/PageHero';
import { PillButton } from '../../components/PillButton/PillButton';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductGrid } from '../../components/ProductGrid/ProductGrid';
import { Select } from '../../components/Select/Select';
import { MOTOS, type Categoria, type Condicao } from '../../data/motos';
import { cx } from '../../utils/format';
import styles from './Modelos.module.css';

type CatFiltro = 'todas' | Categoria;
type CondFiltro = 'todas' | Condicao;
type Ordem = 'rel' | 'asc' | 'desc';

const CATS: [CatFiltro, string][] = [
  ['todas', 'Todas'],
  ['street', 'Street'],
  ['naked', 'Naked'],
  ['adventure', 'Adventure'],
  ['scooter', 'Scooter'],
];

const CONDS: [CondFiltro, string][] = [
  ['todas', 'Todas'],
  ['nova', 'Novas'],
  ['seminova', 'Seminovas'],
];

function parseCat(value: string | null): CatFiltro {
  return CATS.some(([k]) => k === value) ? (value as CatFiltro) : 'todas';
}

export function Modelos() {
  const [params] = useSearchParams();
  const [cat, setCat] = useState<CatFiltro>(() => parseCat(params.get('cat')));
  const [cond, setCond] = useState<CondFiltro>('todas');
  const [ordem, setOrdem] = useState<Ordem>('rel');

  useEffect(() => {
    if (params.has('cat')) setCat(parseCat(params.get('cat')));
  }, [params]);

  const list = useMemo(() => {
    const filtered = MOTOS.filter(
      (m) => (cat === 'todas' || m.cat === cat) && (cond === 'todas' || m.cond === cond),
    );
    if (ordem === 'asc') return [...filtered].sort((a, b) => a.price - b.price);
    if (ordem === 'desc') return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [cat, cond, ordem]);

  const reset = () => {
    setCat('todas');
    setCond('todas');
  };

  return (
    <div className={styles.page}>
      <PageHero
        highlight="Nossos"
        title="modelos"
        crumb="Modelos"
        sub="Motos novas e seminovas revisadas, com garantia e financiamento na hora."
        bike="/assets/hero-bike-right.png"
      />

      <section aria-label="Catálogo" className={styles.catalog}>
        <div className={styles.toolbar}>
          <div role="group" aria-label="Categoria" className={styles.group}>
            {CATS.map(([k, label]) => (
              <PillButton key={k} active={cat === k} onClick={() => setCat(k)}>
                {label}
              </PillButton>
            ))}
          </div>
          <div className={styles.toolbarRight}>
            <div role="group" aria-label="Condição" className={styles.segmented}>
              {CONDS.map(([k, label]) => (
                <button
                  key={k}
                  type="button"
                  aria-pressed={cond === k}
                  onClick={() => setCond(k)}
                  className={cx(styles.segment, cond === k && styles.segmentActive)}
                >
                  {label}
                </button>
              ))}
            </div>
            <Select
              variant="pill"
              aria-label="Ordenar por"
              value={ordem}
              onChange={(e) => setOrdem(e.target.value as Ordem)}
            >
              <option value="rel">Relevância</option>
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </Select>
          </div>
        </div>

        <p aria-live="polite" className={styles.count}>
          {list.length === 1 ? '1 moto encontrada' : `${list.length} motos encontradas`}
        </p>

        {list.length > 0 ? (
          <ProductGrid label="Motos" className={styles.grid}>
            {list.map((m) => (
              <li key={m.id} id={m.id}>
                <ProductCard moto={m} detailed />
              </li>
            ))}
          </ProductGrid>
        ) : (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>Nenhuma moto encontrada</p>
            <p className={styles.emptyText}>Tente outra categoria ou condição.</p>
            <button type="button" onClick={reset} className={styles.resetBtn}>
              Limpar filtros
            </button>
          </div>
        )}

        <p className={styles.note}>
          Parcelas simuladas com 20% de entrada em 48x, taxa de 1,79% a.m. Sujeito à análise de crédito.
        </p>
      </section>

      <section aria-label="Financiamento" className={styles.promo}>
        <Link to="/financiamento" className={styles.promoLink}>
          <span className={styles.promoTitle}>Você escolhe o valor das parcelas</span>
          <span className={styles.promoBtn}>
            Simular agora <span aria-hidden="true" className={styles.arrow}>→</span>
          </span>
        </Link>
      </section>
    </div>
  );
}
