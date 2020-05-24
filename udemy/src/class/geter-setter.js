"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// *owner
//  *所有者
//  *初期化時に設定できる
//  *参照できる
// *seretNumber
//  *個人番号
//  *初期化時に設定できる
//  *途中で変更可能
//  *参照できない。
var MyNuberCard = /** @class */ (function () {
    function MyNuberCard(owner, secretNumber) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }
    Object.defineProperty(MyNuberCard.prototype, "owner", {
        // 参照のためのメソッド、getter、名前かぶるので＿でrename
        // getキーワードで宣言する。
        get: function () {
            return this._owner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyNuberCard.prototype, "secretNumber", {
        // set キーワードを使用して値を付与する。
        // 書き換えをできるようにする
        set: function (secretNumber) {
            this._secretNumber = secretNumber;
        },
        enumerable: true,
        configurable: true
    });
    MyNuberCard.prototype.debugPrint = function () {
        return "" + this._secretNumber;
    };
    return MyNuberCard;
}());
var card = new MyNuberCard('shimo', 1333);
// card.owner = 'Ham';
console.log(card.debugPrint());
// privateなので無理
// card._secretNumber;
