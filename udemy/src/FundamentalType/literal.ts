export {};

// stringのリテラル型
let dayofTheWeel: '日' | 'げっつ' | '火' | '水' | '木' = '日';
dayofTheWeel = 'げっつ';

// これはだめでしょ
// dayofTheWeel = '31';

// numberのリテラル型
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 13;

// これ以上型を狭くする必要があるのか、、
// falseがでるとコンパイルエラーになる。
let TRUE: true = true;
