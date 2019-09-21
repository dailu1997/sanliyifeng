// pages/index/xiaoguo/xiaoguo.js
var a = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigations: [
      { title: "效果图", num: 10 },
      { title: "实景图", num: 5 },
      { title: "样板间", num: 6 },
      { title: "户型图", num: 6 },
      { title: "周边配套", num: 4 },
      { title: "工程进度", num: 3 },
      { title: "证件", num: 3 }
    ],
    images:[

    ],
    showId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (t) {
    var that = this
    console.log(t.name)
    if (t.name == '样板间') {
      this.setData ({
        showId:2
      })
    } else if (t.name == '效果图') {
      this.setData({
        showId: 0
      })
    }
    var name = t.name
    wx.setNavigationBarTitle({
      title: name,
    })
    var e = a.siteInfo.uniacid, i = this;
    console.log(e)
    a.util.request({
      url: "entry/wxapp/pic",
      data: {
        m: "dxdapp_house",
        uniacid: e,
        project_id: t.project_id
      },
      cachetime: "0",
      success: function (t) {
        let text = t.data.data[0].thumb_url
        console.log(text)
        var regex = /\"(.+?)\"/g;
        var result;
        result = regex.exec(text)
        console.log(that)
        var li = [] ;
        while ((result = regex.exec(text)) != null) {
           console.log(result[0])
          li.push(result[1])
        }
        // for (var e = 0; e < t.data.data.length; e++) t.data.data[e].time = a.toDate(t.data.data[e].time);
        // i.setData({
        //   sale: t.data.data
        // });
        that.setData({
          images:li
        })
      }
    });
  },
  active: function (e) {
    var id = e.currentTarget.dataset.index;
    var i = e.currentTarget.dataset.i
    console.log(i)
    this.setData({
      showId: id,
      show:i
    });
  },
  imgs: () => {
    wx.navigateTo({
      url: 'img/img',
    })
  },
  previewImage: function (e) {
    var that = this
    var current = e.currentTarget.dataset.img;
    var li = []
    for (var i = 0; i < that.data.images.length;i++){
      console.log('https://www.sxzztc.com/attachment/' + that.data.images[i])
      li.push('https://www.sxzztc.com/attachment/' + that.data.images[i])
    }
    console.log( li)
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls:li // 需要预览的图片http链接列表  
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