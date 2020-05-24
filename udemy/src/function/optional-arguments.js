"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bmi = function (height, wegight, printable) {
    var bmi = wegight / (height * height);
    if (printable) {
        console.log(bmi);
    }
    return bmi;
};
bmi(1.39, 89, true);
// bmi(身長,体重,logで出すか出さないか)
// bmi(1.39, 89,true)
// bmi(1.39, 89,false)
// bmi(1.39, 89)
