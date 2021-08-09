<template>
  <div class="layer-iframe" ref="lpv">
    <slot v-if="value"></slot>
  </div>
</template>

<script>
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
    skin: {
      type: String,
      default: "",
    },
    area: {
      type: String | Array,
      default: ()=>{
        return ["1000px","100%"]
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
      default: ()=>{
        return [0.3, '#000'];
      },
    },
    shadeClose: {
      type: Boolean,
      default: true, //change
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
    isOutAnim: {
      type: Boolean,
      default: true,
    },
    fixed: {
      type: Boolean,
      default: true,//change
    },
    resize: {
      type: Boolean,
      default: false,//change
    },
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
        this.$nextTick(() => {
          if (val) {
            this.openlayer();
          } else {
            this.closeLayer();
          }
        });
      },
      immediate: true,
    },
    title:{
      handler(val){
        this.layerIndex!=null &&  layer.title(val, this.layerIndex) 
      }
    }
  },
  data() {
    return {
      layerIndex: null,
    };
  },
  methods: {
    openlayer() {
      const {
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
        isOutAnim,
        fixed,
        resize,
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
        layerIframe:true,
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
        isOutAnim,
        fixed,
        resize,
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
    },
    closeLayer() {
      layer.close(this.layerIndex);
    },
    beforeDestroy() {
      this.$emit("input", false);
      this.$emit("end");
    },
  },
};
</script>
