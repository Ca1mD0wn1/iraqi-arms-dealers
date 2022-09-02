// 功能：购物车
// 参数： 父元素  商品信息
import cookieUlits from './cookieUlits.js';
import Utils from './Utils.js';
export class shopCar {
    constructor(obj) {
        let defaultObj = {
            dom: undefined,
            data: undefined,
            checked: [],
            jia: [],
            jian: [],
            remove: [],
            countNum: [],
            count: [],
            allMoney: 0,
            item: [],
        }
        for (let k in defaultObj) {
            this[k] = obj[k] ? obj[k] : defaultObj[k];
        }

        this.dom = this.dom ? document.querySelector(this.dom) : '';
        this.allBtn = document.querySelector('#allBtn');
        this.allPrice = document.querySelector('.allPrice');
        this.countAll = document.querySelector('#count');
        // 渲染页面
        this.render();
        this.countAll.innerHTML = this.dom.children.length;


        // 事件绑定
        this.addEvent();

        this.addCookie();
    }
    // 渲染页面
    render() {
        for (let i = 0; i < this.data.length; i++) {

            // count:默认值：1
            this.countNum.push(1);

            let itemDom = document.createElement('div');
            itemDom.className = 'item';
            this.item.push(itemDom);


            this.topDom = document.createElement('div');
            this.topDom.className = 'top';
            this.topDom.innerHTML = '店铺：凡物设计';


            let inputDom = document.createElement('input');
            inputDom.type = 'checkbox';
            this.checked.push(inputDom);
            this.topDom.appendChild(inputDom);



            this.shopItemDom = document.createElement('div');
            this.shopItemDom.className = 'shopItem';

            this.topDom1 = document.createElement('div');
            this.topDom1.className = 'top';
            this.topDom1.innerHTML = '每满200减20,可跨店';

            this.imgDom = document.createElement('img');
            this.imgDom.src = '../../../../public/images/shopCar/manjian.png';
            this.topDom1.appendChild(this.imgDom);


            this.bottomDom = document.createElement('div');
            this.bottomDom.className = 'bottom';

            this.imgDom1 = document.createElement('img');
            this.imgDom1.src = '../../../../public/images/goods/' + this.data[i].goods_img_src;

            this.pDom = document.createElement('p');
            this.pDom.innerHTML = this.data[i].goods_describe;

            this.danjiaDom = document.createElement('div');
            this.danjiaDom.className = 'danjia'
            this.danjiaDom.innerHTML = '￥' + this.data[i].goods_price;

            this.countDom = document.createElement('div');
            this.countDom.className = 'count';

            let jiaDom = document.createElement('span');
            this.jia.push(jiaDom)
            jiaDom.className = 'jia';
            jiaDom.innerHTML = '+';

            let numDom = document.createElement('span');
            numDom.className = 'num';
            this.count.push(numDom);
            numDom.innerHTML = this.countNum[i];

            let jianDom = document.createElement('span');
            this.jian.push(jianDom);
            jianDom.className = 'jian';
            jianDom.innerHTML = '-';

            this.countDom.appendChild(jiaDom);
            this.countDom.appendChild(numDom);
            this.countDom.appendChild(jianDom);

            this.priceDom = document.createElement('span');
            this.priceDom.className = 'price';
            this.priceDom.innerHTML = '￥' + this.countNum[i] * this.data[i].goods_price;

            let deleteDom = document.createElement('span');
            this.remove.push(deleteDom);
            deleteDom.className = 'delete';
            deleteDom.innerHTML = '移入收藏夹<br>删除';

            this.bottomDom.appendChild(this.imgDom1);
            this.bottomDom.appendChild(this.pDom);
            this.bottomDom.appendChild(this.danjiaDom);
            this.bottomDom.appendChild(this.countDom);
            this.bottomDom.appendChild(this.priceDom);
            this.bottomDom.appendChild(deleteDom);

            this.shopItemDom.appendChild(this.topDom1);
            this.shopItemDom.appendChild(this.bottomDom);

            itemDom.appendChild(this.topDom);
            itemDom.appendChild(this.shopItemDom);
            this.dom.appendChild(itemDom);
            // 加入css样式
            Utils.setStyle(`.main .shopCar .item .top {
  height: 38px;
}
.main .shopCar .item .top input {
  vertical-align: baseline;
  margin-right: 10px;
}
.main .shopCar .item .shopItem {
  margin-left: 15px;
  width: 1140px;
  height: 170px;
  border-radius: 30px;
  background-color: #ece8e8;
}
.main .shopCar .item .shopItem .top {
  padding-left: 100px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #8a8888;
}
.main .shopCar .item .shopItem .top img {
  width: 56px;
  height: 16px;
}
.main .shopCar .item .shopItem .bottom {
  height: 120px;
}
.main .shopCar .item .shopItem .bottom img {
  float: left;
  margin-left: 20px;
  margin-top: 15px;
  width: 80px;
  height: 80px;
}
.main .shopCar .item .shopItem .bottom p {
  float: left;
  margin-left: 20px;
  margin-top: 23px;
  width: 239px;
  height: 36px;
  font-size: 12px;
  color: #3c3c3c;
}
.main .shopCar .item .shopItem .bottom .danjia {
  float: left;
  margin-top: 43px;
  margin-left: 164px;
  font-size: 16px;
  color: #3c3c3c;
}
.main .shopCar .item .shopItem .bottom .count {
  float: left;
  margin-top: 43px;
  margin-left: 80px;
  font-size: 12px;
}
.main .shopCar .item .shopItem .bottom .count .jia,
.main .shopCar .item .shopItem .bottom .count .jian {
  display: inline-block;
  text-align: center;
  line-height: 25px;
  width: 19px;
  height: 25px;
  background-color: #f0f0f0;
  color: #807e7e;
  vertical-align: baseline;
            cursor: pointer;
}
.main .shopCar .item .shopItem .bottom .count .num {
  display: inline-block;
  width: 41px;
  height: 25px;
  background-color: #fff;
  text-align: center;
  line-height: 25px;
}
.main .shopCar .item .shopItem .bottom .price {
  display: inline-block;
  margin-top: 30px;
  margin-left: 50px;
}
.main .shopCar .item .shopItem .bottom .delete {
  display: inline-block;
  width: 77px;
  height: 30px;
  padding-top: 30px;
  padding-left: 66px;
    cursor: pointer;
}
`, 'aaa')

        }
    }



