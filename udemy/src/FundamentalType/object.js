"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 制約が甘い　駄目
var profile = { name: 'ham' };
profile = { birth: 1978 };
//プロパティに対する型指定が可能
var profile2 = { name: 'hoge' };
// nameを文字列で設定しているので、name以外がエラー
profile2 = { name: 'a' };
