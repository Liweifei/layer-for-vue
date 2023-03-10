# 基于 vue 版本版的 layer,提供基于 vue 的核心弹窗功能

## layer-for-vue(当前版本 V1.1.9)

## layer 版本(3.5.1)

## 兼容版本

Vue2.x

## 全局配置项 param

```javascript
// 可开户配置如下
const param = {
  shadeNotClosed: true, //是否在缩小弹窗时不关闭遮罩，默认false
  allFixed: true, //是否在全局强制开启弹窗css属性positon为fixed，默认false
  allMaxHeight: "100%", //全局配置高度自适应时弹窗的最大高度（默认96%，可以是Number）
  allStartTop: 0 //全局配置弹窗的初始位置（默认是在位置为top:2%）
};
Vue.use(lpv, param);
```

## 阉割的配置属性

isOutAnim

resize

## Install

```javascript
	npm i layer-for-vue -S

	//main.js
	import lfv from "layer-for-vue";
	Vue.use(lfv)

	（1）其它layer方法同当前版本一致

	（2）核心弹窗使用
	<layer-iframe
      v-model="visible"//使用v-modal控制弹窗显示隐藏
      title="title"
    >
	<!-- 弹窗内容放在此处 -->
    <div>这是弹窗内容</div>
    </layer-iframe>
```

## Attribute

