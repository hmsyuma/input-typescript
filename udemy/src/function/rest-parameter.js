"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reduser = function (accumlator, currentValue) {
    console.log({ accumlator: accumlator, currentValue: currentValue });
    return accumlator + currentValue;
};
// レストパラメーター　引数がいくつになるか分からない
var sum = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    console.log(values);
    return values.reduce(reduser);
};
sum(1, 2, 3, 4, 5, 6, 6, 7, 8);
[1, 2, 3, 4, 5].reduce(reduser);
