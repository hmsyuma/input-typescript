"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 実態
function double(value) {
    console.log(typeof value);
    if (typeof value === 'number') {
        return value * 2;
    }
    else {
        return value + value;
    }
}
// function double(value: string): string {
//   return value + value;
// }
console.log(double(300));
console.log(double('go'));
// console.log(double(true));
