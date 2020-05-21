export {};

class Mahoutukai {}
class Souryo {}

// TSは単一クラスしか継承できない
// interfaceは複数のクラスを実装することができる。
// class Taro extends Mahoutukai, Souryo {}

interface kenjya {
  // 処理の実態が分からないメソッドを指定する。
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements kenjya, Senshi {
  ionazun(): void {
    console.log('io');
  }

  kougeki(): void {
    console.log('kogeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
