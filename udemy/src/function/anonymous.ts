export {};

export {};

// 引数との返り値ｍｐ型
// 無名関数
let bmi: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi(68, 86));
