export {};

// すでに番号がふられている
// 数値enum型
enum Months {
  jan = 1,
  feb,
  march,
  april,
  may,
  jun,
}

console.log(Months.jan);
console.log(Months.may);

// jsの場合
const MonthJs = {
  jans: 1,
  febs: 2,
};

// 文字列のenum型

enum CLOLERS {
  RED = 'red',
  WHITE = '#fff',
  Black = '#000',
}

let red = CLOLERS.RED;
console.log({ red });

enum CLOLERS {
  YLLOW = '#fff',
}

CLOLERS.YLLOW;
