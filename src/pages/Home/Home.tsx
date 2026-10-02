import { Link } from 'react-router-dom';
import { ChevronPattern } from '../../components/ChevronPattern/ChevronPattern';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductGrid } from '../../components/ProductGrid/ProductGrid';
import { MOTOS } from '../../data/motos';
import styles from './Home.module.css';

const BRANDS = ['Honda', 'Yamaha', 'Kawasaki', 'Royal Enfield'];

const CATEGORIES = [
  { key: 'street', name: 'Street', img: '/assets/cat-street.png' },
  { key: 'naked', name: 'Naked', img: '/assets/cat-naked.png' },
  { key: 'adventure', name: 'Adventure', img: '/assets/cat-adventure.png' },
];

export function Home() {
  return (
    <>
      <section id="inicio" aria-labelledby="hero-title" className={styles.hero}>
        <img src="/assets/hero-bg.png" alt="" className={styles.heroBg} />
        <div className={styles.heroShade} />
        <div aria-hidden="true" className={styles.heroCircle} />
        <svg aria-hidden="true" viewBox="0 0 1200 450" preserveAspectRatio="none" className={styles.heroLines}>
          <polygon points="230,112 752,85 752,112 230,165" fill="none" stroke="#75F25C" strokeWidth={3} vectorEffect="non-scaling-stroke" />
          <polygon points="300,440 812,375 812,410 300,475" fill="none" stroke="#75F25C" strokeWidth={3} vectorEffect="non-scaling-stroke" />
        </svg>
        <ChevronPattern className={styles.heroChevrons} />
        <img src="/assets/hero-bike-left.png" alt="" className={`${styles.bike} ${styles.bikeLeft}`} />
        <img src="/assets/hero-bike-right.png" alt="" className={`${styles.bike} ${styles.bikeRight}`} />
        <div className={styles.heroTitleWrap}>
          <h1 id="hero-title" className={styles.heroTitle}>
            <span className={styles.accent}>Escolha hoje,</span> acelere imediatamente
          </h1>
        </div>
      </section>

      <section aria-label="Marcas parceiras" className={styles.brands}>
        <ul className={styles.brandList}>
          {BRANDS.map((b) => (
            <li key={b} className={styles.brand}>
              {b}
            </li>
          ))}
        </ul>
      </section>

      <section id="modelos" aria-label="Modelos" className={styles.models}>
        <ul aria-label="Categorias" className={styles.categories}>
          {CATEGORIES.map((c) => (
            <li key={c.key} className={styles.category}>
              <Link to={`/modelos?cat=${c.key}`} className={styles.catLink}>
                <img src={c.img} alt="" className={styles.catImg} />
                <span className={styles.catName}>{c.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <ProductGrid label="Motos disponíveis" className={styles.products}>
          {MOTOS.map((m) => (
            <li key={m.id}>
              <ProductCard moto={m} />
            </li>
          ))}
        </ProductGrid>
      </section>

      <section id="financiamento" aria-labelledby="fin-title" className={styles.fin}>
        <img src="/assets/fin-bg.png" alt="" className={styles.finBg} />
        <div className={styles.finShade} />
        <div aria-hidden="true" className={styles.checkerTop} />
        <div aria-hidden="true" className={styles.checkerBottom} />
        <img src="/assets/fin-bike.png" alt="" className={styles.finBike} />
        <div className={styles.finContent}>
          <h2 id="fin-title" className={styles.finTitle}>
            Finance sua moto, você escolhe o valor das parcelas
          </h2>
          <Link to="/financiamento" className={styles.finLink}>
            Simular parcelas <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
