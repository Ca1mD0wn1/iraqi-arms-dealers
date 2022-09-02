import "../../css/goods/goods.css";
import Goods from "./classGoods.js";

var data =
    [
        { "goods_id": 1, "goods_img_src": "01QBZ191.png", "goods_name": "QBZ191", "goods_price": 1200, "goods_describe": "QBZ-191自动步枪是一款由中华人民共和国研制生产的突击步枪。突击步枪型，枪管长14.5英寸（368.3 mm）" },
        { "goods_id": 2, "goods_img_src": "02QBZ95.png", "goods_name": "QBZ95", "goods_price": 3200, "goods_describe": "QBZ-95，QBZ为源自拼音“轻武器—步枪—自动”的类别代码），简称95式。95式自动步枪配用5.8毫米DBP87普通弹，是5.8毫米小口径枪弹中的主要弹种。" },
        { "goods_id": 3, "goods_img_src": "03QBU88.png", "goods_name": "QBU88", "goods_price": 5500, "goods_describe": "88式狙击步枪（QBU-88）是由中国北方工业公司研制的狙击步枪瞄准基线长394毫米，10发弹匣，装配的白光瞄准镜重650克，最大放大倍率9倍。" },
        { "goods_id": 4, "goods_img_src": "04HJ_73D.png", "goods_name": "HJ-73D", "goods_price": 9600, "goods_describe": "仿制自苏联9K11 (AT-3“赛格”) 反坦克导弹，于1979年研制成功，列入中国人民解放军制式装备。该型导弹系统属于是第一代反坦克导弹。" },
        { "goods_id": 5, "goods_img_src": "05PLZ_05.png", "goods_name": "PZL05", "goods_price": 9960, "goods_describe": "PLZ-05 155毫米自行加榴炮是中国人民解放军正式装备的首款155毫米履带式自行火炮，由PLZ-45自行加榴炮发展而来。采用52倍口径身管，" },
        { "goods_id": 6, "goods_img_src": "06-63.png", "goods_name": "63式火箭炮", "goods_price": 15000, "goods_describe": "63式107毫米轮式火箭炮是中国解放军装备的一款牵引式轻型多管火箭炮。主用于取代二战以来的团级的中、重型迫击炮。" },
        { "goods_id": 7, "goods_img_src": "07MiG-29.png", "goods_name": "米格29", "goods_price": 96558, "goods_describe": "米格-29（俄语：Микоян МиГ-29），苏联米高扬-古列维奇飞机设计局于1970年代设计的双发中型前线战斗机，与同时期开发之战机苏-27高低搭配。" },
        { "goods_id": 8, "goods_img_src": "08J-20.png", "goods_name": "歼-20", "goods_price": 84685, "goods_describe": "歼-20（又名J-20、威龙)是成都飞机工业集团生产，装备于中国人民解放军空军的第五代战斗机，采单座、双发、鸭式气动布局设计。" },
        { "goods_id": 9, "goods_img_src": "09JF-17.png", "goods_name": "JF-17", "goods_price": 159963, "goods_describe": "枭龙战机（JF-17，Fighter China-1），原计划名超七，巴基斯坦称之为JF-17雷电（Joint Fighter-17 Thunder）" }
    ]
data.forEach(item => {
    new Goods(item);
})
