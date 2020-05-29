abstract class Alcohol {
  static company = 'サントリー';
  static alcohoPersent(persent: number) {
    if (persent > 89) return true;
    return false;
  }

  readonly id: number = 32;
  constructor(public readonly name: string, protected age: number) {
    this.id = 30;
  }

  incriment() {
    this.age += 1;
    // staticはインスタンスの生成を指定なので、thisアクセス不可
    // クラス名を直指定で呼び出す
    // thisは指定された場所のクラスのインスタンスを指し示す物
    Alcohol.company;
  }

  greeting(this: Alcohol) {
    console.log(`hello my name is ${this.name} I am ${this.age}なんです`);
    this.explain();
  }

  abstract explain(): void;
}

class Wiskey extends Alcohol {
  // 外部禁止、インスタンスを生成しなくても呼び出すstatic指定
  private static instance: Wiskey;

  explain() {
    console.log('this is JP Wiskey');
  }

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

  // newでインスタンスができなくなる。
  // シングルトンパターン、クラスからインスタンスを一つしか作れないようにする
  private constructor(name: string, age: number, private _foods: string) {
    super(name, age);
  }

  // アクセスをstaticメソッドでもつようにする
  static getInstanace() {
    if (Wiskey.instance) return Wiskey.instance;
    Wiskey.instance = new Wiskey('山崎', 18, 'ベーコン');
    return Wiskey.instance;
  }

  greeting(this: Wiskey) {
    console.log(
      `やっぱり ${this.name}の${this.age}年のつまみは${this.food}でしょ`
    );
  }
}
const yamazaki = Wiskey.getInstanace();
const yamazaki2 = Wiskey.getInstanace();
console.log(yamazaki);
console.log(yamazaki2);

// const hoge = Wiskey.getInstanace()
// ダメにる
// const Yamazaki = new wiskey('山崎', 18, 'ベーコン');

// console.log(Yamazaki.greeting());
// console.log(Yamazaki.explain());

// // ゲッター
// Yamazaki.food;
// //　ステーキ
// Yamazaki.food = 'ステーキ';
