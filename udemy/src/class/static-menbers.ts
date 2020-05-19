export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atushi';
  static lastName: string = 'Ishida';

  static work() {
    // thisはクラスメイMeをさす
    return `hey.guys this is ${this.firstName} i am poncotttu`;
  }
}

// let my = new Me();
// console.log(my.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
