export {};

// 制約が甘い　駄目
let profile: object = { name: 'ham' };
profile = { birth: 1978 };

//プロパティに対する型指定が可能
let profile2: {
  name: string;
} = { name: 'hoge' };

// nameを文字列で設定しているので、name以外がエラー
profile2 = { name: 'a' };
