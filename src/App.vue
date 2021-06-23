<template>
  <div class="app">
    <layer-iframe
      v-model="visible"
      title="title"
      skin="skin -skin "
      close-btn="4"
      :is-out-anim="false"
      :anim="4"
      :z-index="4"
      :move-end="handleEnd"
      :minStack="false"
      resize
    >
    <!-- 弹窗内容放在此处 -->
    <div>这是弹窗内容</div>
    </layer-iframe>
    <layer-iframe v-model="visible2" :area="['400px', '300px']" @end="handleEnd"
      >这是2
    </layer-iframe>
    <button type="" @click="visible = !visible">打开关闭</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      visible: false,
      visible2: false,
    };
  },
  mounted() {},
  methods: {
    handleEnd() {
      console.log("end");
    },
  },
};
</script>

<style>
.aaa {
  background: red;
}
.app{
  width: 300px;
  height: 300px;
  position: relative;
}
</style>
