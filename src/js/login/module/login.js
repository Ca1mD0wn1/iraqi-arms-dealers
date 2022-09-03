let msg = document.getElementById('msg');
let login = document.getElementById('login');
let error = document.querySelector('.error');
let txt = document.querySelector('.txt');
let username = document.getElementById('username');
let userpass = document.getElementById('userpass');

let date = '0';
error.onclick = function () {
    msg.style.display = 'none';
}
login.onclick = function () {
    if (username.value.trim() == '' || userpass.value.trim() == '') {
        msg.style.display = 'block';
        txt.style.color = 'red';
        txt.innerHTML = '请填写表单';
        return;
    }
    username = username.value;
    userpass = userpass.value;

    // 验证数据库
    // let xhr = new XMLHttpRequest();

    // xhr.open('post', 'login', true);

    // xhr.onreadystatechange = () => {
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //         if (xhr.responseText == 'fail') {
    //             msg.style.display = 'block';
    //             txt.style.color = 'red';
    //             txt.innerHTML = '输入错误';
    //             return;
    //         } else if (xhr.responseText == 'success') {
    //             if (ipts[2].checked) {
    //                 date = 7;
    //             }
    //             // if (username == 'admin' && userpass == '123456') {
    //             cookieUlits.saveData({
    //                 key: 'username',
    //                 value: username,
    //                 date: date
    //             })
    //             location.href = './index.html';
    //             // }
    //         }
    //     }
    // }

    // // post请求方式，得设置请求头。content-type表示发送给后端的数据类型
    // xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    // let str = `username=${username}&userpass=${userpass}`;
    // xhr.send(str);



}




class cookieUlits {
    static saveData(obj) {
        let defaultObj = {
            key: '',
            value: '',
            date: 7,
            path: '/',
            domain: ''
        };
        for (let k in defaultObj) {
            defaultObj[k] = obj[k] ? obj[k] : defaultObj[k];
        }
        let d = new Date();
        d.setDate(d.getDate() + (defaultObj.date - 0));
        let str = `${defaultObj.key}=${defaultObj.value};expires=${d.toGMTString()};path=${defaultObj.path};`
        defaultObj.domain ? str += `domain=${defaultObj.domain}` : '';
        document.cookie = str;
    }
    static getData(k) {
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
    static delData(key) {
        this.saveData({
            key,
            value: '',
            date: -1
        })
    }
}