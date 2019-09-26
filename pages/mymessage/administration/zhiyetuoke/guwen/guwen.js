// pages/my/administration/zhiyetuoke/guwen/guwen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shou:[
      '授权','未授权'
    ],
    idt:0,
    idtd:0,
    content:'显示号码',
    status:false,
    phone: 15929665869
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
  active:function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      idt:id
    })
  },
  actived: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      idtd: id
    })
  },
  num:function(e){
    if (this.data.status == false) {
      //var mphone = this.data.phone.substring(0, 3) + '****' + this.data.phone.substring(7);
      var ss = this.data.phone
      if (!(/(\d{3})\d{4}(\d{4})/.test(ss))) {
         

      }
  
      this.setData({
        content: "隐藏号码",
        status:true
      })
    }else {
      this.setData({
        content : "显示号码",
        status: false
      })
    }
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