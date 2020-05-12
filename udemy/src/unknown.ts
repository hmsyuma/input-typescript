export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// unknown型をそのまま実行すると、不明な型のためコンパイルエラーが発生する
// 型確認、タイプガード
// typeofを使用しながら、型を確認する。
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 20;
}
