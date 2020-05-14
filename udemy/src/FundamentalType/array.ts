export {};

let numbers: number[] = [1, 2, 3];

// 上記と同様、非推奨
let numbers2: Array<number> = [3, 4, 5];
let strings: Array<string> = ['a', 'b', 'c'];

let strings2: string[] = ['Ts', 'JS', 'CS'];

let nijigenHaireru: number[][] = [
  [50, 100],
  [150, 300],
];

// ()の中のいずれかで該当する配列が定義されている

let haireru: (number | boolean | string)[] = [1, false, 'japan'];
