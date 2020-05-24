"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    // public name: string;
    // public age: number;
    // 初期化処理の省略記法
    // コンストラクターに引数を渡すことにより、初期化処理を行う。
    function Person(name, age) {
        this.name = name;
        this.age = age;
        // this.name = name;
        // this.age = age;
    }
    return Person;
}());
var me = new Person('shimo', 26);
console.log(me);
