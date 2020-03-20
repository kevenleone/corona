export const rounded = (num) => {
  if (num < 1000) {
    return num;
  }
  if (num > 1000000000) {
    return `${Math.round(num / 100000000) / 10}Bn`;
  }
  if (num > 1000000) {
    return `${Math.round(num / 100000) / 10}M`;
  }
  return `${Math.round(num / 100) / 10}K`;
};

export const getColor = (total) => {
  if (total <= 100) {
    return '#D6D6DA';
  }
  if (total > 100 && total <= 1000) {
    return '#ff8a75';
  }
  if (total > 1000 && total < 5000) {
    return '#ff5533';
  }
  if (total >= 5000 && total <= 10000) {
    return '#e2492d';
  }
  if (total > 10000 && total < 20000) {
    return '#be3d26';
  }
  if (total > 20000 && total <= 50000) {
    return '#9a311f';
  }
  return '#782618';
};
