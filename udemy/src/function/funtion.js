"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 引数への型
function bmi(height, weight) {
    return weight / (height * height);
}
console.log(bmi(68, 86));
