export {};

class Person {
  name: string;
  age: number;

  // retrunしないので、型宣言をしなくてよい 下記のエラーが帰ってくる
  //  Type annotation cannot appear on a constructor declaration.
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('taro', 34);
// let hanako = new Person();

console.log(taro.profile());
