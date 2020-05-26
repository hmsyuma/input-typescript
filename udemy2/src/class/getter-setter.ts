class Alcohol {
  readonly id: number = 32;
  constructor(public readonly name: string, protected age: number) {
    this.id = 30;
  }

  incriment() {
    this.age += 1;
  }

  greeting(this: Alcohol) {
    console.log(`hello my name is ${this.name} I am ${this.age}なんです`);
  }
}

class wiskey extends Alcohol {
  // getとsetは同じかたでないと
  get food(): string {
    if (!this._foods) {
      throw new Error('hoge');
    }
    return 'egg';
  }
  set food(value) {
    this._foods = value;
  }
  constructor(name: string, age: number, private _foods: string) {
    super(name, age);
  }

  greeting(this: wiskey) {
    console.log(
      `やっぱり ${this.name}の${this.age}年のつまみは${this.food}でしょ`
    );
  }
}

const Yamazaki = new wiskey('山崎', 18, 'ベーコン');
console.log(Yamazaki.greeting());
// ゲッター
Yamazaki.food;
//　ステーキ
Yamazaki.food = 'ステーキ';
