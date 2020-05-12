export {};

//型宣言、先頭大文字
type Mojiretu = string;

const fooString: string = 'hello';
const fooMojiretu: Mojiretu = 'hello';

const exmple1 = {
  name: 'shimo',
  age: 27,
};

type Profile = {
  name: string;
  age: number;
};

const exmple2: Profile = {
  name: 'osako',
  age: 72,
};

// 書かなくても行ける
type Profile2 = typeof exmple1;
