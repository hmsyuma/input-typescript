export {};

let fooCompatibe: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatibe);

// any=string 互換がある
fooCompatibe = barCompatible;

console.log(typeof fooCompatibe);

let hoge: string;
let hogya: number = 1;

// string =  numberは　型互換がない
// hoge = hogya;

// string = stringは　型互換があり
let fooString: string;
let barString: string = 'strig';

fooString = barString;

// 互換性あり　文字列リテラルは文字列型の一部
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

// 型ごとに互換性のあるなしが存在する。
let fooNumber: number;
let fooNumberLiteral: 1939 = 1939;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

// オブジェクトを代入できるか否かは型に関係ない
// オブジェクト間の代入の際にも型の互換性は行われる。
// 代入されるオブジェクトのメンバーの型と代入するオブジェクトの方でも存在するか確認する
// 構造的部分型
let me: Animal;
me = new Person(43, 'shimo');
