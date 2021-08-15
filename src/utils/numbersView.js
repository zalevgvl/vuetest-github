const numbersView = (num) => {
  const splitDecimal = num?.toString()?.split('.');
  const strArr = splitDecimal?.[0]?.trim()?.split('')?.reverse() || [];
  let res = '';
  strArr.forEach((item, i) => {
    if (i % 3 === 0) {
      res = ` ${res}`;
    }
    res = item + res;
  });
  return res?.trim() + (splitDecimal?.[1] !== undefined ? `.${splitDecimal?.[1]}` : '');
};

export default numbersView;
