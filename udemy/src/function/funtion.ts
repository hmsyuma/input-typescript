export {};

// 引数への型
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(68, 86));
