class Animal {
  // readonlyを読み込むだけ、内外で読めはするけど、書くことはできない

  readonly id: number = 32;
  constructor(public readonly name: string, protected age: number) {
    // 初期化処理は例外
    this.id = 30;
  }

  incriment() {
    this.age += 1;
  }

  // クラス内のメソッドからのみしか、staticにアクセスできない。
  greeting(this: Animal) {
    console.log(`hello my name is ${this.name} I am ${this.age}なんです`);
  }
}

// let Anima2: Animal;
// const dog = new Animal('dog', 38);
// dog.incriment();
// dog.greeting();

class mammalian extends Animal {
  constructor(name: string, age: number, public foods: string) {
    super(name, age);
  }

  // 上書きの場合は、再度記載
  // pribateはここでエラーでちゃう、継承さきもダメ
  // protectedにしよう、readonlyもおk
  greeting(this: mammalian) {
    console.log(
      `hello my name is ${this.name} I am ${this.age}なんです ${this.foods}`
    );
  }
}

const cat = new mammalian('quil', 38, 'catfood');
