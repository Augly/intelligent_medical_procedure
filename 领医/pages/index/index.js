//获取应用实例
const app = getApp();

Page({

  data: {
    banner_list: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    ],
    ImageHost: app.ImageHost,
    clinic_id: '',
    clinic_name: '',
    clinic_laboratory: '',
  },
  toMydoctor(){
    wx.navigateTo({
      url: '/pages/my/doctor/doctor',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad: function (options) {
    if (options.clinic_id) {
      app.clinic_id = options.clinic_id;
      app.clinic_name = options.clinic_name;
      app.clinic_laboratory = options.clinic_laboratory;
    }
    if (app.clinic_id == '') {
      app.clinic_id = '1';
      app.clinic_name = '北京领医怡乐儿童医院1';
      app.clinic_laboratory = '内科，外科，脑科，心脏科';
    }
    this.setData({
      clinic_id: app.clinic_id,
      clinic_name: app.clinic_name,
      clinic_laboratory: app.clinic_laboratory
    });
  }
  
})
