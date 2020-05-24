"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// インデックスシグネチャー
var profile = { name: 'ham', underTwenty: false };
// How to write index signature
// {[ index: typeForindex]: typeForValue}
profile.name = 'Ham';
profile.age = 43;
profile.name = 'hoge';
