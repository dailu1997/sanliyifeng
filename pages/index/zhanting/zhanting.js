// pages/index/zhanting/zhanting.js
Page({
  data: {
    latitude: 34.2155165611,
    longitude: 108.9470726926,
    markers:
      [
        {
          id: 0,
          latitude: 34.2155165611,
          longitude: 108.9470726926,
          name: '展厅1',
          callout: {
            content: "朱雀云天",
            padding: 10,
            display: 'ALWAYS',
            textAlign: 'center',
            borderRadius: 10,
            borderWidth: 1,
          }
        },
        {
          id: 1,
          latitude: 34.2130708970,
          longitude: 108.9368140697,
          name: '展厅2',
          callout: {
            content: "朱雀苑",
            padding: 10,
            display: 'ALWAYS',
            textAlign: 'center',
            borderRadius: 10,
            borderWidth: 1,
          }
        },
        {
          id: 2,
          latitude: 34.2209535099,
          longitude: 108.9641779661,
          name: '展厅3',
          callout: {
            content: " 大雁塔",
            padding: 10,
            display: 'ALWAYS',
            textAlign: 'center',
            borderRadius: 10,
            borderWidth: 1,
          }
        },
      ]
  },
  selectMarket: function (e) {
    console.log(e)
    var id = e.markerId
    console.log(id)
    wx.openLocation({
      latitude: this.data.markers[id].latitude,
      longitude: this.data.markers[id].longitude,
      name: this.data.markers[id].name,
    })
  },
  onLoad: function (options) {
    var name = options.name
    wx.setNavigationBarTitle({
      title: name,
    })
    // 这里请求接口
  },
});