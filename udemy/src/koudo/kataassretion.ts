export {};

// 型アサーション　互換性がある方を変更する！！！
// 型をきつく絞る
let name: any = 'sshimo';

// 右辺に型制約を加え、事前に絞る
let length = (name as string).length;
length = 3;
