// pages/index/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '男', checked: true },
      { name: '女', checked: false }
    ],
    huxing:[
      '一室一厅','二室一厅','三室一厅','三室二厅','四室二厅','复式'
    ],
    sex:'男',
    ident:0,
    xingming:'',
    num:'',
    yixiang:'一室一厅'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '意向登记',
    })
  },
  yixiang:function (e) {
    var id = e.currentTarget.dataset.id;
    this.setData({
      ident:id,
      yixiang:e.currentTarget.dataset.hu
    })
  },
  name:function (e) {
    var that = this
    that.setData({
      xingming: e.detail.value
    })
    if (!(/^[\u4E00-\u9FA5A-Za-z]+$/.test(e.detail.value))) {
       wx.showToast({ title: '姓名有误', duration: 2000, icon: "none" });
       that.data.xiangming = ''
      console.log(that.data.xiangming)
        return false; 
        }
  },
  changeSex:function (e){
    var that = this
    that.setData({
      sex: e.detail.value
    })
  },
  iphone: function (e) {
    var that = this
    that.setData({
      num: e.detail.value
    })
    if (!(/^1[34578]\d{9}$/.test(e.detail.value))) { wx.showToast({ title: '手机号码有误', duration: 2000, icon: 'none' }); return false; }
  },
  changey:function (e) {
    this.setData({
      yusuan:e.detail.value
    })
  },
  changem: function (e) {
    this.setData({
      mianji: e.detail.value
    })
  },
  text:function (e) {
    this.setData({
      yaoqiu: e.detail.value
    })
  },
  commit:function () {
    console.log(this.data)
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