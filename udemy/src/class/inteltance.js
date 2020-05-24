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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return 'I can run';
    };
    return Animal;
}());
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    // 親クラスと子クラスで二回初期化処理を行っている
    function Lion(name, speed) {
        var _this = _super.call(this, name) || this;
        _this.speed = speed;
        return _this;
    }
    Lion.prototype.run = function () {
        var parentMessage = _super.prototype.run.call(this);
        return _super.prototype.run.call(this) + " " + this.speed + "Km";
    };
    return Lion;
}(Animal));
// let animal = new Animal();
// console.log(animal.run());
console.log(new Animal('mickty').run());
console.log(new Lion('shinba', 80).run());
