// toUpperCaseはどこに定義されているの？
// JSのデフォルト関数の型定義したファイルがある。
let hello = 'hello';
console.log(hello.toUpperCase());

function echo(message: string): string | null {
  // 使っていないローカル変数
  let hello = 'hige';
  return message;
}
let nullableMessage: string | null = null;
echo.call(null, 'hi');
