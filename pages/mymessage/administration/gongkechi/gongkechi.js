// pages/my/administration/gongkechi/gongkechi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doo: '批量操作',
    status:false,
    tai:false,
    taii:false
  },
  animat: function () {
    var that = this, stat;
    var systemInfo = wx.getSystemInfoSync();
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 0
    });
    if (that.data.status == false) {
      animation.width(630 / 750 * systemInfo.windowWidth).step()
      that.setData({
        ani: animation.export(),
        doo:'取消',
        
      })
      setTimeout(function () {
       that.setData({
         status: true
       })
      }.bind(that), 1000)
    }else {
      animation.width(710 / 750 * systemInfo.windowWidth).step()
      that.setData({
        ani: animation.export(),
        doo: '批量操作',
        status: false
      })
    }
  },
  pei:function () {
     var that = this
     that.setData({
       tai:true
     })
  },
  none:function () {
    var that = this
    that.setData({
      tai: false
    })
  },
  weishou:function () {
    var that = this
    that.setData({
      taii: true
    })
  },
  nonew: function () {
    var that = this
    that.setData({
      taii: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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