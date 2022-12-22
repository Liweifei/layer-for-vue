import Vue from 'vue'
import App from './App.vue'
// import $ from 'jquery'
// import layer from "layer-src"
// import "./layer/layer.css"

import lpv from "../lib/index";

Vue.use(lpv)
// Vue.use(lpv,{
//   shadeNotClosed: true, //是否在缩小弹窗时不关闭遮罩，默认false
//   allFixed: true, //是否在全局强制开启弹窗css属性positon为fixed，默认false
//   allMaxHeight:"100%",//全局配置高度自适应时弹窗的最大高度（默认96%，可以是Number）
//   allStartTop:0//全局配置弹窗的初始位置（默认是在位置为top:2%）
// })


new Vue({
  el: '#app',
  render: h => h(App)
})
