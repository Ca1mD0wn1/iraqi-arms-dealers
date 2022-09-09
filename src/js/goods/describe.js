// import Classdescribe from "./Classdescribe";
import "../../css/goods/goods.css";
import { Describe } from "./Classdescribe.js";
let data;
let sendStr = "goods_id=";

sendStr += sessionStorage.getItem("id");
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.open("POST", "http://10.12.152.2:3000/goodsDescribeRouter");
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        data = JSON.parse(this.responseText);
        new Describe(data[0]);

    }
});
xhr.send(sendStr);





