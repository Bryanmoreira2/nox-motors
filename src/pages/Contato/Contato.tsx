import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PageHero } from '../../components/PageHero/PageHero';
import { PillButton } from '../../components/PillButton/PillButton';
import { Select } from '../../components/Select/Select';
import { MOTOS, findMoto } from '../../data/motos';
import { LOJAS, findLoja } from '../../data/lojas';
import { cx } from '../../utils/format';
import styles from './Contato.module.css';

type Assunto = 'comprar' | 'financiamento' | 'testride' | 'outro';

const ASSUNTOS: [Assunto, string][] = [
  ['comprar', 'Comprar moto'],
  ['financiamento', 'Financiamento'],
  ['testride', 'Test ride'],
  ['outro', 'Outro'],
];

interface FormData {
  nome: string;
  tel: string;
  email: string;
  moto: string;
  loja: string;
  msg: string;
}

const EMPTY_FORM: FormData = { nome: '', tel: '', email: '', moto: '', loja: '', msg: '' };

const telValido = (tel: string) => tel.replace(/\D/g, '').length >= 10;

export function Contato() {
  const [params] = useSearchParams();
  const [assunto, setAssunto] = useState<Assunto>('comprar');
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [tried, setTried] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const a = params.get('assunto');
    if (a === 'financiamento' || a === 'testride') setAssunto(a);
    setForm((f) => ({
      ...f,
      moto: findMoto(params.get('moto'))?.id ?? '',
      loja: findLoja(params.get('loja'))?.id ?? '',
    }));
  }, [params]);

  const bind = (key: keyof FormData) => ({
    value: form[key],
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value })),
  });

  const nomeErro = tried && !form.nome.trim();
  const telErro = tried && !telValido(form.tel);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (form.nome.trim() && telValido(form.tel)) {
      setSent(true);
      setTried(false);
    } else {
      setTried(true);
    }
  };

  const enviarOutra = () => {
    setSent(false);
    setForm((f) => ({ ...f, msg: '' }));
  };

  return (
    <div className={styles.page}>
      <PageHero
        highlight="Fale"
        title="com a Nox Motors"
        crumb="Contato"
        sub="Tire dúvidas, agende um test ride ou peça sua proposta. Respondemos em até 1 dia útil."
        bg="/assets/fin-bg.png"
        bgPos="left center"
      />

      <section aria-label="Formulário de contato" className={styles.section}>
        <div className={styles.panel}>
          {sent ? (
            <div role="status" className={styles.success}>
              <span aria-hidden="true" className={styles.check}>
                <svg width="20" height="16" viewBox="0 0 20 16">
                  <path d="M2 8l6 6L18 2" stroke="#000" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h2 className={styles.successTitle}>
                Recebemos sua mensagem, <span className={styles.accent}>{form.nome.trim().split(' ')[0]}</span>
              </h2>
              <p className={styles.successText}>
                Um consultor vai chamar você no WhatsApp {form.tel} em até 1 dia útil.
              </p>
              <div className={styles.successActions}>
                <Link to="/modelos" className={styles.successPrimary}>
                  Ver modelos
                </Link>
                <button type="button" onClick={enviarOutra} className={styles.ghost}>
                  Enviar outra
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className={styles.form}>
              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Assunto</legend>
                <div className={styles.topics}>
                  {ASSUNTOS.map(([k, label]) => (
                    <PillButton
                      key={k}
                      tone="black"
                      active={assunto === k}
                      onClick={() => setAssunto(k)}
                      className={styles.topic}
                    >
                      {label}
                    </PillButton>
                  ))}
                </div>
              </fieldset>

              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>Nome completo *</span>
                  <input
                    type="text"
                    autoComplete="name"
                    placeholder="Seu nome"
                    aria-invalid={nomeErro}
                    className={cx(styles.input, nomeErro && styles.inputError)}
                    {...bind('nome')}
                  />
                  {nomeErro && <span className={styles.error}>Informe seu nome.</span>}
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>WhatsApp *</span>
                  <input
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="(11) 99999-9999"
                    aria-invalid={telErro}
                    className={cx(styles.input, telErro && styles.inputError)}
                    {...bind('tel')}
                  />
                  {telErro && <span className={styles.error}>Informe um telefone com DDD.</span>}
                </label>
              </div>

              <label className={styles.field}>
                <span className={styles.label}>E-mail</span>
                <input type="email" autoComplete="email" placeholder="voce@email.com" className={styles.input} {...bind('email')} />
              </label>

              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>Moto de interesse</span>
                  <Select {...bind('moto')}>
                    <option value="">Ainda não sei</option>
                    {MOTOS.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.name}
                      </option>
                    ))}
                  </Select>
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>Loja preferida</span>
                  <Select {...bind('loja')}>
                    <option value="">Qualquer unidade</option>
                    {LOJAS.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.short}
                      </option>
                    ))}
                  </Select>
                </label>
              </div>

              <label className={styles.field}>
                <span className={styles.label}>Mensagem</span>
                <textarea
                  rows={4}
                  placeholder="Conte o que você procura"
                  className={cx(styles.input, styles.textarea)}
                  {...bind('msg')}
                />
              </label>

              <div className={styles.formFooter}>
                <span className={styles.consent}>Ao enviar, você concorda em ser contatado pela Nox Motors.</span>
                <button type="submit" className={styles.submit}>
                  Enviar mensagem
                </button>
              </div>
            </form>
          )}
        </div>

        <aside aria-label="Canais de atendimento" className={styles.aside}>
          <a href="https://wa.me/5511998765432" target="_blank" rel="noopener noreferrer" className={styles.whats}>
            <span className={styles.whatsLabel}>WhatsApp</span>
            <span className={styles.whatsNumber}>(11) 99876-5432</span>
            <span className={styles.whatsHint}>Resposta mais rápida →</span>
          </a>
          <a href="tel:08001234567" className={styles.channel}>
            <span className={styles.channelLabel}>Central de vendas</span>
            <span className={styles.channelValue}>0800 123 4567</span>
          </a>
          <a href="mailto:contato@noxmotors.com.br" className={styles.channel}>
            <span className={styles.channelLabel}>E-mail</span>
            <span className={styles.channelValue}>contato@noxmotors.com.br</span>
          </a>
          <div className={styles.channel}>
            <span className={styles.channelLabel}>Horário de atendimento</span>
            <span className={styles.hours}>Seg–Sex 9h–19h · Sáb 9h–14h</span>
            <Link to="/lojas" className={styles.channelLink}>
              Ver endereços das lojas →
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}
