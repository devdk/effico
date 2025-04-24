export const convertToDollar = (value: string | number | undefined | null) => {
  //     return Intl.NumberFormat('en-US', {style: 'currency', currency: 'dollar'})
  // .format(value);
  return Number(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
