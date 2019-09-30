var e = require("we7/resource/js/util.js");

App({
  siteInfo: {
    uniacid: "3",
    acid: "3",
    version: "1.0",
    siteroot: "https://www.dxd2.cn/app/index.php",
    method_design: "3"
  },
  data: {
    news: []
  },
  util: e,
  onLaunch: function (t) {
    // e.getUserInfo();
    t.shareTicket && wx.getShareInfo && wx.getShareInfo({
      shareTicket: t.shareTicket,
      success: function (ex) {
        console.log("来自群：" + ex.roomTopic);
      }
    });
  },
  upimgs: function (e) {
    var t = this, n = e || {};
    if (wx.showLoading({
      title: "正在上传..."
    }), n == {} || !n) {
      if (!e.fail || "function" != typeof e.fail) return !1;
      e.fail({
        errno: 500,
        message: "缺少必要参数"
      });
    }
    var a = n.scannums ? n.scannums : 1, i = n.filename ? n.filename : "images", o = t.util.url("entry/wxapp/upimg", {
      m: "dxdapp_house",
      uid: t.getuid()
    });
    wx.chooseImage({
      count: a,
      sizeType: ["compressed"],
      sourceType: ["album", "camera"],
      success: function (n) {
        wx.showLoading({
          title: "正在上传..."
        });
        var a = n.tempFilePaths, r = (n.tempFiles, new Array(a.length)), s = 0;
        for (var u in a) {
          !function (n) {
            wx.uploadFile({
              url: o,
              filePath: a[n],
              name: "file",
              formData: {
                names: i
              },
              success: function (i) {
                var o = JSON.parse(i.data);
                return 0 != o.errno ? (t.util.message({
                  title: o.message,
                  type: "error"
                }), void wx.hideLoading()) : (s++ , r[n] = o.data, s == a.length && e.success && "function" == typeof e.success ? (e.success(r),
                  void wx.hideLoading()) : void 0);
              },
              fail: function (t) {
                wx.hideLoading();
                var n = JSON.parse(t.data);
                e.fail && "function" == typeof e.fail && e.fail(n);
              }
            });
          }(u);
        }
        setTimeout(function () {
          wx.hideLoading();
        }, 5e3);
      },
      fail: function () {
        wx.hideLoading(), e.fail && "function" == typeof e.fail && e.fail();
      }
    });
  },
  getLocation: function () {
    console.log(11111);
    var e = this;
    wx.getLocation({
      type: "wgs84",
      success: function (t) {
        var n = parseFloat(t.latitude), a = parseFloat(t.longitude);
        e.globalData.lat = n, e.globalData.lng = a, console.log(e.globalData.lat), console.log(e.globalData.lng);
      },
      fail: function (e) { }
    });
  },
  getuid: function (t) {
    var n = wx.getStorageSync("uid");
    console.log(n);
    if (n && "" != n && "undefined" != n && void 0 != n) return n;
    return wx.getStorageSync("uid")
  },
  toDate: function (e) {
    var t = 1e3 * e, n = new Date(t);
    return n.getFullYear() + "." + ((n.getMonth() + 1 < 10 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1) + ".") + (n.getDate() < 10 ? "0" + n.getDate() : n.getDate());
  },
  globalData: {
    userInfo: null,
    hasLogin: !1,
    sid: null,
    lat: null,
    lng: null,
    needRefresh: !1
  },
  onShow: function (e) {
    if (e.query.scene) {
      var t = decodeURIComponent(e.query.scene);
      if ("undefined" != t) {
        var n = t.substr(2);
        wx.setStorageSync("re_id", n);
      }
    } else wx.setStorageSync("re_id", 0);
  }
});