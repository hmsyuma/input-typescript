export {};

// 抽象メソッド
abstract class Animal {
  abstract cry(): string;
}

// 抽象メソッドは必ずオーバーライドする
class Lion extends Animal {
  cry() {
    return 'gao-';
  }
}

// 抽象クラスを実装し忘れるとエラーが出る。
class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
}
