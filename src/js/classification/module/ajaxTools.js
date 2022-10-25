
// 功能：前后端交互
// 参数：
//    请求地址
//    请求方式
//    请求参数: key1=value1&key2=value2
//    返回值？？
//    是否异步

// 返回值：xhr对象

export default function ajax(url, method, params, callback, isAsync) {
    let xhr = new XMLHttpRequest();

    let urlAndPrams = url;
    if (method.toLowerCase() == "get") {
        urlAndPrams += "?" + params
    }
    xhr.open(method, urlAndPrams, isAsync);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(JSON.parse(xhr.responseText).status);
        }
    }

    if (method.toLowerCase() == "get") {
        xhr.send();
    } else {
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }

    return xhr;
}


