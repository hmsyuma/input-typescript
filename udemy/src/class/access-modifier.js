"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    // retrunしないので、型宣言をしなくてよい 下記のエラーが帰ってくる
    //  Type annotation cannot appear on a constructor declaration.
    function Person(name, age, heigth) {
        this.name = name;
        this.age = age;
        this.heigth = heigth;
    }
    Person.prototype.profile = function () {
        return "name: " + this.name + ", age: " + this.age + " heigth: " + this.heigth;
    };
    return Person;
}());
var Android = /** @class */ (function (_super) {
    __extends(Android, _super);
    function Android(name, age, heigth) {
        return _super.call(this, name, age, heigth) || this;
    }
    Android.prototype.profile = function () {
        return "name: " + this.name + ", age: " + this.age + " heigth: " + this.heigth;
    };
    return Android;
}(Person));
var taro = new Person('taro', 34, 178);
// let hanako = new Person();
// アクセス修飾子で制約を設ける
console.log(taro.name);
console.log(taro.profile());
// privateなのでアクセスできない。
// console.log(taro.age);
