import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PageHero } from '../../components/PageHero/PageHero';
import { PillButton } from '../../components/PillButton/PillButton';
import { Select } from '../../components/Select/Select';
import { DEFAULT_MOTO, MOTOS, findMoto } from '../../data/motos';
import { calcParcela, formatBRL } from '../../utils/format';
import styles from './Financiamento.module.css';

const PRAZOS = [12, 24, 36, 48, 60];

const PASSOS = [
  { n: '01', title: 'Simule', text: 'Escolha a moto, a entrada e o número de parcelas.' },
  { n: '02', title: 'Envie seus dados', text: 'Um consultor confirma a proposta com o banco parceiro.' },
  { n: '03', title: 'Retire sua moto', text: 'Aprovado, é só passar na loja mais próxima e acelerar.' },
];

export function Financiamento() {
  const [params] = useSearchParams();
  const [motoId, setMotoId] = useState(() => (findMoto(params.get('moto')) ?? DEFAULT_MOTO).id);
  const [pct, setPct] = useState(20);
  const [prazo, setPrazo] = useState(36);

  useEffect(() => {
    const m = findMoto(params.get('moto'));
    if (m) setMotoId(m.id);
  }, [params]);

  const moto = findMoto(motoId) ?? DEFAULT_MOTO;
  const entrada = (moto.price * pct) / 100;
  const financiado = moto.price - entrada;
  const parcela = calcParcela(financiado, prazo);

  return (
    <div className={styles.page}>
      <PageHero
        highlight="Financie"
        title="sua moto do seu jeito"
        crumb="Financiamento"
        sub="Simule em segundos. Você define a entrada e o número de parcelas."
        bg="/assets/fin-bg.png"
        bgPos="left center"
        bike="/assets/fin-bike.png"
      />

      <section aria-labelledby="sim-title" className={styles.section}>
        <h2 id="sim-title" className={styles.sectionTitle}>
          Simulador
        </h2>
        <div className={styles.simGrid}>
          <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
            <label className={styles.field}>
              <span className={styles.label}>Moto</span>
              <Select value={moto.id} onChange={(e) => setMotoId(e.target.value)}>
                {MOTOS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} — {formatBRL(m.price)}
                  </option>
                ))}
              </Select>
            </label>

            <label className={styles.field}>
              <span className={styles.rangeHead}>
                <span className={styles.label}>Entrada</span>
                <span className={styles.rangeValue}>
                  {formatBRL(entrada)} <span className={styles.rangePct}>· {pct}%</span>
                </span>
              </span>
              <input
                type="range"
                min={0}
                max={60}
                step={5}
                value={pct}
                onChange={(e) => setPct(Number(e.target.value))}
                aria-label="Percentual de entrada"
                className={styles.range}
              />
              <span className={styles.rangeScale}>
                <span>Sem entrada</span>
                <span>60%</span>
              </span>
            </label>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Parcelas</legend>
              <div className={styles.terms}>
                {PRAZOS.map((t) => (
                  <PillButton
                    key={t}
                    tone="black"
                    active={prazo === t}
                    onClick={() => setPrazo(t)}
                    className={styles.term}
                  >
                    {t}x
                  </PillButton>
                ))}
              </div>
            </fieldset>
          </form>

          <div aria-live="polite" className={styles.result}>
            <div className={styles.resultHead}>
              <span className={styles.resultLabel}>Parcela estimada</span>
              <span className={styles.resultValue}>
                {formatBRL(parcela)}
                <span className={styles.resultUnit}>/mês</span>
              </span>
              <span className={styles.resultMeta}>
                {prazo}x · {moto.name}
              </span>
            </div>
            <dl className={styles.summary}>
              <dt>Valor da moto</dt>
              <dd>{formatBRL(moto.price)}</dd>
              <dt>Entrada</dt>
              <dd>{formatBRL(entrada)}</dd>
              <dt>Valor financiado</dt>
              <dd>{formatBRL(financiado)}</dd>
              <dt>Taxa</dt>
              <dd>1,79% a.m.</dd>
              <dt>Total a prazo</dt>
              <dd>{formatBRL(entrada + parcela * prazo)}</dd>
            </dl>
            <Link to={`/contato?moto=${moto.id}&assunto=financiamento`} className={styles.resultCta}>
              Quero essa condição <span aria-hidden="true" className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>
        <p className={styles.note}>
          Simulação ilustrativa. Taxa, prazo e aprovação dependem de análise de crédito do banco parceiro.
        </p>
      </section>

      <section aria-labelledby="how-title" className={styles.how}>
        <h2 id="how-title" className={styles.sectionTitle}>
          Como funciona
        </h2>
        <ol className={styles.steps}>
          {PASSOS.map((p) => (
            <li key={p.n} className={styles.step}>
              <span className={styles.stepNum}>{p.n}</span>
              <span className={styles.stepTitle}>{p.title}</span>
              <span className={styles.stepText}>{p.text}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
