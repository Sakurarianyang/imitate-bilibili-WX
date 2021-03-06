// pages/index/index.js
Page({
  data: {
    logoimg: "/images/logo.png",
    imgUrls: [
      "http://i0.hdslb.com/bfs/archive/32683e9783f47598a933959d3edfde22cf880182.jpg",
      "http://i0.hdslb.com/bfs/archive/b479421d1881c9f29774933fa6b953269a8bb4a5.jpg",
      "http://i0.hdslb.com/bfs/archive/5ab2b9e2d256ed01c214b34ba7908c22b48679e3.jpg",
      "http://i0.hdslb.com/bfs/archive/3abe5c4a6e6849ff188f717bb03810d970f218a3.jpg",
      "http://i0.hdslb.com/bfs/archive/14c4e348898dd7e029fb4befa11b2e4b576e7c27.jpg",
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    itemlist: [
      {
        aid: "36570401",
        pic:
          "http://i0.hdslb.com/bfs/archive/98180bfc90101d561f34fb598cac31aa4e4a6492.jpg",
        play: 20910148,
        pts: 26094014,
        title: "【哔哩哔哩2019拜年祭】",
      },
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
        aid: "42184601",
        pic:
          "http://i0.hdslb.com/bfs/archive/f1db5c944eba0ac17757aa777a5d5aa08f7c3647.jpg",
        play: 1345950,
        pts: 3525890,
        title: "【老番茄】史上最狠小学生(第四期)",
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
      {
        aid: "36570650",
        pic:
          "http://i0.hdslb.com/bfs/archive/5dddf12ef5be83933152ce754afab4fc7273696d.jpg",
        play: 899449,
        pts: 2041919,
        title: "钢铁直男【2019拜年祭单品】",
      },
      {
        aid: "42565357",
        pic:
          "http://i1.hdslb.com/bfs/archive/2dfc25b3c9b8a3442c0b3f20d9f8550a38702071.jpg",
        play: 722456,
        pts: 2034108,
        title: "迦勒底拜年祭",
      },
      {
        aid: "42490844",
        pic:
          "http://i0.hdslb.com/bfs/archive/30b2c0f54b1709181fe6168c222013265311c169.jpg",
        play: 435896,
        pts: 1885736,
        title: "【硬核综漫】Hold feat. Daniela Andrade",
      },
      {
        aid: "36570707",
        author: "",
        pic:
          "http://i0.hdslb.com/bfs/archive/2c28ad5b1f166d648e820a68eac80b5fe88d324e.jpg",
        play: 657780,
        pts: 1744175,
        title: "繁华唱遍【2019拜年祭单品】",
      },
      {
        aid: "42646017",
        pic:
          "http://i2.hdslb.com/bfs/archive/37eb804bf01f251814c9470214a20ec2aae9e8d4.jpg",
        play: 1090014,
        pts: 1461551,
        title: "小伙做了个烟花加特林，一次打10000发，真的太爽了！",
      },
      {
        aid: "42595572",
        pic:
          "http://i0.hdslb.com/bfs/archive/d981c6a549723b83add0394d82d2cf4d5c7cbf49.jpg",
        play: 1607626,
        pts: 1453573,
        title: "网红挑战荒岛求生两周：第三天比预想的更难【第三集】",
      },
    ],
  },

  onSearch: function () {
    wx.navigateTo({
      url: "/pages/search/search",
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
