import Utils from './Utils.js';
import cssStr from "./css.js";

export default class Goods {

    constructor(obj) {
        let defaultObj = {
            container: document.body,
            data: {}
        }

        for (let key in defaultObj) {
            this[key] = obj[key] == undefined ? defaultObj[key] : obj[key];
        }

        if (typeof this.container === "string") {
            this.container = document.querySelector(this.container);
        }

        this.data.currIndex = 0;
        this.path = '../../../../public/images/classification/';

        this.setStyle();
        this.render();
        this.addEvent();

    }

    setStyle() {
        Utils.setStyle(cssStr, "goods");
    }
    render() {
        let goods = this.data;
        let htmlStr = `
            <div class="goods">
            <div class="iconImg">
                <img src="${this.path + goods.list[goods.currIndex]?.img}">
            </div>
            <div class="iconList clear">
            ${goods.list.map((item, idx) => {
            return `<img index=${idx} class="icon-img" id="${item.id}" src="${this.path + item.img}" style="${idx == goods.currIndex ? `border-color: red;` : ``}">`
        }).join("")
            }
            </div>
            <div class="priceCon">
                ￥<i>${goods.list[0].price}</i>
            </div>
            <div class="titleCon">
                <span class="titleIcon">京品</span>
                <a href="#">${goods.info}</a>
            </div>
            <div class="info clear">
            </div>
            <div class="judgeCon">
                <span class="judge">${goods.judge}</span>条评论
            </div>
            <div class="shoppingCon">
                <a href="#" class="shopping">${goods.shop}</a><img src="../../../../public/images/classification/img/chat.png">
            </div>
            ${(function () {
                let str = "";
                for (let key in goods?.icons) {
                    // 生成span（icon）
                    str += goods.icons[key]?.map(item => `<span class="${key}">${item}</span>`).join("");
                }
                return str;
            })()}
        </div>
        `
        this.container.innerHTML += htmlStr;
    }

    addEvent() {
        let imgBoxs = this.container.querySelectorAll(".goods .iconList");

        for (let i = 0; i < imgBoxs.length; i++) {
            imgBoxs[i].onmouseover = (event) => {
                let e = event || window.event;
                if (e.target.tagName.toLowerCase() == "img") {
                    e.target.parentNode.previousElementSibling.firstElementChild.src = e.target.src;
                    let imgDoms = e.target.parentNode.children;
                    for (let i = 0; i < imgDoms.length; i++) {
                        imgDoms[i].style.borderColor = "";
                    }
                    e.target.style.borderColor = "red";
                }
            }

        }
    }

}