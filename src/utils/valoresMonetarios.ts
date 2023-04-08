export function mascaraReal(valor: any) {
  const valorDefinido = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
  return valorDefinido;
}
