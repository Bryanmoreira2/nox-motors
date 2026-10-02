export interface Loja {
  id: string;
  name: string;
  /** Rótulo curto usado no formulário de contato. */
  short: string;
  city: string;
  addr: string;
  hours: string;
  phone: string;
  services: string[];
}

export const LOJAS: Loja[] = [
  {
    id: 'moema', name: 'Nox Moema', short: 'Nox Moema — SP', city: 'São Paulo',
    addr: 'Av. Ibirapuera, 2120 — Moema, São Paulo/SP', hours: 'Seg–Sex 9h–19h · Sáb 9h–14h',
    phone: '(11) 3456-7800', services: ['Novas', 'Seminovas', 'Oficina'],
  },
  {
    id: 'tatuape', name: 'Nox Tatuapé', short: 'Nox Tatuapé — SP', city: 'São Paulo',
    addr: 'R. Tuiuti, 1450 — Tatuapé, São Paulo/SP', hours: 'Seg–Sex 9h–19h · Sáb 9h–14h',
    phone: '(11) 3456-7811', services: ['Novas', 'Seminovas'],
  },
  {
    id: 'campinas', name: 'Nox Campinas', short: 'Nox Campinas', city: 'Campinas',
    addr: 'Av. Norte-Sul, 980 — Cambuí, Campinas/SP', hours: 'Seg–Sex 9h–18h · Sáb 9h–13h',
    phone: '(19) 3321-4500', services: ['Novas', 'Oficina'],
  },
  {
    id: 'barra', name: 'Nox Barra', short: 'Nox Barra — RJ', city: 'Rio de Janeiro',
    addr: 'Av. das Américas, 5000 — Barra da Tijuca, Rio de Janeiro/RJ', hours: 'Seg–Sex 9h–19h · Sáb 9h–15h',
    phone: '(21) 3987-2200', services: ['Novas', 'Seminovas', 'Oficina'],
  },
  {
    id: 'savassi', name: 'Nox Savassi', short: 'Nox Savassi — BH', city: 'Belo Horizonte',
    addr: 'Av. do Contorno, 6300 — Savassi, Belo Horizonte/MG', hours: 'Seg–Sex 9h–18h · Sáb 9h–13h',
    phone: '(31) 3274-9100', services: ['Novas', 'Seminovas'],
  },
  {
    id: 'batel', name: 'Nox Batel', short: 'Nox Batel — Curitiba', city: 'Curitiba',
    addr: 'Av. Sete de Setembro, 4200 — Batel, Curitiba/PR', hours: 'Seg–Sex 9h–18h · Sáb 9h–13h',
    phone: '(41) 3022-6700', services: ['Novas', 'Oficina'],
  },
];

export function findLoja(id: string | null | undefined): Loja | undefined {
  return LOJAS.find((l) => l.id === id);
}
