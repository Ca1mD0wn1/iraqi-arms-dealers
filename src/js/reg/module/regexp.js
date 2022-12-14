import { Path } from '../../commont/commont';
let username = document.getElementById('username');
let userpass = document.getElementById('userpass');
let userpass2 = document.getElementById('userpass2');
let btn = document.getElementById('btn');
let msg4 = document.getElementById('msg4');
let error = document.querySelector('.error');
let txt = document.querySelector('.txt');

let flag = false;
// 验证用户名
error.onclick = function () {
    msg4.style.display = 'none';
}
let path = Path;
username.onblur = function () {
    let str = this.value;
    // 判断非空
    if (str.trim() == '') {
        msg4.style.display = 'block';
        txt.innerText = '请输入用户名';
        txt.style.color = 'red';
        return;
    }
    // 判断是否满足正则
    if (!reg('userName', str)) {
        msg4.style.display = 'block';
        txt.innerHTML = '数字字母下划线，以大写字母开头';
        txt.style.color = 'red';
        return;
    }
    // 判断是否被占用
    let xhr = new XMLHttpRequest();

    xhr.open('get', path + '/check?username=' + str, true);

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let result = JSON.parse(xhr.responseText);
            if (result.status == 'fail') {
                msg4.style.display = 'block';
                txt.innerHTML = '您输入的用户名已被占用';
            } else if (result.status == 'success') {
                flag = true;
            } else {
                msg4.style.display = 'block';
                txt.innerHTML = '您输入的用户名已被占用';
            }
        }
    }
    xhr.send();
}

// 验证密码
userpass.onblur = function () {
    let str = this.value;
    // 判断非空
    if (str.trim() == '') {
        msg4.style.display = 'block';
        txt.innerHTML = '请输入密码';
        txt.style.color = 'red';
        return;
    }
    // 判断是否满足正则
    if (!reg('password', str)) {
        msg4.style.display = 'block';
        txt.style.color = 'red';
        txt.innerHTML = '密码由8到16位字符组成，必须包含数字，字母，大写字母，.';
        return;
    } else {
        txt.style.color = 'green';
        txt.innerHTML = '验证成功';
        flag = true;
    }
}


// 确认密码
userpass2.onblur = function () {
    let str = this.value;
    // 判断非空
    if (str.trim() == '') {
        msg4.style.display = 'block';
        txt.innerHTML = '请输入密码';
        txt.style.color = 'red';
        return;
    }
    // 判断是否满足正则
    if (!reg('password', str)) {
        msg4.style.display = 'block';
        txt.style.color = 'red';
        txt.innerHTML = '密码由8到16位字符组成，必须包含数字，字母，大写字母，.';
        return;
    }

    if (str == userpass.value) {
        msg4.style.color = 'green';
        msg4.innerHTML = '验证成功';
        flag = true;
    } else {
        msg4.style.display = 'block';
        txt.style.color = 'red';
        txt.innerHTML = '两次密码不一致';
    }
}


// 注册
btn.onclick = function () {
    if (!flag) {
        return;
    }

    // 注册
    let xhr = new XMLHttpRequest();

    xhr.open('post', path + `/reg`, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let result = JSON.parse(xhr.responseText);
            if (result.status == 'success') {
                location.href = './login.html'
            } else if (result.status == 'fail') {
                msg4.style.display = 'block';
                txt.style.color = 'red';
                txt.innerHTML = '注册失败';
            }
        }
    }

    // post请求方式，得设置请求头。content-type表示发送给后端的数据类型
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    let str = `username=${username.value}&password=${userpass.value}`;

    xhr.send(str);

}


function reg(type, str) {
    let regObj = {
        youZheng: /^[1-9]\d{5}$/i,
        Zip: /^\w+\.(zip|gz|rar)$/i,
        email: /^\w+@\w+(\.\w+)+$/i,
        ipone: /^1\d{10}$/i,
        Id: /^[1-8][0-9]{16}[0-9\X]$/i,
        date: /(^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$)|(^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$)(^[0-9]{4}\.[0-9]{2}\.[0-9]{2}$)/i,
        nick: /^[\u4e00-\u9fa5]{2,4}$/i,
        userName: /^[A-Z]\w{3,7}$/,  // 4 到 8 位字母数字下划线组成，以大写字母开头 
        password: [
            /^\w{5,13}/,
            /[A-Z]/,
            /\d/,
            /\.+/
        ]
    }
    if (type == 'password') {
        return regObj[type].every(function (item) {
            return item.test(str);
        })
    }
    return regObj[type].test(str);
}