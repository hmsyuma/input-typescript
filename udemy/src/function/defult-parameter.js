"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// でふぉると引数
var nextYearSalary = function (currentSalary, rate) {
    if (rate === void 0) { rate = 1.1; }
    return currentSalary * rate;
};
console.log(nextYearSalary(1000));
