

// 功能：获取dom元素的样式属性
// 参数：
//    dom元素
//    样式属性名

// 返回值:样式属性名对应的值

export function getStyle(dom,attribute){
    if(dom.currentStyle){
        return dom.currentStyle[attribute];
    }else{
        return window.getComputedStyle(dom)[attribute];
    }
}
