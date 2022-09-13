
export default class Uitls {

    static setStyle(cssStr, id) {
        // 1、创建style标签
        let myStyle = document.createElement("style");
        myStyle.id = id;
        document.head.appendChild(myStyle);

        // 2、获取最后一个style标签（就是自己创建的）
        let lastStyle = document.styleSheets[document.styleSheets.length - 1];

        // 3、添加样式代码

        let cssArr = cssStr.trim().split(/(?<=\})\s+/g);

        cssArr.forEach(item => {
            lastStyle.insertRule(item, lastStyle.cssRules.length);
        })
    }

}

export function getGoodId(method, path, str) {

    let xhr = new XMLHttpRequest();
    if (method == 'get') {
        xhr.open(method, path + str, true);
    }
    xhr.open(method, path, true);

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let result = JSON.parse(xhr.responseText);
            console.log(result);
        }
        if (method == 'get') {
            xhr.send();
        }
        xhr.send(str);
    }
}