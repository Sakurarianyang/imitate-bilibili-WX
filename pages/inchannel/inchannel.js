const app = getApp();
Page({
  data: {
    navlist: [],
    currentTab: 0,
    navScrollLeft: 0,
  },
  //事件处理函数
  onLoad: function (e) {
    wx.setNavigationBarTitle({
      title: e.title,
    });
    this.lowerLevel(e.title);
  },
  switchNav(event) {
    const { windowWidth, currentTab } = this.data;
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/5
    var singleNavWidth = windowWidth / 5;
    //tab选项居中
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth,
    });
    if (currentTab === cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur,
      });
    }
  },
  switchTab(event) {
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth,
    });
  },
  lowerLevel: function (title) {
    const switchBlock = {
      动画: () => {
        this.animation();
      },
      default: () => {
        this.onerror();
      },
    };
    switchBlock[title]
      ? switchBlock[title].call(this)
      : switchBlock["default"].call(this);
  },
  animation: function () {
    this.setData({
      navlist: [
        {
          title: "MAD.AMV",
          new: [
            {
              aid: "43263944",
              title:
                "【强风吹拂/灰走】伪原片！灰二对阿走表白了啊我的老天鹅！【声优梗/误解向】",
              pic:
                "http://i1.hdslb.com/bfs/archive/7ff69b5e06768e25a94eb0d93174931a4558b9dc.jpg",
            },
            {
              aid: "43398059",
              title:
                "【我英/胜出】【高甜剧情向】【1080p】为什么恋爱的忧愁Ta总是围绕着我们",
              pic:
                "http://i1.hdslb.com/bfs/archive/7549c365f058bcc102a1219905da797cb83f0961.png",
            },
            {
              aid: "43561983",
              title: "【100部番剧混剪】我想成为你的No.1",
              pic:
                "http://i2.hdslb.com/bfs/archive/f43b7ef3ac0fe8e56cb02f59e35ad5fabedeec53.jpg",
            },
            {
              aid: "43142956",
              title: "樱花庄永【不完结】！（第二季消息二期）",
              pic:
                "http://i0.hdslb.com/bfs/archive/e8bca8bf56b97749e73003b59395df9940c566c5.png",
            },
          ],
          hot: [
            {
              aid: "43142956",
              title: "【五等分的花嫁】爱玖见人心",
              pic:
                "http://i2.hdslb.com/bfs/archive/a9c8a2bd6835cbcf69474ccee82fbcec03ff6834.jpg",
            },
            {
              aid: "43263944",
              title: "《高燃/史诗/节奏向/多素材混剪超燃》我们才能被称之为英雄",
              pic:
                "http://i1.hdslb.com/bfs/archive/b358258984a9d939c30bd930eb9bf448e96a9ebb.png",
            },
            {
              aid: "43398059",
              title: "【炮姐AMV】炮姐高萌超燃混剪",
              pic:
                "http://i1.hdslb.com/bfs/archive/43140a4eadc2b6282576e201f77ddbdd2c170bc2.jpg",
            },
            {
              aid: "43561983",
              title: "刀剑神域那些沙雕图片，请勿喝水。",
              pic:
                "http://i2.hdslb.com/bfs/archive/78528faf0526e5626e63de3f6f02bfca14310336.jpg",
            },
            {
              aid: "43142956",
              title: "【杀戮の天使/燃向AMV/混剪】“因为扎克你就是我的神”",
              pic:
                "http://i2.hdslb.com/bfs/archive/afb805241e7c5470387b2693a7464fdefcf91eed.jpg",
            },
            {
              aid: "43142956",
              title: "JOJO幻影之血混剪”",
              pic:
                "http://i1.hdslb.com/bfs/archive/f46abca51b60fea8a55f62656d0334a1431732ff.jpg",
            },
          ],
        },
        {
          title: "MMD.3D",
          new: [
            {
              aid: "43263944",
              title: "【B站限定】今天来画22娘 (^・ω・^§)",
              pic:
                "http://i0.hdslb.com/bfs/archive/bfdb0e9e494fe2a799b24362f0be0e153b523333.jpg",
            },
            {
              aid: "43398059",
              title: "[C4D/超精致场景/言和]✿谁陪我浪迹天涯",
              pic:
                "http://i1.hdslb.com/bfs/archive/5d1c0b343ab4fc515ac004f52f61d46146cea236.jpg",
            },
            {
              aid: "43263944",
              title: "满屏大长腿...不对，文化气息|从未见过如此有文化的极乐净土",
              pic:
                "http://i0.hdslb.com/bfs/archive/055c5d960c92e765e21d5c615e938e89dac05595.jpg",
            },
            {
              aid: "43398059",
              title: "【MMD】九尾三妈式初音miku - ミュージックミュージック",
              pic:
                "http://i1.hdslb.com/bfs/archive/f65c721d9c066e70255bec06102512b908f6a1a4.jpg",
            },
          ],
          hot: [
            {
              aid: "43142956",
              title: "【C4D/布料解算】--书记舞",
              pic:
                "http://i1.hdslb.com/bfs/archive/013a1cfd71a844fd6812ce6adf1603526fee1c62.jpg",
            },
            {
              aid: "43263944",
              title: "[Minecraft动画]怪物娘的日常④ 末影人的日常 II",
              pic:
                "http://i2.hdslb.com/bfs/archive/9041ae980665e0f0a31c434f763ac572190acbc3.jpg",
            },
            {
              aid: "43398059",
              title: "【MMD/60FPS】真的实在是太可爱了，忍不住想捏捏看~",
              pic:
                "http://i1.hdslb.com/bfs/archive/39015ce01a44349dae141d665f05c0a9be569372.jpg",
            },
            {
              aid: "43561983",
              title: "当正经人变傻后【动画风格渲染测试】ROKI【崩坏3-MMD】",
              pic:
                "http://i0.hdslb.com/bfs/archive/d033e69606517aef2bef4ea1e2353b897bd8c0ec.jpg",
            },
            {
              aid: "43142956",
              title: "【初音MMD】来欣赏一下公主的英姿！【战舞】",
              pic:
                "http://i2.hdslb.com/bfs/archive/e58706d00758fc025134faa13b7c5c46048c2cc7.jpg",
            },
            {
              aid: "43142956",
              title: "﹙FATE／MMD﹚ LapTapLove - 【BBペレちゃん/水着BB】",
              pic:
                "http://i1.hdslb.com/bfs/archive/9a1252b1efa4ef4701b9537a24d588dc4b975ac4.jpg",
            },
          ],
        },
        { title: "短片.手书.配音" },
        { title: "综合" },
      ],
    });
  },
  animation_drama_series: function () {
    this.setData({
      navlist: [
        { title: "连载动画" },
        { title: "完结动画" },
        { title: "资讯" },
        { title: "官方延伸" },
      ],
    });
  },
  chinese_creation: function () {
    this.setData({
      navlist: [
        { title: "国产动画" },
        { title: "国产原创相关" },
        { title: "布袋戏" },
        { title: "资讯" },
      ],
    });
  },
  onmusic: function () {
    this.setData({
      navlist: [
        {
          title: "原创音乐",
          new: [
            {
              aid: "1",
              author: "Mes",
              pic:
                "http://i1.hdslb.com/bfs/archive/00c0db3a35d4a61eff5b6e76a345c0f2e50da4ab.jpg",
              play: 1896477,
              pts: 4721560,
              title: "流光乐夜【2019拜年祭单品】",
              description:
                '三无：“今年我依然是个可爱的女孩子呢！！” 泠鸢yousa:"回家过年段子里应付尬聊的方法可千万别用啊！不过有一个我觉得好使，亲戚要求表演节目你可以唱…改革春风吹满地，吹满地春风吹满地！" hoshino: “毫无经验的小白瑟瑟发抖的跟大家说春节快乐！！” 岚aya: “祝所有本命年的猪猪们一切顺利?”冥月:“灯红酒绿一起摇摆有东西扯我……”Mes: “猪你新年快乐！”',
            },
            {
              aid: "2",
              author: "litterzy",
              pic:
                "http://i0.hdslb.com/bfs/archive/3fdffe89a861cf9aca28727e5ab7f0bcf5b418db.jpg",
              play: 1530697,
              pts: 3090164,
              title: "冠世一战【2019拜年祭单品】",
              description: "大闹一场，冠世一战； 悄然离去，后世相传。",
            },
          ],
        },
        { title: "翻唱" },
        { title: "VOCALOID UTAU" },
        { title: "电音" },
        { title: "演奏" },
        { title: "MV" },
        { title: "音乐现场" },
        { title: "音乐综合" },
      ],
    });
  },
  ondance: function () {
    navlist: [
      { title: "宅舞" },
      { title: "三次元武道" },
      { title: "舞蹈教程" },
    ];
  },
  onerror: function () {
    wx.showModal({
      title: "啊哦(╯°Д°)╯︵ ┻━┻",
      content: "正在开发哦 (〒︿〒) ",
      showCancel: false,
      success: function () {
        wx.switchTab({
          url: "/pages/channel/channel",
        });
      },
    });
  },
  tovideo: function (e) {
    var videoobj = e.currentTarget.dataset.video;
    wx.navigateTo({
      url:
        "/pages/video/video?aid=" +
        videoobj.aid +
        "&title=" +
        videoobj.title +
        "&author=" +
        videoobj.author +
        "&author=" +
        videoobj.author +
        "&play=" +
        videoobj.play +
        "&description=" +
        videoobj.description +
        "",
    });
  },
});
