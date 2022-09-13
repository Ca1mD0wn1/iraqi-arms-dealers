import "../../css/goods/goods.css";
import Goods from "./classGoods.js";

if (!window.sessionStorage.getItem('token')) {
    window.location.href = 'http://127.0.0.1:8082/login.html';
}

let xhr = new XMLHttpRequest();
xhr.open('post', 'http://127.0.0.1:3000/goodsListRouter')
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        data = JSON.parse(this.responseText);
        data.forEach(item => {
            new Goods(item);
        })
    }
});
xhr.send();



