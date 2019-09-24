// pages/Consultation/Consultation.js
var a = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      '全部活动', '报名活动', '分享活动'
    ],
    idx: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = this;
    var e = a.siteInfo.uniacid;
    wx.setNavigationBarTitle({
      title: '活动',
    }),
    t.setData({
      status: !0
    });
   
    a.util.request({
      url: "entry/wxapp/house",
      data: {
        m: "dxdapp_house",
        uniacid: e
      },
      cachetime: "30",
      success: function (a) {

        wx.setNavigationBarTitle({
          title: a.data.data.info.name + ""
        }), t.setData({
          bg_img: a.data.data.picture.background_img,
          picture: a.data.data.picture,
          tag: a.data.data.tag,
          detile: a.data.data.info,
          gs_name: a.data.data.info.name,
          tel: a.data.data.info.phone,
          banner: a.data.data.banner,
          special: a.data.data.special,
          product: a.data.data.product
        });
      }
    }), wx.getStorageSync("house_id") > 0 || a.util.request({
      url: "entry/wxapp/login",
      data: {
        m: "dxdapp_house",
        uniacid: wx.getStorageSync("uniacid"),
        re_id: wx.getStorageSync("re_id"),
        uid: wx.getStorageSync("uid")
      },
      cachetime: "0",
      success: function (a) {
        a.data.data > 8 && a.data.data < 32 && (wx.setStorageSync("house_id", a.data.data),
          wx.showModal({
            content: a.data.message,
            showCancel: !1,
            confirmColor: "#cc0000"
          }));
      }
    });
    console.log(t.data.special)
  },
  active(e) {
    console.log(e)
    var id = e.currentTarget.dataset.id
    this.setData({
      idx: id
    })
  },
  bao:function () {
     wx.navigateTo({
       url: 'bao/bao?name=报名',
     })
  },
  details:function (e) {
    var t = this
    a.data.news = t.data.special;
    var id =e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'details/details?name=活动&id=' + id ,
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