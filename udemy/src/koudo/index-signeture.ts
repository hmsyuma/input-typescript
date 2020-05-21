export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

// インデックスシグネチャー
let profile: Profile = { name: 'ham', underTwenty: false };

// How to write index signature
// {[ index: typeForindex]: typeForValue}
profile.name = 'Ham';
profile.age = 43;
profile.name = 'hoge';
