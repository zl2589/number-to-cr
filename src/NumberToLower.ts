
const numChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const unitChar = [
  "",
  "十",
  "百",
  "千",
  "万",
  "十",
  "百",
  "千",
  "亿",
  "十",
  "百",
  "千",
];
function NumberToLower(num: number): any {
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
      if (!zero) { // 零出现的次数不能超过1
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
  return result;
}


export default NumberToLower;
