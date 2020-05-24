"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 例外が発生しretrunがない場合neverはthis func never returnてきな
// errorはnever、
function error(message) {
    // 例外の発生
    throw new Error(message);
}
try {
    var result = error('あかん');
    console.log({ result: result });
}
catch (error) {
    console.log({ error: error });
}
var foo = undefined;
// そもそも値が帰ってくる想定ではないので、エラーが発生する
// error 関数のみ定義できる
var ber = error('only me');
