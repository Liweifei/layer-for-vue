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
        fixed
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
        <button @click="updateMark('2222更新水印信息')">更新水印信息2222</button>

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
    <layer-iframe
      v-model="visibleAsync"
      title="异步弹窗"
      :area="['500px', 'auto']"
      top-center
      @end="syncList = []"
    >
      <div class="main"></div>
      <h2 v-for="(item, index) in syncList" :key="index">{{ index }}</h2>
    </layer-iframe>
    <button type="" @click="openlayer">打开关闭</button>
    <button type="" @click="visible2 = false">关闭2</button>
    <button type="" @click="showAsync">打开异步弹窗</button>
    <button @click="updateMark('更新水印信息')">更新水印信息</button>
  </div>
</template>

<script>
import { updateWaterMark } from "../lib/main";
export default {
  name: "app",
  data() {
    return {
      visible: false,
      visible2: false,
      visible3: false,
      visibleAsync: false,
      syncList: [],
      title: "title",
    };
  },
  mounted() {},
  methods: {
    handleEnd() {
      console.log("end");
    },
    updateMark(text) {
      updateWaterMark({
        content: [
          {
            text,
          },
        ],
      });
    },
    openlayer() {
      this.visible = !this.visible;
      setTimeout(() => {
        this.title = "false";
      }, 1000);
    },
    showAsync() {
      this.visibleAsync = true;
      const it = setInterval(() => {
        this.syncList.push(1);
        this.syncList.length > 10 && clearInterval(it);
      }, 100);
    },
  },
};
</script>

<style>
html,
body {
  background: gray;
  height: 100%;
}
.aaa {
  background: red;
}
.app {
  width: 1000px;
  /* height: 800px; */
  height: 100%;
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
.main {
  height: 300px;
}
</style>
