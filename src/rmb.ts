import currency from "currency.js";

type RMBOption = { price?: number; symbol?: boolean; precision?: boolean };

/**人民币格式化*/
const RMB = ({ price = 0, symbol = true, precision = true }: RMBOption) => {
  return currency(price, {
    symbol: "￥",
    formatWithSymbol: symbol,
    precision: precision ? 2 : 0,
  }).format();
};

const rmb = (price?: number) => RMB({ price, symbol: false, precision: false });

const rmbS = (price?: number) => RMB({ price, precision: false });

const rmbP = (price?: number) => RMB({ price, symbol: false });

const rmbSP = (price?: number) => RMB({ price });

export default {
  _: rmb,
  s: rmbS,
  p: rmbP,
  sp: rmbSP,
};
