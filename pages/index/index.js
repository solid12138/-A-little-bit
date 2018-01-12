//获取应用实例  
var app = getApp()
Page({
  data: {
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ]
  },
  onLoad: function () {
  },
  onPullDownRefresh(){
    wx.startPullDownRefresh();
  },
  music(){
    wx.playBackgroundAudio({
      dataUrl: 'http://dl.stream.qqmusic.qq.com/C4000021Vepl1UX3uG.m4a?vkey=9996DA631C75FB71F4DAEB774F54676053AB7416E4AC428D7C3163604F9571A9D32F17E6A369738670CB073A50D799BC1C5EF72B814FA075&guid=1551536590&uin=1428683283&fromtag=66',
      title: '',
      coverImgUrl: ''
    })
  },
  photograph(){
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
  },
  modalcnt(){
    wx.showModal({
      title: '提问',
      content: '佳音是最可爱的人!',
      cancelText: '是的是的',
      confirmText: '真有眼光',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    }) 
  },
  why(){
    wx.setNavigationBarTitle({
      title: '猜猜哪里改变了'
    })
  },
  action(){
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  posit(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  scan(){
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
      }
    })
  },
  shock(){
    wx.vibrateLong({

    })
  },
  what(){
    wx.openSetting();
  }
})

