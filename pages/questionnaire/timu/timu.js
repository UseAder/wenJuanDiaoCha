// pages/questionnaire/timu1/timu1.js


var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timuIndex: 0,
    selectWentiIndex: -1,
    timuTemplate: [],
    "timu_template": [{
      "zh-CN": [{
        "list": ["A.代理", "B.批发", "C.连锁店", "D.零售", "E.测评人", "F.推广", "G.用户"],
        'title': "1.您的定位是",
        "state": "-1",
        "prev": "上一页",
        "next": "下一题"
      }, {
        "list": ['A.设备', 'B.烟油', 'C.配件'],
        "title": "2.您经营的主业是 (可多选)",
        "state": '-1',
        "prev": "上一题",
        "next": "下一题"
      },
      {
        "list": ['A.美国', 'B.欧洲', 'C.亚洲', 'D.阿拉伯地区', 'E.非洲', '其他'],
        "title": "3.您主要针对的市场是 (可多选)",
        "state": '-1',
        "prev": "上一题",
        "next": "下一题"
      },
      {
        "list": ['A.客户', 'B.供应商'],
        "title": "4.您来展会的主要目的 (可多选)",
        "state": '-1',
        "prev": "上一题",
        "next": "下一题"
      },
      {
        "list": ['A.硬件', 'B.雾化器', 'C.主机', 'D.套装', 'E.小烟', 'F.配件'],
        "title": "5.最感兴趣的产品类型 (可多选)",
        "state": '-1',
        "prev": "上一题",
        "next": "下一题"
      }
      ]
    }, {
      "en": [{
        "list": ["Distributor", "Wholesaler", "Chain Store", "Retail", "Reviewer", "Promoter", "Consumer"],
        'title': "1.Which best position your company",
        "state": "-1",
        "prev": "Previous",
        "next": "Next"
      }, {
        "list": ['Device', 'Liquids', 'Accessories'],
        "title": "2.What is your major selling products",
        "state": '-1',
        "prev": "Previous",
        "next": "Next"
      },
      {
        "list": ['Americas', 'Europe', 'Asia', 'Gulf', 'Africa', 'If others please define'],
        "title": "3.Which is your intended markets",
        "state": '-1',
        "prev": "Previous",
        "next": "Next"
      },
      {
        "list": ['Customers', 'Suppliers'],
        "title": "4.You are in this expo for",
        "state": '-1',
        "prev": "Previous",
        "next": "Next"
      },
      {
        "list": ['Hardware', 'Atomizers', 'Mods', 'Complete Kits', 'Pods', 'Accessories'],
        "title": "5.Which product interests you most",
        "state": '-1',
        "prev": "Previous",
        "next": "Next"
      }
      ]
    }]
  },

  //选择wenti后加样式
  select_wenti: function (e) {
    if (this.data.timuTemplate[this.data.timuIndex].state) {
      var state = 'timuTemplate[' + this.data.timuIndex + '].state'
      this.setData({
        [state]: e.currentTarget.dataset.key
      });
    }
  },
  //事件处理函数
  goToPrev: function () {
    if (this.data.timuIndex <= 0) {
      wx.navigateTo({
        url: "../start/start"
      })
      return false
    }
    var timuIndex = this.data.timuIndex
    this.setData({
      timuIndex: timuIndex - 1,
    });
  },
  //事件处理函数
  goToNext: function () {
    if (this.data.timuIndex >= this.data.timu_template[0]['zh-CN'].length - 1) {
      wx.navigateTo({
        url: "../end/end"
      })
      return false
    }
    var timuIndex = this.data.timuIndex
    console.log(this.data.timuIndex)
    this.setData({
      timuIndex: timuIndex + 1,
    });
    console.log(this.data.timuIndex)

  },
  onLoad: function () {
    console.log(this.data.timu_template[0]['zh-CN']
    )
    if (app.globalData.locale) {
      this.setData({
        timuTemplate: this.data.timu_template[0]['zh-CN']
      })
    }
    else {
      this.setData({
        timuTemplate: this.data.timu_template[1]['en']
      })
    }
  }
})