export {};

// 例外が発生しretrunがない場合neverはthis func never returnてきな
// errorはnever、
function error(message: string): never {
  // 例外の発生
  throw new Error(message);
}

try {
  let result = error('あかん');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
// そもそも値が帰ってくる想定ではないので、エラーが発生する
// error 関数のみ定義できる
let ber: never = error('only me');
