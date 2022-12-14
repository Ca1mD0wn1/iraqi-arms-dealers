import "../../css/index/swiper-bundle.min.css";
import "../../css/index/sale.css";
import { Path } from '../commont/commont';
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

window.onload = function () {
  let xhr = new XMLHttpRequest;
  xhr.open("post", Path + "/sale");
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  let str = `token=${window.sessionStorage.getItem('token')}`;
  xhr.send(str);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      if (data.status == 'success') {
        let ulDom = document.createElement('ul');
        ulDom.className = 'goods_sale';
        let strHtml = '';
        for (let i = 0; i < 6; i++) {
          strHtml += `
                        <li class="goods_${data.data[i].goods_id}">
                            <a href="javascript:;">
                                <img src="./images/goods/${data.data[i].goods_img_src}" alt="">
                                <p class="five">全场五折起</p>
                            </a>
                            
                        </li>
                    `;
        }
        ulDom.innerHTML = strHtml;
        document.querySelector('.center_goods').appendChild(ulDom);

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
      }
    }
  };
  // 显示隐藏登录注册按钮
  let login = document.getElementById('login');
  let check = document.getElementById('check');
  let userLogin = document.getElementById('userLogin');

  let username = getData('username');
  if (username) {
    login.style.display = 'none';
    check.style.display = 'none';
    userLogin.innerHTML = username;
  }
};
