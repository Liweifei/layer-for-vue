<template>
  <div class="app">
    <layer-iframe
      v-model="visible"
      :title="title"
      skin="skin -skin "
      :area="['500px', '10%']"
      :is-out-anim="false"
      :anim="4"
      :move-end="handleEnd"
      :minStack="false"
      resize
    >
      <!-- 弹窗内容放在此处 -->
      <div>这是弹窗内容</div>
      <button type="" @click="visible2 = !visible2">打开关闭2</button>
      <layer-iframe
        title="title2"
        v-model="visible2"
        :area="['200px', 'auto']"
        resize
        move-out
        :max-height="560"
        @end="handleEnd"
      >
        <h2 id="axa" style="display: inline-block; float: right" class="xxxxxx">这是2</h2>
        <button type="" @click="visible3 = !visible3">打开关闭3</button>
        <layer-iframe
          title="title3"
          fixed
          v-model="visible3"
          :area="['200px', '200px']"
          @end="handleEnd"
        >
          <h2 id="axa">这是3</h2>
        </layer-iframe>
      </layer-iframe>
    </layer-iframe>
    <button type="" @click="openlayer">打开关闭</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      visible: false,
      visible2: false,
      visible3: false,
      title:"title"
    };
  },
  mounted() {},
  methods: {
    handleEnd() {
      console.log("end");
    },
    openlayer() {
      this.visible = true;
      setTimeout(()=>{
        this.title="false";
      },1000)
    },
  },
};
</script>

<style>
.aaa {
  background: red;
}
.app {
  width: 300px;
  height: 300px;
  position: relative;
}
</style>
