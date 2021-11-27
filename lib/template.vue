<template>
  <div class="layer-iframe" ref="lpv" v-show="false">
    <slot v-if="contentVisible"></slot>
  </div>
</template>

<script>
// 阉割的配置属性
// isOutAnim: false,
// resize:false,
export default {
  name: "layer-iframe",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String | Array | Boolean,
      default: "信息",
    },
    releativeNode: {
      type: String,
      default: "",
    },
    skin: {
      type: String,
      default: "",
    },
    area: {
      type: String | Array,
      default: () => {
        return ["1000px", "100%"];
      },
    },
    offset: {
      type: String | Array,
      default: "auto",
    },
    closeBtn: {
      type: String | Boolean,
      default: "1",
    },
    shade: {
      type: String | Boolean | Array,
      default: () => {
        return [0.3, "#000"];
      },
    },
    shadeClose: {
      type: Boolean,
      default: false, //change
    },
    maxmin: {
      type: Boolean,
      default: true, //change
    },
    time: {
      type: Number,
      default: 0,
    },
    id: {
      type: String,
      default: "",
    },
    anim: {
      type: Number,
      default: 0,
    },
    // isOutAnim: {
    //   type: Boolean,
    //   default: false,
    //   readon
    // },
    fixed: {
      type: Boolean,
      default: false, //change
    },
    // resize: {
    //   type: Boolean,
    //   default: false, //change
    // },
    resizing: {
      type: Function,
      default: null,
    },
    scrollbar: {
      type: Boolean,
      default: true,
    },
    maxWidth: {
      type: Number,
      default: 1200,
    },
    maxHeight: {
      type: Number,
      default: 560,
    },
    zIndex: {
      type: Number | String,
      default: 19891014,
    },
    move: {
      type: String | Boolean | Object,
      default: ".layui-layer-title",
    },
    moveOut: {
      type: Boolean,
      default: true,
    },
    moveEnd: {
      type: Function,
      default: null,
    },
    success: {
      type: Function,
      default: null,
    },
    cancel: {
      type: Function,
      default: null,
    },
    full: {
      type: Function,
      default: null,
    },
    min: {
      type: Function,
      default: null,
    },
    restore: {
      type: Function,
      default: null,
    },
    minStack: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    value: {
      handler(val) {
        this.contentVisible = val;
        if (val) {
          this.$nextTick(() => {
            this.openlayer();
          });
        } else if (!this.alreadyDelete) {
          this.closeLayer();
        }
      },
      immediate: true,
    },
    title: {
      handler(val) {
        this.layerIndex != null && layer.title(val, this.layerIndex);
      },
    },
  },
  data() {
    return {
      layerIndex: null,
      alreadyDelete: true,
      contentVisible: false,
    };
  },
  methods: {
    openlayer() {
      const {
        title,
        releativeNode,
        skin,
        area,
        offset,
        closeBtn,
        shade,
        shadeClose,
        maxmin,
        time,
        id,
        anim,
        // isOutAnim,
        fixed,
        // resize,
        resizing,
        scrollbar,
        maxWidth,
        maxHeight,
        zIndex,
        move,
        moveOut,
        moveEnd,
        success,
        cancel,
        full,
        min,
        minStack,
      } = this;
      this.layerIndex = layer.open({
        type: 1,
        layerIframe: true,
        releativeNode, //lwf 弹窗浮动基于哪个dom（此处为id）
        content: $(this.$refs.lpv),
        end: this.beforeDestroy,
        title,
        skin,
        area,
        offset,
        closeBtn,
        shade,
        shadeClose,
        maxmin,
        time,
        id,
        anim,
        isOutAnim: false,
        fixed,
        resize: false,
        resizing,
        scrollbar,
        maxWidth,
        maxHeight,
        zIndex,
        move,
        moveOut,
        moveEnd,
        success,
        cancel,
        full,
        min,
        minStack,
      });
      this.alreadyDelete = false;
    },
    closeLayer() {
      // layer.close(this.layerIndex);
      // console.log(this.$children);
      // console.log(this.$refs.lpv);
      // console.log(this.$refs.lpv);
      // const closeBtn=document.querySelector(`#layui-layer${this.layerIndex} .layui-layer-close`)
      // console.log(document.querySelector(`#layui-layer${this.layerIndex}`));
      // console.log(closeBtn);
      // closeBtn && closeBtn.click()
      layer.closeChild(this.layerIndex);
    },
    beforeDestroy(index) {
      this.alreadyDelete = true;
      this.contentVisible = false;
      this.$emit("input", false);
      this.$emit("end");
    },
  },
};
</script>
<style scoped>
.layer-iframe {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.layui-layer-content .layer-iframe {
  height: 100%;
}
/* .layer-iframe .layui-layer-content{
  height: 100% !important;
} */
/* .layui-layer .layer-iframe{
  position: absolute;
  width: 100%;
  height: 100%;
} */
</style>