| 属性           | 类型                 | 说明                                                                                                                                                                                                                                                                                                       | 默认                                                                                                              | 是否必传 |
| -------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------- |
| v-model        | Boolean              | 控制弹窗显示隐藏                                                                                                                                                                                                                                                                                           | 无                                                                                                                | TRUE     |
| releative-node | String               | 控制弹窗基于哪个父节点，此处填 id 如（releative-node="abc"）                                                                                                                                                                                                                                               | 无                                                                                                                | FALSE    |
| title          | String/Array/Boolean | 标题                                                                                                                                                                                                                                                                                                       | 信息                                                                                                              | FALSE    |
| skin           | String               | 样式类名                                                                                                                                                                                                                                                                                                   | ""                                                                                                                | FALSE    |
| area           | String/Array         | 宽高;在默认状态下，layer 是宽高都自适应的，但当你只想定义宽度时，你可以 area: '500px'，高度仍然是自适应的。当你宽高都要定义时，你可以 area: ['500px', '300px']                                                                                                                                             | ["1000px","96%"],注意 96%是根据第一个非 static 定位的父标签去设置的，如果默认根据 body 或 html，请设置 fixed 属性 | FALSE    |
| offset         | String/Array         | 坐标，示例值如'auto'、'100px'、['100px', '50px']、't'、'r'、'b'、'l'、'lt'、'lb'、'rt'、'rb'                                                                                                                                                                                                               | auto:垂直水平居中                                                                                                 | FALSE    |
| close-btn      | String/Boolean       | 关闭按钮;可通过配置 1 和 2 来展示，如果不显示，则 closeBtn: 0                                                                                                                                                                                                                                              | 1                                                                                                                 | FALSE    |
| shade          | String/Array/Boolean | 遮罩;即弹层外区域。默认是 0.3 透明度的黑色背景（'#000'）。如果你想定义别的颜色，可以 shade: [0.8, '#393D49']；如果你不想显示遮罩，可以 shade: 0                                                                                                                                                            | [0.3, '#000']                                                                                                     | FALSE    |
| top-center     | Boolean              | 为 true 时不使用自定义的初始定位 top,top 居中.(FALSE 时 top 为 2%)                                                                                                                                                                                                                                         | FALSE                                                                                                             | FALSE    |
| shade-close    | Boolean              | 是否点击遮罩关闭                                                                                                                                                                                                                                                                                           | TRUE                                                                                                              | FALSE    |
| time           | Number               | 自动关闭所需毫秒;默认不会自动关闭。当你想自动关闭时，可以 time: 5000，即代表 5 秒后自动关闭，注意单位是毫秒（1 秒=1000 毫秒）                                                                                                                                                                              | 0                                                                                                                 | FALSE    |
| id             | String               | 用于控制弹层唯一标识;设置该值后，不管是什么类型的层，都只允许同时弹出一个。一般用于页面层和 iframe 层模式                                                                                                                                                                                                  | 空字符                                                                                                            | FALSE    |
| anim           | Number               | 弹出动画;我们的出场动画全部采用 CSS3。这意味着除了 ie6-9，其它所有浏览器都是支持的。目前 anim 可支持的动画类型有 0-6 如果不想显示动画，设置 anim: -1 即可。参数值如下：anim: 0 平滑放大（默认）。anim: 1 从上掉落。anim: 2 从最底部往上滑入。nim: 3 从左滑入。anim: 4 从左翻滚。anim: 5 渐显。anim: 6 抖动 | 0                                                                                                                 | FALSE    |
| is-out-anim    | Boolean              | 关闭动画；默认情况下，关闭层时会有一个过度动画。如果你不想开启，设置 isOutAnim: false 即可                                                                                                                                                                                                                 | TRUE                                                                                                              | FALSE    |
| maxmin         | Boolean              | 最大最小化；该参数值对 type:1 和 type:2 有效。默认不显示最大小化按钮。需要显示配置 maxmin: true 即可                                                                                                                                                                                                       | TRUE                                                                                                              | FALSE    |
| fixed          | Boolean              | 固定；即鼠标滚动时，层是否固定在可视区域。如果不想固定，设置 fixed: false 即可（注意 Safari 浏览器默认 true 且不可更改）                                                                                                                                                                                   | TRUE                                                                                                              | FALSE    |
| resize         | Boolean              | 是否允许拉伸                                                                                                                                                                                                                                                                                               | FALSE                                                                                                             | FALSE    |
| resizing       | Function             | 监听窗口拉伸动作；当你拖拽弹层右下角对窗体进行尺寸调整时，如果你设定了该回调，则会执行。回调返回一个参数：当前层的 DOM 对象                                                                                                                                                                                | null                                                                                                              | FALSE    |
| scrollbar      | Boolean              | 是否允许浏览器出现滚动条；默认允许浏览器滚动，如果设定 scrollbar: false，则屏蔽                                                                                                                                                                                                                            | TRUE                                                                                                              | FALSE    |
| max-width      | Number               | 最大宽度；请注意：只有当 area: 'auto'时，maxWidth 的设定才有效。                                                                                                                                                                                                                                           | 1200                                                                                                              | FALSE    |
| max-height     | Number               | 最大高度；请注意：只有当 area: 'auto'时，maxWidth 的设定才有效。                                                                                                                                                                                                                                           | 560                                                                                                               | FALSE    |
| z-index        | Number               | 层叠顺序;一般用于解决和其它组件的层叠冲突                                                                                                                                                                                                                                                                  | 19891014（贤心生日 0.0）                                                                                          | FALSE    |
| move           | String/DOM/Boolean   | 触发拖动的元素;默认是触发标题区域拖拽。如果你想单独定义，指向元素的选择器或者 DOM 即可。如 move: '.mine-move'。你还可以配置设定 move: false 来禁止拖拽                                                                                                                                                     | .layui-layer-title                                                                                                | FALSE    |
| move-out       | Boolean              | 是否允许拖拽到窗口(为 TRUE 时优化了弹窗可拖到视窗外)外                                                                                                                                                                                                                                                     | TRUE                                                                                                              | FALSE    |
| move-end       | Function             | 拖动完毕后的回调方法；默认不会触发 moveEnd，如果你需要，设定 moveEnd: function(layero){}即可。其中 layero 为当前层的 DOM 对象                                                                                                                                                                              | null                                                                                                              | FALSE    |
| success        | Function             | 层弹出后的成功回调方法；success 会携带两个参数，分别是当前层 DOM 当前层索引如 success: function(layero, index){}                                                                                                                                                                                           | null                                                                                                              | FALSE    |
| cancel         | Function             | 右上角关闭按钮触发的回调;该回调携带两个参数，分别为：当前层索引参数（index）、当前层的 DOM 对象（layero），默认会自动触发关闭。如果不想关闭，return false 即可                                                                                                                                             | null                                                                                                              | FALSE    |
| full           | Function             | 最大化后触发的回调;携带两个参数，即当前层 DOM、当前层索引如 full: function(layero, index)                                                                                                                                                                                                                  | null                                                                                                              | FALSE    |
| min            | Function             | 最小化后触发的回调;携带两个参数，即当前层 DOM、当前层索引如 min: function(layero, index)                                                                                                                                                                                                                   | null                                                                                                              | FALSE    |
| restore        | Function             | 还原后触发的回调;携带两个参数，即当前层 DOM、当前层索引如 restore : function(layero, index)                                                                                                                                                                                                                | null                                                                                                              | FALSE    |

## emit 回调函数

| 函数名 | 说明               | 返回值 |
| ------ | ------------------ | ------ |
| end    | 层销毁后触发的回调 | 无     |

## Other

1、后继会继续更新 vue3 版本

2、如果有其他问题邮件沟通1195669615@qq.com或者加 qq1195669615。若插件能够帮助到您，期待您的 star 哦！