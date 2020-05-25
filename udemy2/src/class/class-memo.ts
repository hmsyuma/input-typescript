class Person {
  name: string;
  constructor(fname: string) {
    this.name = fname;
  }

  // クラスの中でthisを使用した際はそのクラスのインスタンスを指し示すことになる。
  // thisを引数として、伝える、これでundifindだとエラーが発生する。
  // アロー関数は定義時に決まる。callでもよい
  greeting(this: { name: string }) {
    console.log(`hello my name is ${this.name}`);
  }
}

const quill = new Person('shimo');
console.log(quill);
quill.greeting();

const anothorQuill = {
  // greetingで定義しているthisはオブジェクト内部のanotherQuillをさす
  name: 'anotherQuill',
  anothorGreeting: quill.greeting,

  // これは直接的な記述なので、オブジェクト内にnameがないとエラー
  // greeting() {
  //   console.log(`hello my name is ${this.name}`);
  // },
};
// ここのthisはオブジェクトのメソッドの中でthisを使用した場合は、
// そのオブジェクトを指し示すことになる。
// thisは呼び出された場所、実行された場所によって決まる。
anothorQuill.anothorGreeting();
