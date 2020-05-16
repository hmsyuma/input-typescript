export {};

class Person {
  public name: string;
  // private age: number;
  public age: number;
  protected heigth: number;

  // retrunしないので、型宣言をしなくてよい 下記のエラーが帰ってくる
  //  Type annotation cannot appear on a constructor declaration.
  constructor(name: string, age: number, heigth: number) {
    this.name = name;
    this.age = age;
    this.heigth = heigth;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age} heigth: ${this.heigth}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, heigth: number) {
    super(name, age, heigth);
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age} heigth: ${this.heigth}`;
  }
}

let taro = new Person('taro', 34, 178);
// let hanako = new Person();

// アクセス修飾子で制約を設ける
console.log(taro.name);
console.log(taro.profile());

// privateなのでアクセスできない。
// console.log(taro.age);
