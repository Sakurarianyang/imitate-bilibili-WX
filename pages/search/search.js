// pages/search/search.js
Page({
  data: {
    EbSearch: ["背对背拥抱", "醉赤壁", "Always Online", "因你而在", "我还想他"],
    HSearch: ["背对背拥抱", "醉赤壁", "因你而在", "我还想他"],
  },
  oncancel: function () {
    wx.navigateBack({ changed: true });
  },
  onbtnsh: function (e) {
    const { item } = e.currentTarget.dataset;
    this.commonHandle(item);
  },
  onSearchConfirm(e) {
    const { value } = e.detail;
    this.commonHandle(value);
  },
  commonHandle(value) {
    const { HSearch } = this.data;
    HSearch.unshift(value);
    const newSearch = [...new Set(HSearch)];
    if (newSearch.length > 12) {
      newSearch.pop();
    }
    this.setData({
      HSearch: newSearch,
    });
  },
  onempty: function () {
    this.setData({
      HSearch: [],
    });
  },
});
