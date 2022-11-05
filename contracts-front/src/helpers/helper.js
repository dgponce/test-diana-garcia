export const getDiscount = (contract) => {
  const { code, count, price } = contract;

  if (code === 'TermSheet') {
    const newPrice = 70.60;

    return count * price - count * newPrice;
  }
  let res = count % 2;
  let finalCount = res !== 0 ? (count - res) / 2 : count / 2;
  return finalCount * price;
};

export const getVat = (sub) => {
  const vat = 0.16;
  
  return sub * vat;
};

export const getTotal = (sub) => {
  return sub + getVat(sub);
};
