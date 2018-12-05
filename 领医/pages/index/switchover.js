//获取应用实例
const app = getApp();

Page({
  data: {
    ImageHost: app.ImageHost,
    clinicList: [
      { clinic_id: '1', clinic_name: '北京领医怡乐儿童医院1', clinic_laboratory: '内科，外科，脑科，心脏科'},
      { clinic_id: '2', clinic_name: '北京领医怡乐儿童医院2', clinic_laboratory: '内科，外科，脑科，心脏科' },
      { clinic_id: '3', clinic_name: '北京领医怡乐儿童医院3', clinic_laboratory: '内科，外科，脑科，心脏科' },
      { clinic_id: '4', clinic_name: '北京领医怡乐儿童医院4', clinic_laboratory: '内科，外科，脑科，心脏科' },
    ],
    clinic_id: '',
    clinic_name: '',
    clinic_laboratory: ''
  },

  onLoad: function (options) {
    this.setData({
      clinic_id: app.clinic_id,
      clinic_name: app.clinic_name,
      clinic_laboratory: app.clinic_laboratory
    });
  }

})
