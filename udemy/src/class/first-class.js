"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    // retrunしないので、型宣言をしなくてよい 下記のエラーが帰ってくる
    //  Type annotation cannot appear on a constructor declaration.
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.profile = function () {
        return "name: " + this.name + ", age: " + this.age;
    };
    return Person;
}());
var taro = new Person('taro', 34);
// let hanako = new Person();
console.log(taro.profile());
