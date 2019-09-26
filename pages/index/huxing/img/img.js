// pages/index/huxing/huxing.js
var a = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      img:'',
      li:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (t) {
    var that = this
    var  ss = t.news
    that.setData({
      li:t.li
    })
    wx.setNavigationBarTitle({
      title: t.name,
    })
    that.setData({
      img:ss
    })
    console.log(t)
  },
  // previewImage: function (e) {
  //   var that = this
  //   var current = e.currentTarget.dataset.img;
   
  //   console.log(that.data.li)
  //   // wx.previewImage({
  //   //   current: current, // 当前显示图片的http链接  
  //   //   urls: li // 需要预览的图片http链接列表  
  //   // })
  // },   
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