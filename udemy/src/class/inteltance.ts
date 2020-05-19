export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;
  // 親クラスと子クラスで二回初期化処理を行っている
  constructor(name: string, speed: number) {
    super(name);

    this.speed = speed;
  }
  run(): string {
    const parentMessage = super.run();
    return `${super.run()} ${this.speed}Km`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

console.log(new Animal('mickty').run());
console.log(new Lion('shinba', 80).run());
