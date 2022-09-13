import "../../css/index/index.css";
import "../../css/index/swiper-bundle.min.css";
const Swiper = require("./swiper-bundle.min.js");
if (!window.sessionStorage.getItem('token')) {
    window.location.href = 'http://127.0.0.1:8082/login.html';
}
const token = window.localStorage.getItem('token');
// const id = window.localStorage.getItem('id');
if (token) {
    let userName = localStorage.getItem('username');
    document.getElementById('userLogin').innerText = userName;
}
var mySwiper = new Swiper('#slideshow_top .swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var mySwiper = new Swiper('#bot_left .swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },

});
var mySwiper = new Swiper('#bot_right .swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },

});
document.getElementById('slideshow_top').onclick = function () {
    window.location.href = "./sale.html";
};

window.onload = function () {
    let xhr = new XMLHttpRequest;
    xhr.open("post", "http://10.12.152.2:3000/index", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    let str = `token=${window.sessionStorage.getItem('token')}`;
    xhr.send(str);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            if (data.status == "success") {
                let ulDom = document.createElement('ul');
                let strHtml = '';
                ulDom.className = 'good_item';
                for (let i = 0; i < 4; i++) {
                    strHtml += `
                        <li>
                            <div class="goods" id="goods${data.data[i].goods_id}">
                                <div class="iconImg">
                                    <img src="./images/goods/${data.data[i].goods_img_src}">
                                </div>
                                <div class="priceCon">
                                    $<i>${data.data[i].goods_price}</i>
                                </div>
                                <div class="titleCon">
                                    <span class="titleIcon">${data.data[i].goods_name}</span>
                                    <a href="#">${data.data[i].goods_name}</a>
                                </div>
                            </div>
                        </li>
                        `;
                }
                ulDom.innerHTML = strHtml;
                document.querySelector('.center_goods').appendChild(ulDom);

                document.querySelector("#goods1").onclick = function () {
                    sessionStorage.setItem("id", 1);
                    window.open("describe.html");
                };
                document.querySelector("#goods2").onclick = function () {
                    sessionStorage.setItem("id", 2);
                    window.open("describe.html");
                };
                document.querySelector("#goods3").onclick = function () {
                    sessionStorage.setItem("id", 3);
                    window.open("describe.html");
                };
                document.querySelector("#goods4").onclick = function () {
                    sessionStorage.setItem("id", 4);
                    window.open("describe.html");
                };
            };
        }
    };

};
// 显示隐藏登录注册按钮
let login = document.getElementById('login');
let check = document.getElementById('check');
let usernameHi = document.getElementById('usernameHi');
let userLogin = document.getElementById('userLogin');

let username = getData('username');
if (username) {
    login.style.display = 'none';
    check.style.display = 'none';
    userLogin.innerHTML = username;
    usernameHi.innerHTML = 'Hi   &nbsp;&nbsp;&nbsp;' + username;

}

function getData(k) {
    let str = document.cookie;
    let strArr = str.split('; ');
    for (let i = 0; i < strArr.length; i++) {
        let [key, value] = strArr[i].split('=');
        if (k == key) {
            return value;
        }
    }
    return null;
}
