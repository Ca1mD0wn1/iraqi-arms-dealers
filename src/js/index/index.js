import "../../css/index/index.css";
import { Carousel } from "./module/Carousel.js"


let c1 = new Carousel({
    box: document.getElementById("slideshow_top"),
    imgs: [
        "./images/index/banner/banner01_01.jpg",
        "./images/index/banner/banner01_02.jpg",
        "./images/index/banner/banner01_03.jpg",
        "./images/index/banner/banner01_04.jpg",
        "./images/index/banner/banner01_05.jpg",
    ],
    douSize: 10,
    douColor: "skyblue",
    douHighColor: "blue",
    douIsCircle: true,
    urls: [
        "https://www.baidu.com"
    ]
})

let c2 = new Carousel({
    box: document.getElementById("bot_left"),
    imgs: [
        "./images/index/banner/banner02_01.jpg",
        "./images/index/banner/banner02_02.jpg",
        "./images/index/banner/banner02_03.jpg",
        "./images/index/banner/banner02_04.jpg",
        "./images/index/banner/banner02_05.jpg",
    ],
    douSize: 0,

    timeSpace: 3000
})
let c3 = new Carousel({
    box: document.getElementById("bot_right"),
    imgs: [
        "./images/index/banner/banner02_05.jpg",
        "./images/index/banner/banner02_04.jpg",
        "./images/index/banner/banner02_03.jpg",
        "./images/index/banner/banner02_02.jpg",
        "./images/index/banner/banner02_01.jpg",
    ],
    douSize: 0,
    timeSpace: 3000
})

c1.autoplay();
c2.autoplay();
c3.autoplay();
