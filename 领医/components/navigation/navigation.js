// components/navigation/navigation.js
Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },

  // 组件的属性列表
  properties: {
    leftType: {
      type: String,
      value: '1',
      observer: function(newVal, oldVal, changedPath) {}
    }
  },

  // 组件的初始数据
  data: {
    
  },

  // 组件的方法列表
  methods: {

  },

  //生命周期函数-在组件实例进入页面节点树时执行
  attached: function() {

  }
})
