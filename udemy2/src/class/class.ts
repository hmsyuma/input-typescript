class Human {
  name: string;

  constructor(fname: string) {
    this.name = fname;
  }

  // 本来はこのthiインスタンス全部を表したい場合
  // クラス名を指定するとHuman型も同時に作成されry
  greeting(this: Human) {
    console.log(`hello my name is ${this.name}`);
  }
}

// インスタンス化した際にHumanのかたも作られる
// クラスは型になる。
const quills = new Human('shimo');

// humanの中で定義された物と同じ物を使用する必要がある。
const anothorQuills = {
  name: 'anotherQuill',
  greeting: quills.greeting,
};

anothorQuills.greeting();
