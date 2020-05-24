"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Me = /** @class */ (function () {
    function Me() {
    }
    Me.work = function () {
        // thisはクラスメイMeをさす
        return "hey.guys this is " + this.firstName + " i am poncotttu";
    };
    Me.isProgrammer = true;
    Me.firstName = 'Atushi';
    Me.lastName = 'Ishida';
    return Me;
}());
// let my = new Me();
// console.log(my.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
