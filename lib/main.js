import C from './template.vue';
import layer from "layer-src"
import "../src/layer/layer.css"
import vwv from "./vue-watermark-v2"
import refreshEvent from './watermarkUpdateList';

let markInfo = {};
const layerVue = function (Vue, option = {}) {
    markInfo=option.markInfo || {};
    C.extends = {
        data: () => {
            return {
                watermark: false,
                ...option,
            }
        },
        created() {
            this.markInfo=markInfo;
        },
    };
    Vue.use(vwv)
    Vue.component(C.name, C)
}
export const updateWaterMark = function (updateInfo) {
    console.log(C);
    console.log(refreshEvent);
    markInfo = updateInfo
    refreshEvent.forEach(self => {
        self.markInfo = updateInfo
    })
}
export default layerVue;