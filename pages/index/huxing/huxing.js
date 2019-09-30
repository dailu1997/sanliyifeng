// pages/index/huxing/huxing.js
var a = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList:[

    ],
    name:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (t) {
    var tt = t
    var e = a.siteInfo.uniacid, that = this, lis = [];
    that.data.name = tt.name;
    that.setData({
      tt : tt.name
    })
    wx.setNavigationBarTitle({
      title: tt.name,
    }),
    a.util.request({
      url: "entry/wxapp/pic",
      data: {
        m: "dxdapp_house",
        uniacid: e,
        project_id: tt.project_id
      },
      cachetime: "0",
      success: function (t) {
        console.log(t)
        for (var i = 0; i < t.data.data.length; i++) {

          let text = t.data.data[i].thumb_url

          var regex = /\"(.+?)\"/g;
          var result;
          result = regex.exec(t.data.data[i].thumb_url)

          var li = [];
          while ((result = regex.exec(text)) != null) {

            li.push(result[1])
          }
          lis.push(li)
          
        }
        that.setData({
          lis:lis,

        })
        var liss;
        var liban;
        if(tt.name == '一封家书') {
          liss = lis[7];
          liban = lis[8]
        }else {
           liss = lis[0];
           liban = lis[2]
        }
        that.setData({
          imgList:liss,
          liban:liban
        })
      }
    })
    console.log(that.data.imgList)
  },
  imgBind:function (e) {
    var that = this;
    var idd = e.currentTarget.dataset.id, that = this, nick, img;
    if(that.data.name == '一封家书') {
      that.setData({
        imgList : that.data.lis[8]
      })
      
    }else {
      if(idd == 0){
       nick="A户型",
       img = that.data.liban[0]
       console.log(img)
    } else if (idd == 1){
      nick = "B户型",
        img = that.data.liban[1]
    } else if (idd == 2) {
      nick = "C户型",
        img = that.data.liban[2]
    } else if (idd == 3) {
      nick = "D户型"
      img = that.data.liban[3]
    } else if (idd == 4) {
      nick = "E户型"
      img = that.data.liban[4]
    } else if (idd == 5) {
      nick = "F户型"
      img = that.data.liban[5]
    }
    wx.navigateTo({
      url: 'img/img?name=' + nick + '&news=' + img + '&li=' + that.data.liban,
    })
    console.log(idd)
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