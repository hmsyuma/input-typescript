"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kansu = function () { return 43; };
var numberAny = kansu();
var numberUnknown = kansu();
var sumAny = numberAny + 10;
// unknown型をそのまま実行すると、不明な型のためコンパイルエラーが発生する
// 型確認、タイプガード
// typeofを使用しながら、型を確認する。
if (typeof numberUnknown === 'number') {
    var sumUnknown = numberUnknown + 20;
}
