import "../../css/index/swiper-bundle.min.css";
import "../../css/index/sale.css";
const Swiper = require("./swiper-bundle.min.js");


var mySwiper = new Swiper('.swiper', {
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
document.querySelector(".goods_1").onclick = function () {
    sessionStorage.setItem("id", 1);
    window.open("describe.html");
};
document.querySelector(".goods_2").onclick = function () {
    sessionStorage.setItem("id", 2);
    window.open("describe.html");
};
document.querySelector(".goods_3").onclick = function () {
    sessionStorage.setItem("id", 3);
    window.open("describe.html");
};
document.querySelector(".goods_4").onclick = function () {
    sessionStorage.setItem("id", 4);
    window.open("describe.html");
};
document.querySelector(".goods_5").onclick = function () {
    sessionStorage.setItem("id", 5);
    window.open("describe.html");
};
document.querySelector(".goods_6").onclick = function () {
    sessionStorage.setItem("id", 6);
    window.open("describe.html");
};