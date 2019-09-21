// pages/index/dengji/paiban/paiban.js
var e = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shou: [
      "上班", "休假"
    ],
    work:"上班",
    setid:0,
    shunxu:''
  },
  active: function (e) {
    let id = e.currentTarget.dataset.id;
    let ban = e.currentTarget.dataset.data
    this.setData({
      setid: id,
      work:ban
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = options.name
    wx.setNavigationBarTitle({
      title: name,
    })
    var t = this, i = e.siteInfo.uniacid;
    e.util.request({
      url: "entry/wxapp/service",
      data: {
        m: "dxdapp_house",
        uniacid: i
      },
      cachetime: "0",
      success: function (e) {
        t.setData({
          user: e.data.data
        });
      }
    });

  },
  sequence:function (e) {
    var t = this
    t.data.shunxu = e.detail.value
  },
  ti:function () {
    console.log(this.data.work)
    console.log(this.data.shunxu)
    wx.showModal({
      title: '温馨提示',
      content: '您已确认提交了吗？',
      success(res) {
        if (res.confirm) {
          // console.log('用户点击确定')  提交并跳转到 首页
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
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