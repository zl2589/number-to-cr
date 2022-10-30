type CROption = {
  num?: number;
  unit?: boolean;
};

const numChar = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
const unitChar = [
  "",
  "拾",
  "佰",
  "仟",
  "万",
  "拾",
  "佰",
  "仟",
  "亿",
  "拾",
  "佰",
  "仟",
];
const NumberToUpper = ({ num = 0, unit = true }: CROption): any => {
  if (num < 0 || typeof num == "undefined") {
    return new Error("待转换数字格式不正确");
  }
  let strIns = "";
  let result = "";
  let unitPos = 0;
  let zero = true;

  while (num) {
    const v = num % 10; // 取低位
    if (v === 0) {
      if (!zero) {
        zero = true;
        result = numChar[v] + result;
      }
    } else {
      zero = false;
      strIns = numChar[v];
      strIns += unitChar[unitPos];
      result = strIns + result;
    }
    unitPos++;
    num = Math.floor(num / 10);
  }
  return unit ? `${result}元` : result;
};

export default NumberToUpper;