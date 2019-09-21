// pages/index/dingwei/dingwei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      id: 1,
      latitude: '',
      longitude: '',
      name: '朱雀云天'
    }
    ],
  },
  click: function (e) {
    wx.openLocation({
      latitude: 34.2155165611,
      longitude: 108.9470726926,
      scale: 18,
      name: '朱雀云天',
      address: '雁塔区朱雀大街南段'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = options.name
    this.setData({
      x:options.x,
      y:options.y
    })
    this.data.latitude = options.y
    this.data.longitude = options.x
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