"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VisaCard = /** @class */ (function () {
    // readonly = publicなので、削除可能だけど、、
    // readonlyを書いている時限定なので、普通に書く必要がある
    function VisaCard(owner) {
        this.owner = owner;
    }
    return VisaCard;
}());
var myVisa = new VisaCard('shimos');
console.log(myVisa.owner);
// エラー
// myVisa.owner = 'バーン';
