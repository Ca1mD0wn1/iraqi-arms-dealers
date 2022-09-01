import {getStyle} from "./cssTools.js"

// 运动的封装
// 参数：
//   dom元素
//   起始值
//   结束值
//   方向
//   步长
//   时间间隔
//   属性名

let movement = function(dom,begin,end,direction,step,timeSpace,attr,cb){
    let currvalue = begin;
    // setInterval()的返回值是数字（定时器编号）
    let myTimer = setInterval(function () {
        currvalue += direction*step;
        if (direction==1?currvalue >= end:currvalue <= end) {
            currvalue = end;
            clearInterval(myTimer);
            (cb && typeof cb == "function") && cb();
        }
        if(attr=="opacity"){
            dom.style[attr] = currvalue;
        }else{
            dom.style[attr] = currvalue + "px";
        }
    }, timeSpace);
    return myTimer;
}


// 运动的封装（让某个元素从当前位置花多长时间，到什么位置）
// 参数：
//   dom元素
//   属性名
//   结束值
//   时长

// let movement02 = function(dom,attr,end,timeLong,cb){

//     let begin = parseFloat(getStyle(dom,attr));
//     let direction = begin>end?-1:1;

//     // 速度 = Math.abs(begin-end)/timeLong; // 米/秒

//     // 时间间隔
//     let timeSpace = 5;//毫秒，时间间隔取尽量小的数，这样会更加平滑
//     // 步数
//     let stepCount = timeLong/timeSpace;//总时长/时间间隔；
//     let step = Math.abs(begin-end)/stepCount// 距离/步数;    

//     movement(dom,begin,end,direction,step,timeSpace,attr,cb);

// }

let movement02 = function(dom,attr,end,timeLong,cb){
    let begin = parseFloat(getStyle(dom,attr));
    let direction = begin>end?-1:1;

    // 速度 = Math.abs(begin-end)/timeLong; // 米/秒

    // 时间间隔
    let timeSpace = 5;//毫秒，时间间隔取尽量小的数，这样会更加平滑
    // 步数
    let stepCount = timeLong/timeSpace;//总时长/时间间隔；
    let step = Math.abs(begin-end)/stepCount// 距离/步数;    

    movement(dom,begin,end,direction,step,timeSpace,attr,cb);

}

// 淡出
function fadeOut(dom,timeLong,end){
    end = end || 0;
    movement02(dom,"opacity",end,timeLong);
}

// 淡入
function fadeIn(dom,timeLong,end){
    end = end || 1;
    movement02(dom,"opacity",end,timeLong);
}

// 两个元素的淡入淡出；
export function fadeInOut(domIn,domOut,timeLong){

    let opacity = 0;
     // 时间间隔
     let timeSpace = 5;//毫秒，时间间隔取尽量小的数，这样会更加平滑
     // 步数
     let stepCount = timeLong/timeSpace;//总时长/时间间隔；
     let step = 1/stepCount // 距离/步数;    
 

    let myTimer = setInterval(function(){
        // 1、计算数据
        opacity += step;

        if(opacity>=1){
            opacity=1;
            clearInterval(myTimer);
        }

        // 2、改变外观
        domIn.style.opacity = opacity;
        domOut.style.opacity = 1-opacity;

    },timeSpace)

}


// 两个元素的滑入滑出（左滑）；
function slideInOut(domIn,domOut,timeLong,width){

    let left = 0;
     // 时间间隔
     let timeSpace = 5;//毫秒，时间间隔取尽量小的数，这样会更加平滑
     // 步数
     let stepCount = timeLong/timeSpace;//总时长/时间间隔；
     let step = width/stepCount // 距离/步数;     

    let myTimer = setInterval(function(){
        // 1、计算数据
        left -= step;

        if(left<=-width){
            left = -width;
            clearInterval(myTimer);
        }

        // 2、改变外观
        domOut.style.left = left+"px";
        domIn.style.left = (left+width)+"px";

    },timeSpace)

}



// 多属性运动
// 参数：
//   dom元素
//   属性和结束值组成的json对象
//   时长


// movement03(box,{
//     width:200,
//     height:300,
//     opacity:0.2
// },2000)

function movement03(dom,ends,timeLong,cb){
   
    // let begin = parseFloat(getStyle(dom,attr));
    let begins = {};
    for(let key in ends){// key="width"
        begins[key] = parseFloat(getStyle(dom,key));
    }

    // let direction = begin>end?-1:1;
    let directions = {};
    for(let key in ends){// key="width"
        directions[key] = begins[key]>ends[key]?-1:1;
    }

    // 速度 = Math.abs(begin-end)/timeLong; // 米/秒

    // 时间间隔
    let timeSpace = 5;//毫秒，时间间隔取尽量小的数，这样会更加平滑
    // 步数
    let stepCount = timeLong/timeSpace;//总时长/时间间隔；

    // let step = Math.abs(begin-end)/stepCount// 距离/步数;    
    let steps = {};
    for(let key in ends){// key="width"
        steps[key] = Math.abs(begins[key]-ends[key])/stepCount;
    }


    // let currvalue = begin;
    let currvalues = {...begins};
    // for(let key in ends){// key="width"
    //     currvalues[key] = begins[key];
    // }

    // setInterval()的返回值是数字（定时器编号）
    let myTimer = setInterval(function () {

        // currvalue += direction*step;
        for(let key in ends){
            currvalues[key] += directions[key]*steps[key]
        }

        for(let key in ends){
            if (directions[key]==1?currvalues[key] >= ends[key]:currvalues[key] <= ends[key]) {            
                currvalues[key] = ends[key];    
                myTimer && clearInterval(myTimer);
                myTimer = undefined;                
            }
        }

        !myTimer && (cb && typeof cb == "function") && cb();

        for(let key in ends){
            if(key=="opacity"){
                dom.style[key] = currvalues[key];
            }else{
                dom.style[key] = currvalues[key] + "px";
            }
        }
        
    }, timeSpace);
    return myTimer;
}



 // 圆周运动
// 参数
// 转圈的dom
// 时间间隔
// 半径
// 

function circleRun(dom, timespace, r) {
    // 角度
    let degree = 0;
    
    myTimer = setInterval(function () {
        // 一、逻辑
        // 1、运算
        degree = (degree + 1) % 360;
        let hu = degree * Math.PI / 180;
        let left1 = r * Math.sin(hu);
        let top1 = - r * Math.cos(hu);

        // 二、外观
        dom.style.left = left1 + "px";
        dom.style.top = top1 + "px";

    }, timespace)

}