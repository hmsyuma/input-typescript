export {};

// *owner
//  *所有者
//  *初期化時に設定できる
//  *参照できる
// *seretNumber
//  *個人番号
//  *初期化時に設定できる
//  *途中で変更可能
//  *参照できない。

class MyNuberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // 参照のためのメソッド、getter、名前かぶるので＿でrename
  // getキーワードで宣言する。
  get owner() {
    return this._owner;
  }

  // set キーワードを使用して値を付与する。
  // 書き換えをできるようにする
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `${this._secretNumber}`;
  }
}

let card = new MyNuberCard('shimo', 1333);
// card.owner = 'Ham';
console.log(card.debugPrint());
// privateなので無理
// card._secretNumber;
