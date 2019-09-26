// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      date:[
        '今日','本周','本月','本年'
      ],
      ind:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的',
    })
  },
  date:function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      ind:id
    })
  },
  us: () => {
    wx.navigateTo({
      url: 'we/we?name=联系我们',
    })
  },
  tuoke: () => {
    wx.navigateTo({
      url: 'zhiye/zhiye?name=我的拓客',
    })
  },
  myke: function () {
    wx.navigateTo({
      url: 'tuoke/tuoke?name=我的拓客',
    })
  },
  news: function () {
    wx.navigateTo({
      url: 'news/news?name=消息管理',
    })
  },
  administrators: function () {
    wx.navigateTo({
      url: 'administration/administration?name=拓客管理',
    })
  },
  trajectory: function () {
    wx.navigateTo({
      url: 'trajectory/trajectory?name=拓客轨迹',
    })
  },
  list: function () {
    wx.navigateTo({
      url: 'we/we?name=联系我们&id=超级管理员',
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