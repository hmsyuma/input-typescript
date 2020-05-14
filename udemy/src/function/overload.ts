export {};

// シグネチャー 型制約　不正なデータの混入を防ぐ
function double(value: number): number;
function double(value: string): string;

// 実態
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

// function double(value: string): string {
//   return value + value;
// }

console.log(double(300));
console.log(double('go'));
// console.log(double(true));
