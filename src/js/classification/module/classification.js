import Goods from './Index';
import ajax from './ajaxTools';
import { Path } from '../../commont/commont';


// 用户名
let username = document.getElementById('username');
username.innerHTML = getData('username');

if (!window.sessionStorage.getItem('token')) {
    window.location.href = 'http://127.0.0.1:8082/login.html';
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

let str = `token=${window.sessionStorage.getItem('token')}`;


let mainCenter = document.getElementById('mainCenter');
let comment = document.getElementById('comment');
let ascend = document.getElementById('ascending');
let descend = document.getElementById('descending');
let start = document.getElementById('start');
let end = document.getElementById('end');
let itemLi = document.querySelector('#itemLi').children;

window.onload = function () {
    for (let i = 0; i < itemLi.length; i++) {
        itemLi[i].addEventListener('click', function () {
            for (let j = 0; j < itemLi.length; j++) {
                itemLi[j].style.backgroundColor = '#FFF';
            }
            this.style.backgroundColor = '#e4393c';
        })
    }
    ajax(Path + '/class', 'post', str, comprehensive, true);
    comment.onclick = commentHandler;
    ascend.onclick = sortHandler;
    descend.onclick = sortHandler;
    end.onblur = endHandler;
};

// 获取综合数据

function comprehensive(result) {
    result.forEach(item => {
        item.list = JSON.parse(item.list);
        item.icons = JSON.parse(item.icons);
        new Goods({
            container: "#mainCenter",
            data: item
        });
    });
}
// 评论排序
function commentHandler() {
    mainCenter.innerHTML = '';
    ajax(Path + '/class/comment', 'post', str, function (result) {
        result.forEach(item => {
            item.list = JSON.parse(item.list);
            item.icons = JSON.parse(item.icons);
            new Goods({
                container: "#mainCenter",
                data: item
            });
        });
    }, true);

}

// 价格排序
function sortHandler(e) {
    mainCenter.innerHTML = '';
    let flag = '';
    if (e.target.id == 'ascending') {
        flag = false;
    } else if (e.target.id == 'descending') {
        flag = true;
    }
    ajax(Path + '/class/sort', 'post', str + `&flag=${flag}`, function (result) {
        result.forEach(item => {
            item.list = JSON.parse(item.list);
            item.icons = JSON.parse(item.icons);
            new Goods({
                container: "#mainCenter",
                data: item
            });
        });
    }, true);

}

// 价格区间
function endHandler(e) {
    mainCenter.innerHTML = '';
    let startNum = start.value;
    let endNum = end.value;
    ajax(Path + '/class/section', 'post', str + `&start=${startNum}&end=${endNum}`, function (result) {
        console.log(result);
        result.forEach(item => {
            item.list = JSON.parse(item.list);
            item.icons = JSON.parse(item.icons);
            new Goods({
                container: "#mainCenter",
                data: item
            });
        });
    }, true);

}





