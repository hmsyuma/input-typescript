"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 型を変更しないことを伝える物
var name = 'Atsushi';
name = 'Ham';
// 再代入を固定する　実質定数
var nickname = 'Ham';
// nickname = 'shimos';
// オブジェクトにも使用できる。
// as const をつけることでread onlyになる。
// どれだけネストしていても、全て適応される！すごい、、
var prifile = {
    name: 'Atsushi',
    height: 179
};
// prifile.name = 'Ham';
// prifile.height = 180;
