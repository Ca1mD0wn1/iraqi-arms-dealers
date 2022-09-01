import { fadeInOut } from "./movergp.js"

// 1、项目中有哪些类：轮播图
export class Carousel {
    constructor(obj) {

        // 属性：
        let defautObj = {
            box: undefined,
            imgBox: undefined,//图片容器标签
            imgDoms: [],//所有的图片标签
            liDoms: [],//所有的li标签
            imgs: [],
            urls: [],

            douSize: 10,
            douColor: "pink",
            douHighColor: "red",
            douIsCircle: true,
            pos: "bottom",

            myTimer: undefined,
            timeSpace: 2000,
            currIndex: 0

        }

        // 1、初始化数据
        for (let key in defautObj) {
            this[key] = (obj[key] !== undefined) ? obj[key] : defautObj[key];
        }

        // 2、初始化UI
        this.render();

        // 3、初始化事件
        this.addEvent();

        this.autoplay();

    }

    // 动态创建dom
    render() {

        // 一、轮播的图片
        // 1、容器
        this.imgBox = document.createElement("div");
        this.imgBox.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
        `

        // 2、图片
        this.imgs.forEach((item, index) => {
            let imgDom = document.createElement("img");
            imgDom.src = item;
            imgDom.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                opacity: ${index == 0 ? 1 : 0};
            `;
            this.imgBox.appendChild(imgDom);//当前创建的标签作为父盒子的子元素
            this.imgDoms.push(imgDom);//当前创建的图片标签，存储在数组
        });
        this.box.appendChild(this.imgBox);

        // 二、分页器：
        // 1、容器：
        let douBox = document.createElement("ul");
        douBox.style.cssText = `
                position: absolute;
                left: 50%;
                bottom: 20px;
                transform: translateX(-50%);
                width: ${(this.imgs.length * 2 + 1) * this.douSize}px;
                height: ${this.douSize * 3}px;                       
                border-radius: 10px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                z-index: 999;                
        `;

        // 2、分页器：
        this.imgs.forEach((item, index) => {
            let dou = document.createElement("li");
            dou.style.cssText = `
                width: ${this.douSize}px;
                height: ${this.douSize}px;
                border-radius: ${this.douIsCircle ? 50 : 0}%;
                background-color: ${index == 0 ? this.douHighColor : this.douColor};
            `
            douBox.appendChild(dou);
            this.liDoms.push(dou);
        })

        this.box.appendChild(douBox);

    }

    // 添加事件
    addEvent() {
        // 2、点击分页器，切换到对应的图片上
        for (let i = 0; i < this.liDoms.length; i++) {
            this.liDoms[i].onclick = () => {
                this.goImg(i);
            }
        }
        // 3、鼠标移入 停止播放
        this.box.addEventListener("mouseenter", () => {
            window.clearInterval(this.myTimer);
        });

        // 4、鼠标离开 继续播放
        this.box.addEventListener("mouseleave", () => {
            this.autoplay()
        });

        // 6、点击图片跳转页面
        this.imgBox.onclick = () => {
            this.goUrl();
        };

        // 窗口失去焦点暂停播放
        window.addEventListener("blur", () => {
            console.log("失焦");
            window.clearInterval(this.myTimer);
        })

        // 窗口获得焦点继续播放
        window.addEventListener("focus", () => {
            console.log("获的焦点");
            this.autoplay();
        })
    }

    autoplay() {
        this.myTimer = setInterval(() => {
            this.goImg(this.currIndex + 1);
        }, this.timeSpace)
    }

    goImg(index) {
        // 一、逻辑
        // 1、计算
        let preIndex = this.currIndex;//前一张的下标
        this.currIndex = index;

        // 2、边界判断
        if (this.currIndex > this.imgs.length - 1) {
            this.currIndex = 0;
        } else if (this.currIndex < 0) {
            this.currIndex = this.imgs.length - 1;
        }

        // 二、外观
        // 1、换图片

        fadeInOut(this.imgDoms[this.currIndex], this.imgDoms[preIndex], 500);

        // 2、换豆豆
        this.liDoms[preIndex].style.backgroundColor = this.douColor;
        this.liDoms[this.currIndex].style.backgroundColor = this.douHighColor;

    }

    goUrl() {
        if (this.urls.length > 0) {
            location.href = this.urls[this.currIndex];
        }
    }

}