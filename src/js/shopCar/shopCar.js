import { shopCar } from './module/shopCar_module.js';
import '../../css/shopCar/common.css';
import '../../css/shopCar/shopCar.css';



if (!window.sessionStorage.getItem('token')) {
    window.location.href = 'http://127.0.0.1:8082/login.html';
}

var arr = [];
let xhr1 = new XMLHttpRequest();
xhr1.open('post', "http://127.0.0.1:3000/goodsListRouter");
xhr1.onreadystatechange = function () {
    if (xhr1.readyState == 4 && xhr1.status == 200) {
        arr = JSON.parse(xhr1.responseText);
        render();
    }
}
xhr1.setRequestHeader("content-type", "application/x-www-form-urlencoded");

let str = `token=${window.sessionStorage.getItem('token')}`;
xhr1.send(str)



function render() {

    let result = '';
    let data1 = [];
    let obj = {};
    let xhr = new XMLHttpRequest();
    xhr.open('post', 'http://10.12.152.2:3000/shopCarCountRouter', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            result = JSON.parse(xhr.responseText);
            // console.log(result);
            for (let i = 0; i < result.length; i++) {
                // console.log(result[i].goods_id);
                for (let j = 0; j < arr.length; j++) {
                    if (result[i].goods_id == arr[j].goods_id) {
                        data1.push(arr[j]);
                    }
                }
            }
            obj = {
                dom: '.shopCar',
                data: data1
            }
            new shopCar(obj);
        }
    }
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    let str = `token=${window.sessionStorage.getItem('token')}`;
    xhr.send(str)


}

