"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// すでに番号がふられている
// 数値enum型
var Months;
(function (Months) {
    Months[Months["jan"] = 1] = "jan";
    Months[Months["feb"] = 2] = "feb";
    Months[Months["march"] = 3] = "march";
    Months[Months["april"] = 4] = "april";
    Months[Months["may"] = 5] = "may";
    Months[Months["jun"] = 6] = "jun";
})(Months || (Months = {}));
console.log(Months.jan);
console.log(Months.may);
// jsの場合
var MonthJs = {
    jans: 1,
    febs: 2,
};
// 文字列のenum型
var CLOLERS;
(function (CLOLERS) {
    CLOLERS["RED"] = "red";
    CLOLERS["WHITE"] = "#fff";
    CLOLERS["Black"] = "#000";
})(CLOLERS || (CLOLERS = {}));
var red = CLOLERS.RED;
console.log({ red: red });
(function (CLOLERS) {
    CLOLERS["YLLOW"] = "#fff";
})(CLOLERS || (CLOLERS = {}));
CLOLERS.YLLOW;
