export default class BigMirror {

    // 定义的是静态的属性
    static count = 0;//记录放大镜被创建了多少次；

    constructor(obj) {

        BigMirror.count++;

        // 属性

        let defaultObj = {
            selector: "",
            imgBox: undefined,
            mirror: undefined,
            show: undefined,
            img: "",
            boxLeft: undefined,
            boxTop: undefined,
            boxWidth: undefined,
            boxHeight: undefined,
            mirrorWidth: 80,
            mirrorHeight: 80,
            mirrorColor: "pink",
            opacity: 0.5,
            multiple: 3
        }
        // 1、外部传入的数据
        for (let key in defaultObj) {
            this[key] = obj[key] == undefined ? defaultObj[key] : obj[key];
        }


        // 2、内部需要处理的数据
        this.selector = this.imgBox;
        if (typeof this.imgBox == "string") {
            this.imgBox = document.querySelector(this.imgBox);
        }
        let rect = this.imgBox.getBoundingClientRect();

        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

        this.boxLeft = rect.left + scrollLeft;
        this.boxTop = rect.top + scrollTop;

        this.boxWidth = this.imgBox.offsetWidth;
        this.boxHeight = this.imgBox.offsetHeight;

        this.setStyle();//样式
        this.render();//html
        this.addEvent();//事件（js）
    }


    setStyle() {
        let css = `
                ${this.selector} .mirror{
                    position:absolute;
                    left:-15000000px;
                    top:-1000000px;
                    width: ${this.mirrorWidth}px;
                    height: ${this.mirrorHeight}px;
                    background-color: ${this.mirrorColor};
                    opacity: ${this.opacity};
                }

                ${this.selector} .show{
                    position:absolute;
                    left:${this.boxWidth + 10}px;
                    top:0px;
                    width: ${this.mirrorWidth * this.multiple}px;
                    height: ${this.mirrorHeight * this.multiple}px;                    
                    background-image: url(${this.img});
                    background-size:${this.boxWidth * this.multiple}px ${this.boxHeight * this.multiple}px;
                    display: none;
                }
        `
        Uitls.setStyle(css, "BigMirror-" + BigMirror.count);

    }

    render() {
        this.imgBox.innerHTML = `
                <div class="mirror"></div>
                <div class="show"></div>
        `;

        this.mirror = this.imgBox.querySelector(".mirror");
        this.show = this.imgBox.querySelector(".show");

    }

    addEvent() {
        this.imgBox.addEventListener("mousemove", this.mousemoveHandle);
        this.imgBox.addEventListener("mouseenter", this.mouseenterHandle);
        this.imgBox.addEventListener("mouseleave", this.mouseleaveHandle);
    }

    mouseenterHandle = () => {
        this.show.style.display = "block";
    }

    mouseleaveHandle = () => {
        this.mirror.style.left = "-100000px";
        this.show.style.display = "none";
    }

    mousemoveHandle = (event) => {
        let e = event || window.event;
        //一、逻辑
        // 1、计算放大镜的坐标

        let left = e.pageX - this.boxLeft - this.mirrorWidth / 2;
        let top = e.pageY - this.boxTop - this.mirrorHeight / 2;

        // 2、判断边界
        if (left <= 0) {
            left = 0;
        } else if (left > this.boxWidth - this.mirrorWidth) {
            left = this.boxWidth - this.mirrorWidth
        }
        if (top <= 0) {
            top = 0;
        } else if (top > this.boxHeight - this.mirrorHeight) {
            top = this.boxHeight - this.mirrorHeight
        }

        // 二、外观

        this.mirror.style.left = left + "px";
        this.mirror.style.top = top + "px";

        this.show.style.backgroundPosition = `-${this.multiple * left}px -${this.multiple * top}px`;

    }

}


class Uitls {

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