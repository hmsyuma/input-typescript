export {};

// 引数への型
let bmi: (heigth: number, weight: number) => number = (
  heigth: number,
  weight: number
  // retrunの省略記法
): number => weight / (heigth * heigth);

console.log(bmi(68, 86));
