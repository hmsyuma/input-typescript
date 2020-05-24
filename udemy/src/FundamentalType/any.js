"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// any 得体が知れないこと
var axios_1 = __importDefault(require("axios"));
// axios 公式
// https://github.com/axios/axios
var url = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';
axios_1.default.get(url).then(function (response) {
    var data;
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
