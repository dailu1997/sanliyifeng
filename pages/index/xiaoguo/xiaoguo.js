// pages/index/xiaoguo/xiaoguo.js
var a = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigations: [
      { title: "效果图", num: 10 ,images:''},
      { title: "实景图", num: 5, images: '' },
      { title: "样板间", num: 6, images: ''},
      { title: "户型图", num: 6, images: ''},
      { title: "周边配套", num: 4, images: '' },
      { title: "工程进度", num: 3, images: '' },
      { title: "证件", num: 3, images: ''}
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
    var e = a.siteInfo.uniacid, i = this, lis=[];
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
        for (var i = 0; i < t.data.data.length; i++){
          
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
        // let text = t.data.data[1].thumb_url
        // console.log(text)
        // var regex = /\"(.+?)\"/g;
        // var result;
        // result = regex.exec(text)
        // console.log(result[0])
        // var li = [] ;
        // while ((result = regex.exec(text)) != null) {
        //    console.log(result[0])
        //   li.push(result[1])
        // }
        // for (var e = 0; e < t.data.data.length; e++) t.data.data[e].time = a.toDate(t.data.data[e].time);
        // i.setData({
        //   sale: t.data.data
        // });
        console.log(that.data.showId)
        for (var i = 0; i < that.data.navigations.length;i++){
          if (i == 0) {
            that.data.navigations[0].images = lis[1]
          } else if (i == 1) {
            that.data.navigations[1].images = lis[3]
          } else if (i == 2) {
            that.data.navigations[2].images = lis[0]
          } else if (i == 3) {
            that.data.navigations[3].images = lis[2]
          } else if (i == 4) {
            that.data.navigations[4].images = lis[4]
          } else if (i == 5) {
            that.data.navigations[5].images = lis[5]
          } else if (i == 6) {
            that.data.navigations[6].images = lis[6]
          }
          console.log(that.data.navigations)
        }
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
      //console.log('https://www.sxzztc.com/attachment/' + that.data.images[i])
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