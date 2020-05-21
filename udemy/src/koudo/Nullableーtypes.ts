export {};

// 不確定な型を定義するときに使用する。
// ageに具体的な数値を設定できない場合
let prifile: { name: string; age: number | null } = {
  name: 'Ham',
  age: null
};
