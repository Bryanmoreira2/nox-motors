export const TAXA_MENSAL = 0.0179;

export function formatBRL(valor: number): string {
  return 'R$ ' + Math.round(valor).toLocaleString('pt-BR');
}

/** Parcela fixa (Tabela Price) para um valor financiado em `n` meses. */
export function calcParcela(financiado: number, n: number, taxa = TAXA_MENSAL): number {
  if (financiado <= 0) return 0;
  return (financiado * taxa) / (1 - Math.pow(1 + taxa, -n));
}

/** Parcela de referência: 20% de entrada em 48x. */
export function parcelaPadrao(preco: number): number {
  return calcParcela(preco * 0.8, 48);
}

export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
