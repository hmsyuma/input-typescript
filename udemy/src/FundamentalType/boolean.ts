// モジュール化
export {};

let isFinished: boolean = true;
isFinished = false;

// 意図的にエラーを起こす
// isFinished = 1;
console.log({ isFinished });
