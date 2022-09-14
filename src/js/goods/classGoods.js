export default
    class Goods {
    constructor(obj) {
        for (let key in obj) {
            this[key] = obj[key];
        }
        this.dom;
        this.button;
        this.render();
        this.addEvent();

    }

    render() {
        this.dom = document.createElement("div");
        this.dom.id = this.goods_name;
        this.dom.style.cssText = `
            border-radius:20px;
            position: relative;
            margin:35px auto;
            height: 150px;
            width: 1200px;
            background-color: #f2f2f2;
            `;


        let img = document.createElement("img");
        img.src = `./images/goods/${this.goods_img_src}`;
        img.style.cssText = `
            position: absolute;
            width:250px; 
            height:120px;
            bottom: 10px;
            left: 190px;
            `;


        let span = document.createElement("span");
        span.innerHTML = this.goods_name;
        span.style.cssText = `
            position: absolute;
            top: 25px;
            left: 25px;
            font-size:25px;
            `;


        let p = document.createElement("p");
        p.innerHTML = this.goods_describe;
        p.style.cssText = `
            position: absolute;
            width: 500px;
            font-size:15px;
            right:50px;
            top: 15px;
            margin:0;
            word-wrap:break-word;`;

        let li = document.createElement("li");
        li.style.cssText = `
        transform:rotate(-35deg);
        background-color:pink;
            position: absolute;
            top: 50px;
            left: 450px;
            font-size:40px;
            color:green;
            list-style:none`;
        li.innerHTML = '$' + this.goods_price;


        this.button = document.createElement("ul");
        this.button.innerHTML = "点击查看详情";
        this.button.style.cssText = `
            color:green;
            position: absolute;
            bottom: 15px;
            right: 15px;
            font-size:25px`;


        this.dom.appendChild(img)
        this.dom.appendChild(span);
        this.dom.appendChild(p);
        this.dom.appendChild(li);
        this.dom.appendChild(this.button);
        document.body.append(this.dom);
    }
    addEvent() {
        let id = this.goods_id;
        this.button.onclick = () => {
            sessionStorage.setItem("id", id);
            console.log(sessionStorage.getItem("id"));
            window.open("./describe.html");
        }
    }
}

