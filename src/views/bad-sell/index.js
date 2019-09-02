const data = [
  {
    rank: 1, number: 'IJurfd', name: '毛呢外套春秋款', volume: 130, storeNum: 6323, storeMoney: '￥689207.00'
  }, {
    rank: 2, number: 'HNNiu9', name: '诺帝卡NAUTICA男士短袖针织POLO衫', volume: 134, storeNum: 2032, storeMoney: '￥140208.00'
  }, {
    rank: 3, number: 'HNNiu8', name: 'Polo Ralph Lauren男装', volume: 136, storeNum: 6323, storeMoney: '￥625977.00'
  }, {
    rank: 4, number: 'HNNiu7', name: '柒牌长袖POLO衫男', volume: 137, storeNum: 4242, storeMoney: '￥419958.00'
  }, {
    rank: 5, number: 'HNNiu6', name: '马球协会短袖polo衫', volume: 139, storeNum: 2352, storeMoney: '￥115248.00'
  }, {
    rank: 6, number: 'HNNiu5', name: 'Baleno班尼路 青年复古polo衫男', volume: 140, storeNum: 5252, storeMoney: '￥462176.00'
  }, {
    rank: 7, number: 'HNNiu4', name: 'HLA海澜之家清爽柔和长袖polo衫', volume: 142, storeNum: 2323, storeMoney: '￥223008.00'
  }, {
    rank: 8, number: 'HNNiu3', name: '男士夏季休闲裤薄款', volume: 143, storeNum: 3623, storeMoney: '￥322447.00'
  }, {
    rank: 9, number: 'HNNiu2', name: '格里森大码男装短袖体恤', volume: 146, storeNum: 2152, storeMoney: '￥148488.00'
  }, {
    rank: 10, number: 'HNNiu1', name: '维诺格帝 春秋薄款男夹克', volume: 150, storeNum: 3626, storeMoney: '￥358974.00'
  }, {
    rank: 11, number: 'HNNiu0', name: '胖大帅2018秋季新款大码男装', volume: 176, storeNum: 3412, storeMoney: '￥337788.00'
  }, {
    rank: 12, number: 'Y673wf', name: '纺布者大码男装胖子休闲衬衫', volume: 177, storeNum: 3222, storeMoney: '￥383418.00'
  }, {
    rank: 13, number: '78JNhw', name: '雷萨顿威大码男装休闲裤', volume: 179, storeNum: 3241, storeMoney: '￥256039.00'
  }, {
    rank: 14, number: 'JHdwef', name: '大依优型大码男装棉服胖子', volume: 180, storeNum: 3210, storeMoney: '￥446190.00'
  }, {
    rank: 15, number: 'jjjdee', name: '胖哥哥大码男装休闲裤', volume: 182, storeNum: 1321, storeMoney: '￥170409.00'
  }, {
    rank: 16, number: 'Nju889', name: 'JSMIX大码男装牛仔外套夹克', volume: 184, storeNum: 1652, storeMoney: '￥246148.00'
  }, {
    rank: 17, number: 'Juhe44', name: '雅戈尔youngor秋季男士长袖T恤', volume: 199, storeNum: 3620, storeMoney: '￥358380.00'
  }, {
    rank: 18, number: 'Bhwe89', name: '柒牌（SEVEN）长袖T恤', volume: 200, storeNum: 2010, storeMoney: '￥239190.00'
  }, {
    rank: 19, number: 'NMh434', name: '卡宾男装秋季长袖T恤', volume: 203, storeNum: 2332, storeMoney: '￥230868.00'
  }, {
    rank: 20, number: 'Jinhje', name: 'INTERIGHT50S水柔棉男士长袖T恤', volume: 204, storeNum: 2112, storeMoney: '￥209088.00'
  }, {
    rank: 21, number: '77yhdh', name: '骆驼（CAMEL）男装 秋季印花长袖t恤', volume: 206, storeNum: 2551, storeMoney: '￥150509.00'
  }, {
    rank: 22, number: '99ijmd', name: '啄木鸟男装长袖T恤', volume: 210, storeNum: 2000, storeMoney: '￥198000.00'
  }, {
    rank: 23, number: '87ddff', name: '布先生长袖T恤', volume: 212, storeNum: 3330, storeMoney: '￥263070.00'
  }, {
    rank: 24, number: 'Bhywed', name: '太子龙 TEDELON 长袖T恤', volume: 213, storeNum: 4220, storeMoney: '￥333380.00'
  }, {
    rank: 25, number: 'JIjdef', name: '恒源祥2018新款纯棉男士翻领长袖', volume: 214, storeNum: 6230, storeMoney: '￥616770.00'
  }, {
    rank: 26, number: '123Ijk', name: '富贵鸟正品t恤', volume: 219, storeNum: 3222, storeMoney: '￥318978.00'
  }, {
    rank: 27, number: 'Nbde78', name: '佐丹奴（Giordano） 男装T恤', volume: 220, storeNum: 5320, storeMoney: '￥633808.00'
  }, {
    rank: 28, number: 'Xhuh78', name: '稻草人（MEXICAN） 长袖T恤', volume: 228, storeNum: 4122, storeMoney: '￥366858.00'
  }, {
    rank: 29, number: '45Huye', name: '南极人(Nanjiren)短袖T恤', volume: 230, storeNum: 5200, storeMoney: '￥254800.00'
  }, {
    rank: 30, number: 'Yhy3w3', name: 'Meters Bonwe 男净色短袖T恤睡衣', volume: 234, storeNum: 6300, storeMoney: '￥560700.00'
  }, {
    rank: 31, number: 'JIuu89', name: '佐丹奴（Giordano） 男装T恤', volume: 239, storeNum: 1963, storeMoney: '￥194337.00'
  }, {
    rank: 32, number: '!dffd0', name: 'AJ 男装长袖T恤', volume: 241, storeNum: 1996, storeMoney: '￥177644.00'
  }, {
    rank: 33, number: 'Ojnd11', name: '七匹狼打底短袖T恤', volume: 242, storeNum: 1990, storeMoney: '￥157210.00'
  }, {
    rank: 34, number: 'NJh857', name: 'HLA海澜之家长袖T恤', volume: 246, storeNum: 1423, storeMoney: '￥124647.00'
  }, {
    rank: 35, number: 'PLPdee', name: '班尼路男装短袖上衣', volume: 251, storeNum: 1515, storeMoney: '￥145440.00'
  }, {
    rank: 36, number: 'IJER65', name: '花花公子牛仔短裤', volume: 254, storeNum: 1232, storeMoney: '￥118272.00'
  }, {
    rank: 37, number: '1245dD', name: '森马（Semir） 长袖T恤', volume: 256, storeNum: 3336, storeMoney: '￥320256.00'
  }, {
    rank: 38, number: '8755jL', name: '吉普（JEEP）牛仔裤', volume: 261, storeNum: 3102, storeMoney: '￥276078.00'
  }, {
    rank: 39, number: '55JIJK', name: 'Night cat2018新品牛仔裤', volume: 263, storeNum: 3596, storeMoney: '￥320044.00'
  }, {
    rank: 40, number: 'QQWq13', name: '伊姿靓彩 针织衫', volume: 266, storeNum: 3369, storeMoney: '￥323424.00'
  }, {
    rank: 41, number: 'HYD788', name: '欧偲麦 两件套套装裙长袖连衣裙', volume: 270, storeNum: 3492, storeMoney: '￥240948.00'
  }, {
    rank: 42, number: 'Pfdfdw', name: '芳帛哈伦牛仔裤女', volume: 272, storeNum: 3291, storeMoney: '￥292899.00'
  }, {
    rank: 43, number: 'UIHHF8', name: '依之皇毛衣外套女秋冬中长款针织开衫', volume: 274, storeNum: 2929, storeMoney: '￥260681.00'
  }, {
    rank: 44, number: 'OLKmkl', name: '乔尼针织衫女慵懒风毛衣', volume: 276, storeNum: 2140, storeMoney: '￥211860.00'
  }, {
    rank: 45, number: 'ZFFD88', name: '红粉宣言2018春季新款百搭哈伦牛仔裤', volume: 280, storeNum: 2301, storeMoney: '￥227799.00'
  }, {
    rank: 46, number: 'Ijhu12', name: '朵沐缦 加绒牛仔裤女秋冬', volume: 282, storeNum: 1852, storeMoney: '￥127788.00'
  }, {
    rank: 47, number: 'Jinhu5', name: '伊姿靓彩 针织衫', volume: 282, storeNum: 1600, storeMoney: '￥222400.00'
  }, {
    rank: 48, number: 'ZHU98w', name: '同恩 长袖针织连衣裙两件套', volume: 286, storeNum: 2400, storeMoney: '￥237600.00'
  }, {
    rank: 49, number: 'BHU879', name: '可福唯瑷卫衣女', volume: 290, storeNum: 1600, storeMoney: '￥206400.00'
  }, {
    rank: 50, number: 'ZXS123', name: '2018秋冬新款女韩版针织衫', volume: 293, storeNum: 2800, storeMoney: '￥277200.00'
  }, {
    rank: 51, number: 'BXF445', name: '卡伊莎   毛衣针织衫女', volume: 294, storeNum: 3900, storeMoney: '￥347100.00'
  }, {
    rank: 52, number: 'LLK783', name: 'Night cat牛仔裤', volume: 297, storeNum: 4000, storeMoney: '￥516000.00'
  }, {
    rank: 53, number: 'MIMIK3', name: 'HILADY 2018秋冬新品休闲服', volume: 299, storeNum: 2000, storeMoney: '￥178000.00'
  }, {
    rank: 54, number: 'WOSHI8', name: '针织衫女开衫短款', volume: 300, storeNum: 3000, storeMoney: '￥237000.00'
  }, {
    rank: 55, number: 'NBZD78', name: '素荨 高领毛衣', volume: 310, storeNum: 1209, storeMoney: '￥119691.00'
  }, {
    rank: 56, number: 'Budff9', name: '尚贝琳针织衫女套头宽松毛衣', volume: 320, storeNum: 2009, storeMoney: '￥138621.00'
  }, {
    rank: 57, number: 'EEe433', name: 'jcoolstory卫衣', volume: 332, storeNum: 3009, storeMoney: '￥267801.00'
  }, {
    rank: 58, number: 'CCyui8', name: '朵沐缦 松紧腰哈伦牛仔裤', volume: 340, storeNum: 4875, storeMoney: '￥482625.00'
  }, {
    rank: 59, number: 'PPL2je', name: '奴希 针织衫女高领毛衣', volume: 344, storeNum: 2832, storeMoney: '￥421968.00'
  }, {
    rank: 60, number: 'HIjn25', name: '可福唯瑷 2018秋冬新款卫衣', volume: 346, storeNum: 2635, storeMoney: '￥208165.00'
  }, {
    rank: 61, number: 'NIi895', name: '南极人加绒卫衣', volume: 350, storeNum: 2954, storeMoney: '￥292446.00'
  }, {
    rank: 62, number: 'SDDF87', name: '冬季必备内衣', volume: 354, storeNum: 6542, storeMoney: '￥516818.00'
  }, {
    rank: 63, number: 'OKSD12', name: '冬款打底裤', volume: 360, storeNum: 1685, storeMoney: '￥200515.00'
  }, {
    rank: 64, number: 'BBVV98', name: '黑色秋冬两用外套', volume: 370, storeNum: 2965, storeMoney: '￥263885.00'
  }, {
    rank: 65, number: 'JJJK12', name: '冬款羊毛衫', volume: 374, storeNum: 2868, storeMoney: '￥283932.00'
  }, {
    rank: 66, number: 'BXFDF7', name: '冬款毛呢大衣', volume: 376, storeNum: 2932, storeMoney: '￥231628.00'
  }, {
    rank: 67, number: 'ZZZZJI', name: '可爱女装套装', volume: 380, storeNum: 1999, storeMoney: '￥197901.00'
  }, {
    rank: 68, number: 'BBBB89', name: '羊毛真毛羽绒', volume: 384, storeNum: 1758, storeMoney: '￥156462.00'
  }, {
    rank: 69, number: 'JH67GH', name: '花色羽绒服', volume: 386, storeNum: 2385, storeMoney: '￥183645.00'
  }, {
    rank: 70, number: 'B88988', name: '黑色旗袍', volume: 390, storeNum: 2293, storeMoney: '￥158217.00'
  }, {
    rank: 71, number: 'UYH434', name: '白色妮子外套', volume: 396, storeNum: 2263, storeMoney: '￥224037.00'
  }, {
    rank: 72, number: 'SDS123', name: '卡其色女装外套', volume: 398, storeNum: 2243, storeMoney: '￥266917.00'
  }, {
    rank: 73, number: 'ETRD87', name: '白色毛绒外套', volume: 399, storeNum: 2241, storeMoney: '￥221859.00'
  }, {
    rank: 74, number: 'LMKJ98', name: '吊带背心', volume: 403, storeNum: 2323, storeMoney: '￥276437.00'
  }, {
    rank: 75, number: 'JJKO87', name: '大码无袖宽松连衣裙', volume: 412, storeNum: 3232, storeMoney: '￥416928.00'
  }, {
    rank: 76, number: 'ZVD90S', name: '针织裙子蕾丝泡泡袖两件套', volume: 440, storeNum: 2310, storeMoney: '￥274890.00'
  }, {
    rank: 77, number: 'BIE123', name: 'im向红色小狗复古毛衣', volume: 450, storeNum: 3401, storeMoney: '￥438729.00'
  }, {
    rank: 78, number: 'UN898U', name: 'Dickies 连帽羽绒服', volume: 451, storeNum: 2340, storeMoney: '￥141460.00'
  }, {
    rank: 79, number: 'HJ012A', name: '午睡 娃娃领毛呢大衣', volume: 460, storeNum: 3412, storeMoney: '￥542508.00'
  }, {
    rank: 80, number: 'AVB900', name: '靓览轩  韩版长袖小西装', volume: 470, storeNum: 4120, storeMoney: '￥407880.00'
  }, {
    rank: 81, number: 'AXTYU5', name: '复古宽松荧光绿加绒卫衣情侣', volume: 472, storeNum: 2210, storeMoney: '￥329290.00'
  }, {
    rank: 82, number: 'CXBMIO', name: '羊毛针织呢开叉黑色微喇裤', volume: 475, storeNum: 3201, storeMoney: '￥284889.00'
  }, {
    rank: 83, number: 'CWE789', name: '羊毛呢锥形裤人字纹九分裤', volume: 480, storeNum: 2210, storeMoney: '￥218790.00'
  }, {
    rank: 84, number: 'CBUU89', name: '细腻坑条 羊毛针织阔腿裤', volume: 489, storeNum: 4210, storeMoney: '￥837790.00'
  }, {
    rank: 85, number: 'CX111O', name: 'jill大姐姐奶奶裤四色', volume: 503, storeNum: 2301, storeMoney: '￥250809.00'
  }, {
    rank: 86, number: 'CXYYYQ', name: '小虫弹力双面穿牛仔裤女', volume: 510, storeNum: 2410, storeMoney: '￥286790.00'
  }, {
    rank: 87, number: 'CSQQ0A', name: '步履不停圆领套头长袖毛衣', volume: 520, storeNum: 2241, storeMoney: '￥311499.00'
  }, {
    rank: 88, number: 'CSH9PP', name: 'VASSE蓝色开叉毛衣', volume: 521, storeNum: 3332, storeMoney: '￥329868.00'
  }, {
    rank: 89, number: 'CSAA01', name: '超暖雪花绒大帽子针织外套', volume: 523, storeNum: 3210, storeMoney: '￥189390.00'
  }, {
    rank: 90, number: 'CSHH02', name: '高领毛衣', volume: 545, storeNum: 5210, storeMoney: '￥410879.00'
  }, {
    rank: 91, number: 'CSHH01', name: '羊毛慵懒宽松连帽毛衣裙', volume: 560, storeNum: 1250, storeMoney: '￥86250.00'
  }, {
    rank: 92, number: 'CXIU77', name: '慵懒风v领毛衣开衫外套女', volume: 562, storeNum: 3201, storeMoney: '￥252879.00'
  }, {
    rank: 93, number: 'CXHJ12', name: '羊毛+羊绒 烟囱领针织衫', volume: 570, storeNum: 3102, storeMoney: '￥369138.00'
  }, {
    rank: 94, number: 'CXOOP9', name: '宽松半高领纯色毛衣女', volume: 580, storeNum: 2230, storeMoney: '￥265307.00'
  }, {
    rank: 95, number: 'CX0JJ5', name: '高克重纯羊绒毛衣', volume: 586, storeNum: 2000, storeMoney: '￥218000.00'
  }, {
    rank: 96, number: 'CX02B5', name: '宽松v领套头毛衣', volume: 590, storeNum: 5210, storeMoney: '￥103679.00'
  }, {
    rank: 97, number: 'CX0A35', name: '长款毛衣裙', volume: 601, storeNum: 3210, storeMoney: '￥317790.00'
  }, {
    rank: 98, number: 'CX0055', name: '秋冬新款水波纹', volume: 622, storeNum: 2510, storeMoney: '￥245980.00'
  }, {
    rank: 99, number: 'CX0225', name: '2018秋冬季新款羊毛呢子', volume: 632, storeNum: 2020, storeMoney: '￥399960.00'
  }, {
    rank: 100, number: 'CX0115', name: '毛呢外套春秋款', volume: 656, storeNum: 3120, storeMoney: '￥620880.00'
  }
];

