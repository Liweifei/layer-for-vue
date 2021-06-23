import C from './template.vue';
import layer from "layer-src"
import "../src/layer/layer.css"
const Calendar = function (Vue) {
    Vue.component(C.name, C) 
}
export default Calendar;