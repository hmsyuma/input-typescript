export {};

class VisaCard {
  // readonly = publicなので、削除可能だけど、、
  // readonlyを書いている時限定なので、普通に書く必要がある
  constructor(public readonly owner: string) {}

  // 省略方法
  // readonly owner: string;

  // constructor(owner: string) {
  //   this.owner = owner;
  // }
}

let myVisa = new VisaCard('shimos');
console.log(myVisa.owner);
// エラー
// myVisa.owner = 'バーン';
