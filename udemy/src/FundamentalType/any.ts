// any 得体が知れないこと
import axios from 'axios';
export {};

// axios 公式
// https://github.com/axios/axios

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  interface Articles {
    id: number;
    title: string;
    description: string;
  }
  let data: Articles[];
  data = response.data;
  // any型 はできるだけ指定しない
  data = [
    {
      id: 1,
      title: 'hoge',
      description: 'ini',
    },
  ];
  console.log(data);
});