const week = [
  {
    rank: 1, number: 'JJJK12', name: '冬款羊毛衫', volume: 374, storeNum: 2868, storeMoney: '￥283932.00'
  }, {
    rank: 2, number: 'BXFDF7', name: '冬款毛呢大衣', volume: 376, storeNum: 2932, storeMoney: '￥231628.00'
  }, {
    rank: 3, number: 'ZZZZJI', name: '可爱女装套装', volume: 380, storeNum: 1999, storeMoney: '￥197901.00'
  }, {
    rank: 4, number: 'BBBB89', name: '羊毛真毛羽绒', volume: 384, storeNum: 1758, storeMoney: '￥156462.00'
  }, {
    rank: 5, number: 'JH67GH', name: '花色羽绒服', volume: 386, storeNum: 2385, storeMoney: '￥183645.00'
  }, {
    rank: 6, number: 'B88988', name: '黑色旗袍', volume: 390, storeNum: 2293, storeMoney: '￥158217.00'
  }, {
    rank: 7, number: 'UYH434', name: '白色妮子外套', volume: 396, storeNum: 2263, storeMoney: '￥224037.00'
  }, {
    rank: 8, number: 'SDS123', name: '卡其色女装外套', volume: 398, storeNum: 2243, storeMoney: '￥266917.00'
  }, {
    rank: 9, number: 'ETRD87', name: '白色毛绒外套', volume: 399, storeNum: 2241, storeMoney: '￥221859.00'
  }, {
    rank: 10, number: 'LMKJ98', name: '吊带背心', volume: 403, storeNum: 2323, storeMoney: '￥276437.00'
  }, {
    rank: 11, number: 'JJKO87', name: '大码无袖宽松连衣裙', volume: 412, storeNum: 3232, storeMoney: '￥416928.00'
  }, {
    rank: 12, number: 'ZVD90S', name: '针织裙子蕾丝泡泡袖两件套', volume: 440, storeNum: 2310, storeMoney: '￥274890.00'
  }, {
    rank: 13, number: 'BIE123', name: 'im向红色小狗复古毛衣', volume: 450, storeNum: 3401, storeMoney: '￥438729.00'
  }, {
    rank: 14, number: 'UN898U', name: 'Dickies 连帽羽绒服', volume: 451, storeNum: 2340, storeMoney: '￥141460.00'
  }, {
    rank: 15, number: 'HJ012A', name: '午睡 娃娃领毛呢大衣', volume: 460, storeNum: 3412, storeMoney: '￥542508.00'
  }, {
    rank: 16, number: 'AVB900', name: '靓览轩  韩版长袖小西装', volume: 470, storeNum: 4120, storeMoney: '￥407880.00'
  }, {
    rank: 17, number: 'AXTYU5', name: '复古宽松荧光绿加绒卫衣情侣', volume: 472, storeNum: 2210, storeMoney: '￥329290.00'
  }, {
    rank: 18, number: 'CXBMIO', name: '羊毛针织呢开叉黑色微喇裤', volume: 475, storeNum: 3201, storeMoney: '￥284889.00'
  }, {
    rank: 19, number: 'CWE789', name: '羊毛呢锥形裤人字纹九分裤', volume: 480, storeNum: 2210, storeMoney: '￥218790.00'
  }, {
    rank: 20, number: 'CBUU89', name: '细腻坑条 羊毛针织阔腿裤', volume: 489, storeNum: 4210, storeMoney: '￥837790.00'
  }, {
    rank: 21, number: 'CX111O', name: 'jill大姐姐奶奶裤四色', volume: 503, storeNum: 2301, storeMoney: '￥250809.00'
  }, {
    rank: 22, number: 'CXYYYQ', name: '小虫弹力双面穿牛仔裤女', volume: 510, storeNum: 2410, storeMoney: '￥286790.00'
  }, {
    rank: 23, number: 'CSQQ0A', name: '步履不停圆领套头长袖毛衣', volume: 520, storeNum: 2241, storeMoney: '￥311499.00'
  }, {
    rank: 24, number: 'CSH9PP', name: 'VASSE蓝色开叉毛衣', volume: 521, storeNum: 3332, storeMoney: '￥329868.00'
  }, {
    rank: 25, number: 'CSAA01', name: '超暖雪花绒大帽子针织外套', volume: 523, storeNum: 3210, storeMoney: '￥189390.00'
  }, {
    rank: 26, number: 'CSHH02', name: '高领毛衣', volume: 545, storeNum: 5210, storeMoney: '￥410879.00'
  }, {
    rank: 27, number: 'CSHH01', name: '羊毛慵懒宽松连帽毛衣裙', volume: 560, storeNum: 1250, storeMoney: '￥86250.00'
  }, {
    rank: 28, number: 'CXIU77', name: '慵懒风v领毛衣开衫外套女', volume: 562, storeNum: 3201, storeMoney: '￥252879.00'
  }, {
    rank: 29, number: 'CXHJ12', name: '羊毛+羊绒 烟囱领针织衫', volume: 570, storeNum: 3102, storeMoney: '￥369138.00'
  }, {
    rank: 30, number: 'CXOOP9', name: '宽松半高领纯色毛衣女', volume: 580, storeNum: 2230, storeMoney: '￥265307.00'
  }, {
    rank: 31, number: 'CX0JJ5', name: '高克重纯羊绒毛衣', volume: 586, storeNum: 2000, storeMoney: '￥218000.00'
  }, {
    rank: 32, number: 'CX02B5', name: '宽松v领套头毛衣', volume: 590, storeNum: 5210, storeMoney: '￥103679.00'
  }, {
    rank: 33, number: 'CX0A35', name: '长款毛衣裙', volume: 601, storeNum: 3210, storeMoney: '￥317790.00'
  }, {
    rank: 34, number: 'CX0055', name: '秋冬新款水波纹', volume: 622, storeNum: 2510, storeMoney: '￥245980.00'
  }
];

export default {week: week, month: data};
