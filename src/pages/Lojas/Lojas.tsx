import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../../components/PageHero/PageHero';
import { PillButton } from '../../components/PillButton/PillButton';
import { LOJAS } from '../../data/lojas';
import styles from './Lojas.module.css';

const CIDADES = ['todas', ...new Set(LOJAS.map((l) => l.city))];

export function Lojas() {
  const [city, setCity] = useState('todas');
  const list = LOJAS.filter((l) => city === 'todas' || l.city === city);

  return (
    <div className={styles.page}>
      <PageHero
        highlight="Encontre"
        title="a loja mais perto de você"
        crumb="Lojas"
        sub="Test ride, avaliação do seu usado e retirada da moto em qualquer unidade."
        bgPos="right center"
      />

      <section aria-label="Unidades" className={styles.section}>
        <div role="group" aria-label="Cidade" className={styles.filters}>
          {CIDADES.map((c) => (
            <PillButton key={c} active={city === c} onClick={() => setCity(c)}>
              {c === 'todas' ? 'Todas' : c}
            </PillButton>
          ))}
        </div>

        <p aria-live="polite" className={styles.count}>
          {list.length === 1 ? '1 unidade' : `${list.length} unidades`}
        </p>

        <ul className={styles.grid}>
          {list.map((l) => (
            <li key={l.id}>
              <article className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.city}>{l.city}</span>
                  <h3 className={styles.name}>{l.name}</h3>
                </div>
                <dl className={styles.details}>
                  <dt>Endereço</dt>
                  <dd>{l.addr}</dd>
                  <dt>Horário</dt>
                  <dd>{l.hours}</dd>
                  <dt>Telefone</dt>
                  <dd>{l.phone}</dd>
                </dl>
                <ul aria-label="Serviços" className={styles.services}>
                  {l.services.map((s) => (
                    <li key={s} className={styles.service}>
                      {s}
                    </li>
                  ))}
                </ul>
                <div className={styles.actions}>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.addr)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primary}
                  >
                    Como chegar
                  </a>
                  <a href={`tel:+55${l.phone.replace(/\D/g, '')}`} className={styles.secondary}>
                    Ligar
                  </a>
                  <Link to={`/contato?loja=${l.id}&assunto=testride`} className={styles.secondary}>
                    Agendar test ride
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
