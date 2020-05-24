"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mahoutukai = /** @class */ (function () {
    function Mahoutukai() {
    }
    return Mahoutukai;
}());
var Souryo = /** @class */ (function () {
    function Souryo() {
    }
    return Souryo;
}());
var Jiro = /** @class */ (function () {
    function Jiro() {
    }
    Jiro.prototype.ionazun = function () {
        console.log('io');
    };
    Jiro.prototype.kougeki = function () {
        console.log('kogeki');
    };
    return Jiro;
}());
var jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
