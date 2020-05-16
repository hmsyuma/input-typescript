export {};

class Person {
  // public name: string;
  // public age: number;

  // 初期化処理の省略記法
  // コンストラクターに引数を渡すことにより、初期化処理を行う。
  constructor(public name: string, protected age: number) {
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person('shimo', 26);
console.log(me);
