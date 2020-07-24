import numeral from "numeral";

const formatNumber = num => {
  if (!num) {
    return 0;
  }
  return numeral(Number(num)).format();
};

// Paso 3
export { formatNumber };
