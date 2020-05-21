export {};

// 型を変更しないことを伝える物

let name = 'Atsushi';

name = 'Ham';

// 再代入を固定する　実質定数
let nickname = 'Ham' as const;
// nickname = 'shimos';

// オブジェクトにも使用できる。
// as const をつけることでread onlyになる。
// どれだけネストしていても、全て適応される！すごい、、
let prifile = {
  name: 'Atsushi',
  height: 179
} as const;

// prifile.name = 'Ham';
// prifile.height = 180;
