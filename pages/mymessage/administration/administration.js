// pages/my/administration/administration.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: [
      '今日', '本周', '本月', '本年'
    ],
    ind: 0,
    inde:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = options.name;
    wx.setNavigationBarTitle({
      title: name,
    })
  },
  date: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      ind: id
    })
  },
  dateg: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      inde: id
    })
  },
  zhituoke: function () {
    wx.navigateTo({
      url: 'zhiyetuoke/zhiyetuoke?name=置业顾问拓客',
    })
  },
  gongtuoke: function () {
    wx.navigateTo({
      url: 'gongkechi/gongkechi?name=公共客户池',
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})