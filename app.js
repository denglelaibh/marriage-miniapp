// app.js
App({
  onLaunch: function() {
    //var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      // wx.login({
      //     success: function () {
      //         wx.getUserInfo({
      //             success: function (res) {
      //                 //console.info(res);
      //                 that.globalData.userInfo = res.userInfo;
      //                 typeof cb == "function" && cb(that.globalData.userInfo)
      //             }
      //         })
      //     }
      // });
    }

  },
  onHide: function() {
    wx.pauseBackgroundAudio();
  },
  onShow: function() {
    wx.playBackgroundAudio()
  },
  globalData: {
    userInfo: null,

    // 下面填写酒店相关信息
    lat: 25.851817,
    lon: 115.017361,
    addressName: "新饭店4层宴会厅",

    appid: 'wx38a40ad60b0b2844', //此处改成您自己的小程序appid
    uid: 1,
    server: 'http://localhost:8080/wx',
    music_url: 'https://music.163.com/song/media/outer/url?id=541687281.mp3'
  }
});