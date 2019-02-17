// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    EbSearch:[
      '背对背拥抱',
      '醉赤壁',
      'Always Online', 
      '因你而在',
      '我还想他',
    ],
    HSearch:[
      '背对背拥抱',
      '醉赤壁',
      'Always Online',
      '因你而在',
      '我还想他'
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  oncancel:function(){
    wx.navigateBack({ changed: true });
  },
  onbtnsh:function(e){
    this.data.HSearch.push(e.currentTarget.dataset.item);
    this.setData({
      HSearch: this.data.HSearch
    })
  },
  onempty:function(){
    this.setData({
      HSearch: []
    })
  }
})