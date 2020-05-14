export {};

// ユニオン型は配列内の順番を考慮しない
let profile: (string | number)[] = ['shimo', 43];

// tupleで指定、型推論はしてくれない
let profil: [string, number] = ['shimow', 43];
// 意図的なエラー
// profil = [43, 'shimow'];
