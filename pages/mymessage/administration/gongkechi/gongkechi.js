// pages/my/administration/gongkechi/gongkechi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doo: '批量操作',
    status:false
  },
  animat: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 0
    });
    if(this.data.status == false) {
      animation.width(315).step()
      this.setData({
        ani: animation.export(),
        doo:'取消',
        status:true
      })
    }else {
      animation.width(391).step()
      this.setData({
        ani: animation.export(),
        doo: '批量操作',
        status: false
      })
    }
    
    
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