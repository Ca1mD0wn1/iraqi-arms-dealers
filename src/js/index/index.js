import "../../css/index/index.css";
import "../../css/index/swiper-bundle.min.css";
const Swiper = require("./swiper-bundle.min.js");


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
// getFourGoods();
function getFourGoods() {
    let ulDom = document.createElement('ul');
    let strHtml = '';
    ulDom.className = 'good_item';
    for (let i = 0; i < 4; i++) {
        strHtml += `
        <li>
            <div class="goods">
                <div class="iconImg">
                    <img src="./images/goods/describeQBZ191.png">
                </div>
                <div class="priceCon">
                    $<i>1200.00</i>
                </div>
                <div class="titleCon">
                    <span class="titleIcon">QBZ95</span>
                    <a href="#">QBZ-191自动步枪</a>
                </div>
            </div>
        </li>
        `;
    }
    console.log(strHtml);
    ulDom.innerHTML = strHtml;
    document.querySelector('.center_goods').appendChild(ulDom);
}