function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  
  data: {
    inputValue: '',
    src: '',
    danmuList:
      [{
        text: '啊啊啊啊啊',
        color: '#ffffff',
        time: 1
      },
        {
          text: '啊啊啊啊啊',
          color: '#ffffff',
          time: 1
        },
        {
          text: '啊啊啊啊啊',
          color: '#ffffff',
          time: 1
        },
        {
          text: '啊啊啊啊啊',
          color: '#ffffff',
          time: 1
        },
        {
          text: '啊啊啊啊啊',
          color: '#ffffff',
          time: 1
        },
      {
        text: '啊啊啊啊啊',
        color: '#ffffff',
        time: 3
      }],
    information: {}

  },
  onLoad: function (e) {
    wx.setNavigationBarTitle({
      title: e.title
    });
    this.setData({
      information: e
    })
    wx.showShareMenu({
      withShareTicket: true
    }); 
  },
  bindInputBlur: function (e) {
    this.data.inputValue = e.detail.value;
    
  },
  bindSendDanmu: function () {
    if (this.data.inputValue == ''){
      wx.showModal({
        title: '(づ￣3￣)づ╭❤～ ',
        content: '请装载弹幕',
        showCancel: false,
      })
    }else{
      this.videoContext.sendDanmu({
        text: this.data.inputValue,
        color: 'ffffff'
      })
    }
    this.setData({
      inputValue: ''//将data的inputValue清空
    });
  },
  bindPlay: function () {
    this.videoContext.play()
  },
  bindPause: function () {
    this.videoContext.pause()
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  gn_btn:function(e){
    if (e.currentTarget.dataset.btn == "xiazai"){
      wx.showModal({
        title: '请下载bilibili客户端',
        content: '使用bilibili客户端，即可把视频缓存到手机上 ',
        showCancel: false,
      })
    }else{
      wx.showModal({
        title: '请下载bilibili客户端',
        content: '使用bilibili客户端，即可收藏视频 ',
        showCancel: false,
      })
    }
  },
  onShareAppMessage: function () {
    var videoobj = this.data.information;
    this.bindPause()
    return {
      title: this.data.information.title,
      desc: this.data.information.title,
      path: '/pages/video/video?aid=' + videoobj.aid + '&title=' + videoobj.title + '&author=' +
        videoobj.author + '&author=' +
        videoobj.author + '&play=' +
        videoobj.play + '&description=' + videoobj.description + "",
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
        this.bindPlay();
      },
    }
  }
})