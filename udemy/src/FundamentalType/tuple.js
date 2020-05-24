"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ユニオン型は配列内の順番を考慮しない
var profile = ['shimo', 43];
// tupleで指定、型推論はしてくれない
var profil = ['shimow', 43];
// 意図的なエラー
// profil = [43, 'shimow'];
