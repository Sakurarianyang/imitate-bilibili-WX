// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    gender:{0:'女',1:'男',3:'保密'}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getStorage({
      key: 'userinfo',
      success: function (res) {
        console.log(res.data)
        that.setData({
          userInfo: res.data
        })
      }
    })
  },
  logOut(){
    wx.clearStorage({
      success:function(res){
        wx.switchTab({
          url: '/pages/setting/setting',
          success: function (e) {
            let page = getCurrentPages().pop();
            console.log(page);
            if (page == undefined || page == null) return;
            page.onLoad();
          }
        }); 
      }
    });
  }
})