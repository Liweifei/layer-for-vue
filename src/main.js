import Vue from 'vue'
import App from './App.vue'
// import $ from 'jquery'
// import layer from "layer-src"
// import "./layer/layer.css"

import lpv from "../lib/index";
Vue.use(lpv)


new Vue({
  el: '#app',
  render: h => h(App)
})
