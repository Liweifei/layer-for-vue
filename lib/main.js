import C from './template.vue';
import layer from "layer-src"
import "../src/layer/layer.css"
const Calendar = function (Vue, option = {}) {
    C.extends={
        data:()=>{
            return option
        }
    };
    Vue.component(C.name, C)
}
export default Calendar;