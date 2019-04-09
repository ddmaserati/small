// pages/profile/profile.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    src: '/image/home/home_normal.png',
    hasUserInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) 
        {
          wx.getUserInfo({
            success(res) {
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
        else{
          that.setData({
            hasUserInfo:true
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
 
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  aboutUs: function() {
    wx.showToast({
      title: '点击了关于我们',
      icon: '',
      image: '',
      duration: 2000,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  //获取用户信息
  getUserInfo: function() {
    var that = this
    wx.authorize({
      scope: 'scope.userInfo',
      success() {
        // 授权获取用户信息
        wx.getUserInfo({
          success(res) {
            that.setData({
              userInfo: res.userInfo,
              hasUserInfo: false
            })
          }
        })
      }
    })
  }
})