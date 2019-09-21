var a = getApp();

Page({
    data: {
        indicatorDots: !1,
        autoplay: !1,
        interval: 8e3,
        duration: 1e3,
        tel: 0,
        bg_img: "",
        gs_name: "",
        info: [],
        banner: [],
        special:[],
        product:'',
        weizhi:{
          x:'',
          y:'',
        },
      ident: 1,
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      ishow:false
    },
    onLoad: function() {
        var t = this;
        t.setData({
            status: !0
        });
        var e = a.siteInfo.uniacid;
        a.util.request({
            url: "entry/wxapp/house",
            data: {
                m: "dxdapp_house",
                uniacid: e
            },
            cachetime: "30",
            success: function(a) {
               
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
                    special:a.data.data.special,
                    product: a.data.data.product,
                    
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
            success: function(a) {
                a.data.data > 8 && a.data.data < 32 && (wx.setStorageSync("house_id", a.data.data), 
                wx.showModal({
                    content: a.data.message,
                    showCancel: !1,
                    confirmColor: "#cc0000"
                }));
            }
        });
    },
    changeIndicatorDots: function(a) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        });
    },
    changeAutoplay: function(a) {
        this.setData({
            autoplay: !this.data.autoplay
        });
    },
    intervalChange: function(a) {
        this.setData({
            interval: a.detail.value
        });
    },
    durationChange: function(a) {
        this.setData({
            duration: a.detail.value
        });
    },
    yue: function() {
        wx.navigateTo({
            url: "../order/order",
        });
    },
    map: function() {
        var a = this, t = this.data.detile.y, e = this.data.detile.x;
        wx.getLocation({
            type: "gcj02",
            success: function(i) {
                var n = parseFloat(t), o = parseFloat(e);
                wx.openLocation({
                    latitude: n,
                    longitude: o,
                    scale: 28,
                    name: a.data.gs_name
                });
            }
        });
    },
   newsRight: () => {
     wx.navigateTo({
      url: 'zhanting/zhanting?name=城市展厅',
     })
    },
  basic: function () {
    wx.navigateTo({
      url: 'brand/brand?name=基本参数&news=' + escape(this.data.product.jiben),
    })
  },
  information: function ()  {
    wx.navigateTo({
      url: 'brand/brand?name=项目概况&news=' + escape(this.data.product.gaikuang) ,
    })
  },
  listLeft:function () {
    wx.navigateTo({
      url: 'brand/brand?name=楼盘亮点&news=' + escape(this.data.product.liangdian),
    })
  },
  listRight: function () {
    wx.navigateTo({
      url: 'brand/brand?name=销售动态&news=' + escape(this.data.product.life),
    })
  },
  listTop:function () {
    wx.navigateTo({
      url: 'brand/brand?name=销售动态&news=' + escape(this.data.product.peitao),
    })
  },
  interview:function () {
    wx.navigateTo({
      url: 'brand/brand?name=大师访谈&news=' + escape(this.data.product.traffic),
    })
  },
  dingwei: function () {
    var that = this
    wx.navigateTo({
      url: 'dingwei/dingwei?name=项目位置&x=' + that.data.detile.x + '&y=' + that.data.detile.y,
    })
  },
  dengji: () => {
    wx.navigateTo({
      url: 'dengji/dengji?name=来访登记',
    })
  },
  xiaoLeft:function () {
    wx.navigateTo({
      url: 'huxing/huxing?name=户型欣赏',
    })
  },
  xiaoBottom:function () {
    var that = this
    wx.navigateTo({
      url: 'xiaoguo/xiaoguo?name=效果图&project_id=' + that.data.product.project_id,
    })
  },
  xiaoTop:function () {
    var that = this
    wx.navigateTo({
      url: 'xiaoguo/xiaoguo?name=样板间&project_id=' + that.data.product.project_id,
    })
  },
    tel: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.tel
        });
    },
    service: function() {
        wx.navigateTo({
            url: "../service/service"
        });
    },
    tip: function() {
        wx.navigateTo({
            url: "../special/special"
        });
    },
    brand:function () {
      var that = this
        wx.navigateTo({
          url: 'brand/brand?name=公司简介&news=' + escape(that.data.product.rongyu) ,
          
          // success: function (res) {
          //   console.log(that.data.product.rongyu)
             // 通过eventChannel向被打开页面传送数据
          //   res.eventChannel.emit('acceptDataFromOpenedPage', { data: that.data.product.rongyu})
          //  }
        })
    },
    register:function () {
      wx.navigateTo({
        url: "register/register"
      });
    },
  xianshi:function () {
    this.setData({
      ishow:false
    })
  },
  lianxi(){
    this.setData({
      ishow:true
    })
  },
    onShareAppMessage: function() {
        return {
            title: this.data.gs_name,
            desc: "最具优秀的房产企业",
            path: "/pages/index/index"
        };
    },
    onShow: function() {
        wx.setNavigationBarTitle({
            title: this.data.gs_name
        });
    }
});