import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { ChevronPattern } from '../ChevronPattern/ChevronPattern';
import styles from './PageHero.module.css';

interface PageHeroProps {
  highlight: string;
  title: string;
  crumb: string;
  sub?: string;
  bg?: string;
  bgPos?: string;
  bike?: string;
}

export function PageHero({
  highlight,
  title,
  crumb,
  sub,
  bg = '/assets/hero-bg.png',
  bgPos = 'center',
  bike,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <img src={bg} alt="" className={styles.bg} style={{ objectPosition: bgPos }} />
      <div className={styles.shade} />
      <svg aria-hidden="true" viewBox="0 0 1200 300" preserveAspectRatio="none" className={styles.lines}>
        <polygon
          points="520,250 1040,190 1040,222 520,290"
          fill="none"
          stroke="#75F25C"
          strokeWidth={3}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <ChevronPattern className={styles.chevrons} />
      {bike && <img src={bike} alt="" className={styles.bike} />}
      <div className={styles.content}>
        <Breadcrumb items={[{ label: 'Início', to: '/' }, { label: crumb }]} />
        <h1 className={styles.title}>
          <span className={styles.highlight}>{highlight}</span> {title}
        </h1>
        {sub && <p className={styles.sub}>{sub}</p>}
      </div>
    </section>
  );
}
