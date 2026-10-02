export type Categoria = 'street' | 'naked' | 'adventure' | 'scooter';
export type Condicao = 'nova' | 'seminova';

export interface Moto {
  id: string;
  name: string;
  price: number;
  cat: Categoria;
  cond: Condicao;
  meta: string;
  desc: string;
  specs: string[];
}

export const CATEGORIA_LABEL: Record<Categoria, string> = {
  street: 'Street',
  naked: 'Naked',
  adventure: 'Adventure',
  scooter: 'Scooter',
};

export const SPEC_KEYS = ['Cilindrada', 'Potência', 'Torque', 'Câmbio', 'Tanque', 'Peso seco', 'Freios', 'Combustível'];

export const MOTOS: Moto[] = [
  {
    id: 'prod-1', name: 'Honda CG 160 Titan', price: 19490, cat: 'street', cond: 'nova', meta: '2026 · 0 km',
    desc: 'A street mais vendida do Brasil: econômica, confiável e pronta para o dia a dia na cidade.',
    specs: ['162,7 cc', '15,1 cv', '1,54 kgf.m', '5 marchas', '14 L', '128 kg', 'Disco / tambor CBS', 'Flex'],
  },
  {
    id: 'prod-2', name: 'Yamaha Fazer FZ25', price: 24990, cat: 'street', cond: 'nova', meta: '2026 · 0 km',
    desc: 'Motor 250 com torque de sobra, ergonomia confortável e freios ABS para rodar todos os dias.',
    specs: ['249 cc', '21,3 cv', '2,1 kgf.m', '5 marchas', '14 L', '153 kg', 'Disco com ABS', 'Flex'],
  },
  {
    id: 'prod-3', name: 'Honda CB 300F Twister', price: 25890, cat: 'naked', cond: 'seminova', meta: '2024 · 8.200 km',
    desc: 'Naked leve e ágil com câmbio de 6 marchas. Revisada, com laudo cautelar e garantia Nox.',
    specs: ['293,5 cc', '24,7 cv', '2,77 kgf.m', '6 marchas', '14,1 L', '145 kg', 'Disco com ABS', 'Flex'],
  },
  {
    id: 'prod-4', name: 'Royal Enfield Hunter 350', price: 22990, cat: 'street', cond: 'nova', meta: '2026 · 0 km',
    desc: 'Visual retrô, motor de torque cheio em baixa e acabamento premium para quem curte estilo.',
    specs: ['349 cc', '20,2 cv', '2,75 kgf.m', '5 marchas', '13 L', '181 kg', 'Disco duplo ABS', 'Gasolina'],
  },
  {
    id: 'prod-5', name: 'Yamaha MT-03', price: 33990, cat: 'naked', cond: 'seminova', meta: '2023 · 14.500 km',
    desc: 'Bicilíndrica de 42 cv com visual agressivo. Revisada, com laudo cautelar e garantia Nox.',
    specs: ['321 cc', '42 cv', '3,0 kgf.m', '6 marchas', '14 L', '168 kg', 'Disco com ABS', 'Gasolina'],
  },
  {
    id: 'prod-6', name: 'Kawasaki Z400', price: 36990, cat: 'naked', cond: 'nova', meta: '2026 · 0 km',
    desc: 'Motor bicilíndrico esportivo, embreagem deslizante e ciclística afiada para curvas.',
    specs: ['399 cc', '45 cv', '3,9 kgf.m', '6 marchas', '14 L', '167 kg', 'Disco com ABS', 'Gasolina'],
  },
  {
    id: 'prod-7', name: 'Honda Sahara 300', price: 29990, cat: 'adventure', cond: 'nova', meta: '2026 · 0 km',
    desc: 'Trail versátil para asfalto e terra, com suspensão de longo curso e posição de pilotagem alta.',
    specs: ['293,5 cc', '25 cv', '2,8 kgf.m', '5 marchas', '12,8 L', '150 kg', 'Disco com ABS', 'Flex'],
  },
  {
    id: 'prod-8', name: 'Yamaha NMAX 160', price: 21490, cat: 'scooter', cond: 'seminova', meta: '2024 · 5.100 km',
    desc: 'Scooter automático com baú sob o banco e consumo baixo. Revisado e com garantia Nox.',
    specs: ['155 cc', '15,4 cv', '1,43 kgf.m', 'CVT automático', '7,1 L', '131 kg', 'Disco com ABS', 'Gasolina'],
  },
];

export const DEFAULT_MOTO = MOTOS[4];

export function findMoto(id: string | null | undefined): Moto | undefined {
  return MOTOS.find((m) => m.id === id);
}

export function motoImg(id: string): string {
  return `/assets/${id}.png`;
}
