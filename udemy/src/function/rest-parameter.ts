export {};

const reduser = (accumlator: number, currentValue: number) => {
  console.log({ accumlator, currentValue });
  return accumlator + currentValue;
};

// レストパラメーター　引数がいくつになるか分からない
const sum: (...values: number[]) => number = (...values: number[]): number => {
  console.log(values);
  return values.reduce(reduser);
};

sum(1, 2, 3, 4, 5, 6, 6, 7, 8);

[1, 2, 3, 4, 5].reduce(reduser);
