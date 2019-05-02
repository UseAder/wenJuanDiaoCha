// pages/questionnaire/start/start.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
        localeType: false,
    startTemplate:[],
    "start_template":[{
      "zh-CN": {
        "ExpoName": "展会名称",
        "Company": "公司名称",
        "Name": "姓名",
        "Position": "职位",
        "Phone": "电话",
        "Email": "邮箱",
        "next": "下一题"
      },
        "en": {
          "ExpoName": "Expo Name",
          "Company": "Company",
          "Name": "Name",
          "Position": "Position",
          "Phone": "Phone",
          "Email": "Email",
          "next": "Next"
        }
      }]
  },
  //事件处理函数
  goToNext:function() {
    wx.navigateTo({
      url: "../timu/timu"
    })
  },
  localeMethod: function () {
    console.log(this.data.localeType)
    let localeType = this.data.localeType
    this.setData({
      localeType: !localeType,
    })
    app.globalData.locale = this.data.localeType
    console.log(this.data.localeType)
    if (app.globalData.locale) {
      this.setData({
        startTemplate: this.data.start_template[0]["zh-CN"]
      })
    }
    else {
      this.setData({
        startTemplate: this.data.start_template[0]["en"]
      })}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      localeType: app.globalData.locale
    })

    console.log(this.data.start_template)
    if (app.globalData.locale) {
      this.setData({
        startTemplate: this.data.start_template[0]["zh-CN"]
      })
    }
    else {
      this.setData({
        startTemplate: this.data.start_template[0]["en"]
      })
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