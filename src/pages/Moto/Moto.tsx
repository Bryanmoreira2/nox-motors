import { Link, useParams } from 'react-router-dom';
import { Badge } from '../../components/Badge/Badge';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { ChevronPattern } from '../../components/ChevronPattern/ChevronPattern';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductGrid } from '../../components/ProductGrid/ProductGrid';
import { CATEGORIA_LABEL, DEFAULT_MOTO, MOTOS, SPEC_KEYS, findMoto, motoImg } from '../../data/motos';
import { formatBRL, parcelaPadrao } from '../../utils/format';
import styles from './Moto.module.css';

export function Moto() {
  const { id } = useParams();
  const moto = findMoto(id) ?? DEFAULT_MOTO;
  const idx = MOTOS.indexOf(moto);
  const others = [1, 2, 3, 4].map((k) => MOTOS[(idx + k) % MOTOS.length]);

  return (
    <div className={styles.page}>
      <div className={styles.crumbs}>
        <Breadcrumb
          items={[
            { label: 'Início', to: '/' },
            { label: 'Modelos', to: '/modelos' },
            { label: moto.name },
          ]}
        />
      </div>

      <section aria-labelledby="moto-title" className={styles.main}>
        <div className={styles.visual}>
          <div aria-hidden="true" className={styles.visualCircle} />
          <ChevronPattern className={styles.visualChevrons} skip={2} />
          <img src={motoImg(moto.id)} alt={moto.name} className={styles.visualImg} />
        </div>

        <div className={styles.info}>
          <div className={styles.heading}>
            <div className={styles.tags}>
              <Badge cond={moto.cond} size="md" />
              <span className={styles.tag}>{CATEGORIA_LABEL[moto.cat]}</span>
            </div>
            <h1 id="moto-title" className={styles.title}>
              {moto.name}
            </h1>
            <p className={styles.meta}>{moto.meta}</p>
          </div>

          <div className={styles.pricing}>
            <span className={styles.price}>{formatBRL(moto.price)}</span>
            <span className={styles.parcela}>ou 48x de {formatBRL(parcelaPadrao(moto.price))}</span>
            <span className={styles.fine}>Com 20% de entrada, taxa de 1,79% a.m. Sujeito à análise de crédito.</span>
          </div>

          <p className={styles.desc}>{moto.desc}</p>

          <div className={styles.actions}>
            <Link to={`/contato?moto=${moto.id}`} className={styles.primary}>
              Tenho interesse
            </Link>
            <Link to={`/financiamento?moto=${moto.id}`} className={styles.secondary}>
              Simular financiamento
            </Link>
          </div>
          <Link to="/lojas" className={styles.storesLink}>
            Disponível para test ride nas lojas Nox →
          </Link>
        </div>
      </section>

      <section aria-labelledby="spec-title" className={styles.section}>
        <h2 id="spec-title" className={styles.sectionTitle}>
          Ficha técnica
        </h2>
        <dl className={styles.specs}>
          {SPEC_KEYS.map((k, i) => (
            <div key={k} className={styles.spec}>
              <dt className={styles.specKey}>{k}</dt>
              <dd className={styles.specValue}>{moto.specs[i]}</dd>
            </div>
          ))}
        </dl>
        <p className={styles.specNote}>Dados de referência do fabricante. Confirme a versão na loja.</p>
      </section>

      <section aria-labelledby="more-title" className={`${styles.section} ${styles.more}`}>
        <div className={styles.moreHead}>
          <h2 id="more-title" className={styles.sectionTitle}>
            Outros modelos
          </h2>
          <Link to="/modelos" className={styles.seeAll}>
            Ver todos →
          </Link>
        </div>
        <ProductGrid>
          {others.map((m) => (
            <li key={m.id}>
              <ProductCard moto={m} />
            </li>
          ))}
        </ProductGrid>
      </section>
    </div>
  );
}
