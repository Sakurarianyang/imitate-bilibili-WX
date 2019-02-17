// pages/movies/movies.js
Page({
  data: {
    ChannelLogo:[
      {'title':'动画','ImgUrl':'/images/donghua.png'},
      {'title':'番剧','ImgUrl':'/images/fanju.png'},
      {'title':'国创','ImgUrl':'/images/guochuang.png'},
      {'title':'音乐','ImgUrl':'/images/yinyue.png'},
      {'title':'舞蹈','ImgUrl':'/images/wudao.png'},
      {'title':'科技','ImgUrl':'/images/keji.png'},
      {'title':'游戏','ImgUrl':'/images/youxi.png'},
      {'title':'娱乐','ImgUrl':'/images/yule.png'},
      {'title':'鬼畜','ImgUrl':'/images/guichu.png'},
      {'title':'电影','ImgUrl':'/images/dianying.png'},
      {'title':'电视剧','ImgUrl':'/images/dianshiju.png'},
      {'title':'时尚','ImgUrl':'/images/shishang.png'},
      {'title':'生活','ImgUrl':'/images/shenghuo.png'},  
      {'title':'广告','ImgUrl':'/images/guanggao.png'},
      {'title':'直播','ImgUrl':'/images/zhibo.png'},
      {'title':'游戏中心','ImgUrl':'/images/youxizhongxin.png'},
    ]
  },
  into_ch: function (e) {
    wx.navigateTo({
      url: '/pages/inchannel/inchannel?title=' + e.currentTarget.dataset.channel
    })
  },
})