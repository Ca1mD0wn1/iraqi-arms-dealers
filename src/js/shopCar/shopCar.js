import { shopCar } from './module/shopCar_module.js';
import '../../css/shopCar/common.css';
import '../../css/shopCar/shopCar.css';



if (!window.sessionStorage.getItem('token')) {
    window.location.href = 'http://127.0.0.1:8082/login.html';
}



let arr = [
    {
        "goods_id": 1,
        "history": "中国军方于 2014 年启动了常规布局步枪的开发，多家制造商参与了开发和招标过程。新武器平台的各种原...",
        "design": "与无托式 QBZ-95相比，QBZ-191 采用传统配置，大大改进了人体工程学、灵巧的可用性以及在不...",
        "describe_img_src": "describeQBZ191.png",
        "goods_img_src": "01QBZ191.png",
        "goods_name": "QBZ191",
        "goods_price": 200,
        "goods_describe": "QBZ-191自动步枪是一款由中华人民共和国研制生产的突击步枪。突击步枪型，枪管长14.5英寸（36..."
    },
    {
        "goods_id": 2,
        "history": "95式是中华人民共和国研制的第二种小口径步枪（第一种为87式自动步枪），也是中国人民解放军第一种大规...",
        "design": "95式为无托结构设计，自动方式为导气式，闭锁结构采用了回转式闭锁。快慢机位于枪托上，发射状态可以在单...",
        "describe_img_src": "describeQBZ95.png",
        "goods_img_src": "02QBZ95.png",
        "goods_name": "QBZ95",
        "goods_price": 400,
        "goods_describe": "QBZ-95，QBZ为源自拼音“轻武器—步枪—自动”的类别代码），简称95式。95式自动步枪配用5...."
    },
    {
        "goods_id": 3,
        "history": "在 1979 年中越战争期间，中国捕获了苏联设计的Dragunov 狙击步枪的样品，并将其复制为 7...",
        "design": "QBU-88步枪是一种气动半自动步枪。它利用位于枪管上方的短行程气体活塞和三凸耳旋转螺栓。[4]机芯...",
        "describe_img_src": "describeQUB88.png",
        "goods_img_src": "03QBU88.png",
        "goods_name": "QBU88",
        "goods_price": 900,
        "goods_describe": "88式狙击步枪（QBU-88）是由中国北方工业公司研制的狙击步枪瞄准基线长394毫米，10发弹匣，装..."
    },
    {
        "goods_id": 4,
        "history": "豹2设计始于1960年代末期，由克劳斯-玛菲制造。主要技术源于当时的西德和美国的MBT-70/KPZ...",
        "design": "豹2系列自服役起一直使用MTU873 Ka-501水冷式涡轮增压柴油引擎。这款引擎于1960年代中期...",
        "describe_img_src": "describeHJ_73D.png",
        "goods_img_src": "04HJ_73D.png",
        "goods_name": "HJ-73D",
        "goods_price": 4500,
        "goods_describe": "仿制自苏联9K11 (AT-3“赛格”) 反坦克导弹，于1979年研制成功，列入中国人民解放军制式装..."
    },
    {
        "goods_id": 5,
        "history": "德国在1980年代初期，同英国、意大利开始合作研制SP-70新型自行火炮，用于取代先前各国使用的美制...",
        "design": "德国陆军与威格曼公司展开研究计划的第二阶段开发，进一步签订2.1亿德国马克合同，试制4门样炮进行试验...",
        "describe_img_src": "describePLZ_05.png",
        "goods_img_src": "05PLZ_05.png",
        "goods_name": "PZL05",
        "goods_price": 9960,
        "goods_describe": "PLZ-05 155毫米自行加榴炮是中国人民解放军正式装备的首款155毫米履带式自行火炮，由PLZ-..."
    },
    {
        "goods_id": 6,
        "history": "历史 1958年中华人民共和国第五机械工业部第847厂开始研制。杨荫桐担任火箭弹总设计师。为便于步...",
        "design": "发火装置以电池为电源。使用杀伤半径12.5米的杀伤爆破榴弹，涡轮旋转稳定，火箭弹的尾部有6个火箭喷口...",
        "describe_img_src": "describe63.png",
        "goods_img_src": "06-63.png",
        "goods_name": "63式火箭炮",
        "goods_price": 15000,
        "goods_describe": "63式107毫米轮式火箭炮是中国解放军装备的一款牵引式轻型多管火箭炮。主用于取代二战以来的团级的中、..."
    },
    {
        "goods_id": 7,
        "history": "和苏-27一样，米格-29的历史始于1969年，苏联获知美国空军正在进行“FX”计划（即最终形成F-...",
        "design": "由于设计上的基本参数是来自于TsAGI为PFI项目所进行的运算，米格-29的气动力外型设计与Su-2...",
        "describe_img_src": "07MiG-29.png",
        "goods_img_src": "07MiG-29.png",
        "goods_name": "米格29",
        "goods_price": 96558,
        "goods_describe": "米格-29（俄语：Микоян МиГ-29），苏联米高扬-古列维奇飞机设计局于1970年代设计的双..."
    },
    {
        "goods_id": 8,
        "history": "第零批次第一架歼-20验证机原定于2011年1月7日首次试飞，但由于当天天气不理想，遂改于2011年...",
        "design": "歼-20采用全动鸭翼及垂尾和DSI涵道，拥有多种低可侦测性设计：大致呈五边形的机头及机身横截面、切尖...",
        "describe_img_src": "describeJ-20.png",
        "goods_img_src": "08J-20.png",
        "goods_name": "歼-20",
        "goods_price": 84685,
        "goods_describe": "歼-20（又名J-20、威龙)是成都飞机工业集团生产，装备于中国人民解放军空军的第五代战斗机，采单座..."
    },
    {
        "goods_id": 9,
        "history": "巴基斯坦空军的战机来源早期由美国军援及和法国采购的幻影3型战斗机，在1980年代以后，在多次印巴冲突...",
        "design": "JF-17机身材质为铝合金半硬壳式结构，部分使用强度较高的航空用合金钢或钛合金，机身设计寿命为4,0...",
        "describe_img_src": "describeJF-17.png",
        "goods_img_src": "09JF-17.png",
        "goods_name": "JF-17",
        "goods_price": 159963,
        "goods_describe": "枭龙战机（JF-17，Fighter China-1），原计划名超七，巴基斯坦称之为JF-17雷电（..."
    },
    {
        "goods_id": 10,
        "history": "历史数据1",
        "design": "制造数据1",
        "describe_img_src": "描述图片测试1",
        "goods_img_src": "图片数据1",
        "goods_name": "名字数据1",
        "goods_price": 1,
        "goods_describe": "描述数据1"
    }
]

let result = '';
let data1 = [];
let obj = {};
let xhr = new XMLHttpRequest();
xhr.open('post', 'http://10.12.152.2:3000/shopCarCountRouter', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        result = JSON.parse(xhr.responseText);
        // console.log(result);
        for (let i = 0; i < result.length; i++) {
            // console.log(result[i].goods_id);
            for (let j = 0; j < arr.length; j++) {
                if (result[i].goods_id == arr[j].goods_id) {
                    data1.push(arr[j]);
                }
            }
        }
        obj = {
            dom: '.shopCar',
            data: data1
        }
        new shopCar(obj);
    }
}
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
let str = `token=${window.sessionStorage.getItem('token')}`;
xhr.send(str)




