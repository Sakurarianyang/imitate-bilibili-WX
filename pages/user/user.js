// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    btnList:[{btnName:'历史记录'},{btnName:'我的投稿'}],
    btnidex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        console.log(res.data)
        that.setData({
          userInfo: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  onGotUserInfo(e){
    console.log(e.detail.userInfo);
    this.setData({
      userInfo: e.detail.userInfo 
    })
    wx.setStorage({
      key:'userinfo',
      data: e.detail.userInfo
    });
  },
  ontabbtn(e){
    var btn = e.currentTarget.dataset.btn;
    this.setData({
      btnidex:btn
    })
  },
  accountInfo(){
    wx.navigateTo({
      url: '/pages/setting/setting'
    })
  }
})