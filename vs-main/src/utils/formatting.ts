export function price(price: any) {
  const numericPrice = parseFloat(price);

  if (numericPrice === 0 || isNaN(numericPrice)) {
    return 'FREE';
  }

  return `$${numericPrice.toFixed(2)}`;
}
