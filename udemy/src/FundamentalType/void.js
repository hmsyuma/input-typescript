"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// undefindで定義した場合、rtrunでundefindを返さないといけない
// function returnnottiong(): undefined {
//   console.log('なにもない');
//   return undefined;
// }
// 関数からの返り値が設定されていない場合voidを指定する
function returnnottiong() {
    console.log('なにもない');
}
console.log(returnnottiong());
