// pages/my/administration/zhiyetuoke/zhiyetuoke.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shou: [
      "全部", "已授权", "未授权"
    ],
    dates: '开始时间',
    dated: "终止时间",
    setid: 0
  },
  active: function (e) {
    let id = e.currentTarget.dataset.id;
    this.setData({
      setid: id
    })
  },
  bindDateChange: function (e) {
    this.setData({
      dates: e.detail.value
    })
  },
  bindDateChangend: function (e) {
    this.setData({
      dated: e.detail.value
    })
  },
  guwen: function () {
    wx.navigateTo({
      url: 'guwen/guwen?name=置业顾问甲',
    })
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