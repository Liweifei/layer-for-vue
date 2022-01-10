<template>
  <div class="app" id="abc">
    <div id="abs">
      <layer-iframe
        v-model="visible"
        :title="title"
        skin="skin -skin "
        class="layer1"
        :area="['500px', 'auto']"
        :anim="4"
        :move-end="handleEnd"
        @end="handleEnd"
      >
        <!-- 弹窗内容放在此处 -->
        <div class="aab">
          <div class="fW">这是弹窗内容</div>
          <button type="" @click="visible2 = !visible2">打开关闭2</button>
        </div>
        <layer-iframe
          title="title2"
          v-model="visible2"
          :area="['200px', '150px']"
          :max-height="560"
          releative-node="abs"
          @end="handleEnd"
        >
          <h2
            id="axa"
            style="display: inline-block; float: right"
            class="xxxxxx"
            @click="visible2 = false"
          >
            这是2
          </h2>
          <button type="" @click="visible3 = !visible3">打开关闭3</button>
          <layer-iframe
            title="title3"
            v-model="visible3"
            :area="['200px', '60px']"
            @end="handleEnd"
          >
            <h2 id="axa">这是3</h2>
          </layer-iframe>
        </layer-iframe>
      </layer-iframe>
      <div class="otherBox">
        花木成畦手自栽花木成畦手自栽 花木成畦手自栽花木成畦手自栽
      </div>
    </div>
    <button type="" @click="openlayer">打开关闭</button>
    <button type="" @click="visible2 = false">打开关闭2</button>
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
      title: "title",
    };
  },
  mounted() {},
  methods: {
    handleEnd() {
      console.log("end");
    },
    openlayer() {
      this.visible = !this.visible;
      setTimeout(() => {
        this.title = "false";
      }, 1000);
    },
  },
};
</script>

<style>
html {
  background: gray;
}
.aaa {
  background: red;
}
.app {
  width: 1000px;
  height: 800px;
  position: relative;
  background: pink;
  /* margin: 200px auto; */
  overflow-x: hidden;
}
#abs {
  width: 500px;
  height: 500px;
  margin: 30px auto;
  background: red;
  position: relative;
}
.aab {
  height: 300px;
  overflow-x: hidden;
}
.fW {
  height: 800px;
}
</style>
