import C from './template.vue';
import layer from "layer-src"
import "../src/layer/layer.css"
import {markComponent} from "./vue-watermark-v2"
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
    Vue.component("layer-vue-watermark", markComponent)//避免冲突
    Vue.component(C.name, C)
}
export const updateWaterMark = function (updateInfo) {
    markInfo = updateInfo
    refreshEvent.forEach(self => {
        self.markInfo = updateInfo
    })
}
export default layerVue;