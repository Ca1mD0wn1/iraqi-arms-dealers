export default class cookieUlits {
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