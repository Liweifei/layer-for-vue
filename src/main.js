import Vue from 'vue'
import App from './App.vue'
// import $ from 'jquery'
// import layer from "layer-src"
// import "./layer/layer.css"

import lpv from "../lib/index";
Vue.use(lpv)
// Vue.use(lpv,{
//   shadeNotClosed:true,
//   allFixed:true
// })


new Vue({
  el: '#app',
  render: h => h(App)
})
