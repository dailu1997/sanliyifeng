// pages/index/dengji/dengji.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      items:[
        { name: '男', checked: true },
        { name: '女',  }
      ],
      sex:'男',
      num:'',
    xingming:''
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
  qian: function () {
    var num = this.data.num,
        nick = this.data.xingming,
        sex = this.data.sex
    console.log(num, nick, sex);
    if(num == ''){
      wx:wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 2000,
      })
    }else if(nick == '') {
      wx: wx.showToast({
        title: '姓名不能为空',
        icon: 'none',
        duration: 2000,
      })
    }else {
      wx.navigateTo({
        url: 'qiandao/qiandao?name=签到',
      })
    }
    
  },
  jilu: function () {
    wx.navigateTo({
      url: 'jilu/jilu?name=签到记录',
    })
  },
  paiban: function () {
    wx.navigateTo({
      url: 'paiban/paiban?name=排班',
    })
  },
  iphone:function (e){
    var that = this
    that.setData({
      num:e.detail.value
    })
    if (!(/^1[34578]\d{9}$/.test(e.detail.value))) { wx.showToast({ title: '手机号码有误', duration: 2000, icon: 'none' }); return false; }
  },
  name:function (e) {
    var that = this
    that.setData({
      xingming: e.detail.value
    })
    if (!(/^[\u4E00-\u9FA5A-Za-z]+$/.test(e.detail.value))) { wx.showToast({ title: '姓名有误', duration: 2000, icon: "none" }); return false; }
  },
  radioChange:function (e) {
    var that = this
    that.setData({
      sex: e.detail.value
    })
     console.log(e.detail.value)
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