<template>
  <div id="loading"></div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    
  },
  mounted() {
    let loading = BJY.Loading.create({
      // 占位元素
      element: $("#loading"),
      // logo URL 可自定义自己的加载 logo
      isNewStyle: true,
      // isBJY: true,
      // hasBJYSupport: true,
      // backgroundUrl: {bUrl: require('../assets/img/content_img_beijing_nor.png') },
      progressTextColor: '#28779E',
      progressDescColor: '#28779E',
      // logoUrl: "http://img.baijiayun.com/0baijiacloud/logo/ydzb/v5/www-loading.png",
      logoUrl: require('../assets/img/content_img_wlkt_nor.png'),
    });

    // 获取事件处理对象 eventEmitter
    var eventEmitter = BJY.eventEmitter;
    eventEmitter
      // 监听 loading 开始加载事件， one() 函数表示事件只处理一次，若需要一直监听请使用 on() 函数
      .one(eventEmitter.LOADING_PANEL_START, (event, data) => {
        // loading 开始加载时要做的事情
      })
      // 监听 loading 结束加载事件
      .one(eventEmitter.LOADING_PANEL_END, (event, data) => {
        // loading 结束加载时要做的事情

        /*
         * 销毁 Loading 对象，可在此销毁进度条，
         * 若此时直播尚未开始，可以先进入倒计时等待页面，直到接收到事件 eventEmitter.VIEW_RENDER_TRIGGER
         */
        loading.destroy();
      })
      // 监听初始化事件
      .one(eventEmitter.VIEW_RENDER_TRIGGER, (event, data) => {
        // 服务器已准备就绪，开始初始化业务界面，进入直播页面
        // 加载直播需要的各种组件，包括播放器，白板，用户列表等等
      });
  },
  beforeDestroy() {},
};
</script>

<style lang="scss">
.bjy-loading-panel .bjy-loading-content.bjy-web-loading-content .bjy-progress {
  width: 100% !important;
}
//@import url(); 引入公共css类
.bjy-loading-panel {
  background: url("../assets/img/content_img_beijing_nor.png") no-repeat;
  background-size: 100% 100%;
  // 
}
.bjy-loading-logo {
  width: 100%;
  height: 70%;
  top: 35% !important;
  position: absolute;
}
.bjy-loading-content{
  // width: 639px;
  // height: 412px;
  background: url("../assets/img/content_img_suipian_nor.png");
  background-size: 100% 100%;
  // top: 37% !important;
  // left:50%;
}

// .bjy-progress {
//   background-color: #d8d9d8;
//   -webkit-border-radius: 2px;
//   -moz-border-radius: 2px;
//   border-radius: 2px;
//   height: 6px !important;
//   text-align: left;
//   margin: 100px auto 0px auto !important;
//   position: relative;
//   width: 100% !important;
// }
// .bjy-progress-text {
//   color: red !important;
//   position: absolute;
//   top: 500px !important;
//   right: 0
// }
</style>
