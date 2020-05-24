"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fooCompatibe;
var barCompatible = 'TypeScript';
console.log(typeof fooCompatibe);
// any=string 互換がある
fooCompatibe = barCompatible;
console.log(typeof fooCompatibe);
var hoge;
var hogya = 1;
// string =  numberは　型互換がない
// hoge = hogya;
// string = stringは　型互換があり
var fooString;
var barString = 'strig';
fooString = barString;
// 互換性あり　文字列リテラルは文字列型の一部
var fooStringLiteral = 'fooStringLiteral';
fooString = fooStringLiteral;
// 型ごとに互換性のあるなしが存在する。
var fooNumber;
var fooNumberLiteral = 1939;
fooNumber = fooNumberLiteral;
var Person = /** @class */ (function () {
    function Person(age, name) {
        this.age = age;
        this.name = name;
    }
    return Person;
}());
// オブジェクトを代入できるか否かは型に関係ない
// オブジェクト間の代入の際にも型の互換性は行われる。
// 代入されるオブジェクトのメンバーの型と代入するオブジェクトの方でも存在するか確認する
// 構造的部分型
var me;
me = new Person(43, 'shimo');