    // 事件绑定
    addEvent() {
        // 全选按钮
        this.allBtn.onclick = () => {
            this.allChoice();
        }
        // 单个按钮
        for (let i = 0; i < this.checked.length; i++) {
            this.checked[i].onclick = () => {
                if (!this.checked[i].checked) {
                    this.allBtn.checked = '';
                }
                this.allMoney += this.addMoney(i);
                this.allPrice.innerHTML = this.allMoney.toFixed(2);
            }
            // 数量加
            this.jia[i].onclick = () => {
                if (this.checked[i].checked) {
                    this.count[i].innerHTML = ++this.countNum[i];
                    this.allMoney += this.numMoney(i, 1);
                    this.allPrice.innerHTML = this.allMoney.toFixed(2);
                }
                // this.replaceCookie(i);
            }
            // 数量减
            this.jian[i].onclick = () => {
                if (this.checked[i].checked) {
                    this.count[i].innerHTML = (this.countNum[i] >= 0 ? --this.countNum[i] : 0) > 0 ? (this.countNum[i] >= 0 ? --this.countNum[i] : 0) : 0;
                    this.allMoney += this.numMoney(i, -1);
                    this.allPrice.innerHTML = this.allMoney.toFixed(2);
                }
                // this.replaceCookie(i);
            }
            // 移除
            this.remove[i].onclick = () => {
                this.dom.removeChild(this.remove[i].parentNode.parentNode.parentNode);
                if (this.checked[i].checked) {
                    this.allMoney -= this.data[i].goods_price * this.countNum[i];
                    this.allPrice.innerHTML = this.allMoney.toFixed(2);
                }
                this.countAll.innerHTML = this.dom.children.length;
            }
        }
    }

    // 全选按钮让 item 全选
    allChoice() {
        if (this.allBtn.checked) {
            for (let i = 0; i < this.checked.length; i++) {
                if (this.checked[i].checked) {
                    break;
                }
                this.checked[i].checked = 'true';
                this.allMoney += this.addMoney(i);
            }
            this.allPrice.innerHTML = this.allMoney.toFixed(2);
        } else {
            return;
        }
    }

    // 把钱的数量加起来
    addMoney(i) {

        if (this.checked[i].checked) {
            return this.data[i].goods_price * this.countNum[i];
        } else {
            return this.data[i].goods_price * this.countNum[i] * -1;
        }
    }

    // 根据数量计算钱数
    numMoney(i, num) {
        if (this.countNum[i] < 0) {
            return 0;
        }
        if (num == 1) {
            return this.data[i].goods_price;
        } else {
            return this.data[i].goods_price * -1;

        }

    }

    addCookie() {
        let allPrice = 0;
        for (let i = 0; i < this.data.length; i++) {
            allPrice += this.data[i].goods_price;
            cookieUlits.saveData({
                key: `shopCar${i + 1}`,
                value: `商品编号${this.data[i].id + 1},商品名称${this.data[i].name},商品价格${this.data[i].price},商品数量${this.countNum[i]}`,
                date: 30,
            })
        }
        // cookieUlits.saveData({
        //     key: 'allPrice',
        //     value: allPrice,
        //     date: 30
        // })
    }

    replaceCookie(i) {
        cookieUlits.saveData({
            key: `shopCar${i + 1}`,
            value: `商品编号${this.data[i].id + 1},商品名称${this.data[i].name},商品价格${this.goods[i].price},商品数量${this.countNum[i]}`,
            date: 30,
        })
        cookieUlits.saveData({
            key: 'allPrice',
            value: this.allPrice,
            date: 30
        })
    }

}
