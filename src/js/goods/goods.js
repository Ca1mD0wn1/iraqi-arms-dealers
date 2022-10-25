import "../../css/goods/goods.css";
import Goods from "./classGoods.js";
import { Path } from '../commont/commont';

if (!window.sessionStorage.getItem('token')) {
    window.location.href = 'http://127.0.0.1:8082/login.html';
}

let data;
let xhr = new XMLHttpRequest();
xhr.open('post', Path + '/goodsListRouter');
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
let str = `token=${window.sessionStorage.getItem('token')}`;
xhr.send(str);
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        data = JSON.parse(this.responseText);
        console.log(data);
        data.forEach(item => {
            new Goods(item);
        })
    }
});
xhr.send(str);
