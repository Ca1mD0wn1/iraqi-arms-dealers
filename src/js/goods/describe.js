// import Classdescribe from "./Classdescribe";
import "../../css/goods/goods.css";
import { Describe } from "./Classdescribe.js";
import { Path } from '../commont/commont'
let data;
let sendStr = `token=${window.sessionStorage.getItem('token')}&goods_id=`;

sendStr += sessionStorage.getItem("id");
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.open("POST", Path + "/goodsDescribeRouter");
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        data = JSON.parse(this.responseText);
        console.log(data);
        new Describe(data[0]);

    }
});
xhr.send(sendStr);





