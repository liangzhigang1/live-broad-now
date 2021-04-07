<template>
  <div id="app">
    <Loading />
    <div v-if="loaded" ref="main" id="main">
      <HorseLamp />
      <div class="container">
        <div :style="{right: hudong ? '290px' : '0px', bottom: zuoye ? '254px' : '100px'}" class="class-panel">
            <!-- 老师播放器 -->
          <TeacherPlayer v-show="!showStartBtn" />
        <div v-show="showStartBtn" class="start-btn" @click="handleClassStart">
          <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe675;</span>
          上课
        </div>
      </div>

        <div :style="{right: hudong ? '290px' : '0px', height: zuoye ? '194px' : '40px'}" class="zuoye">
          <div class="title">
            作业展示：共66份
            <span @click="showWork" style="margin-left: 5px" v-show="!zuoye" class="icon iconfont">&#xe8ed;</span>
            <span @click="showWork" style="margin-left: 5px;font-size: 17px !important" v-show="zuoye" class="icon iconfont">&#xe604;</span>
          </div>
          <swiper v-show="zuoye" @swiperClick="swiperClick"></swiper>
        </div>
        <div :style="{right: hudong ? '290px' : '0px'}" class="footer">
          <SettingPanel />
          <FunctionPanel />
        </div>

      </div>

      <div v-show="hudong" class="media-panel-main">
        <div class="media-panel">
          <div class="wrap">
            <WhiteBorad />

            <!-- 互动区 -->
            <InteractionPanel />
          </div>
          <div @click="showHuDong" class="wrap-hide">
              <span style="color: #fff;font-size: 20px;text-align: center;" class="icon iconfont">&#xeca5;</span>
          </div>
        </div>
      </div>

      <div :style="{right: hudong ? '290px' : '0px'}" class="kejian">
        <DocList v-show="isTeacher" />
      </div>

      <div v-show="!hudong" @click="showHuDong" class="wrap-hide1">
          <span style="color: #fff;font-size: 20px;text-align: center;" class="icon iconfont">&#xeca6;</span>
      </div>
      <!-- 模态框组件 -->
      <ModalPanel />
      <WorkPanel :visible.sync="visible" :work="work" />
    </div>
  </div>
</template>

<script>
// loading组件，进教室之前的准备工作
import Loading from "./components/Loading.vue";
// 白板组件
import WhiteBorad from "./components/WhiteBoard.vue";
// 设置面板：扬声器、麦克风、摄像头、设置
import SettingPanel from "./components/SettingPanel";
// 交互面板：用户列表、聊天、发言列表
import InteractionPanel from "./components/InteractionPanel";
// 老师播放器
import TeacherPlayer from "./components/TeacherPlayer";
// 功能面板：直播间的一些功能，举手、屏幕共享、弹幕之类
import FunctionPanel from "./components/FunctionPanel";
// 模态框组件，在老师端发起互动后显示
import ModalPanel from "./components/ModalPanel";
// 跑马灯组件
import HorseLamp from "./components/HorseLamp";
// 文档列表
import DocList from "./components/Doc/DocList";
// 话术
import language from "./language/main.js";
// swiper
import swiper from './components/swiper'
// swiper
import WorkPanel from './components/WorkPanel'

import { _classBindStudentBatchApi, _getUserListApi } from './api/user/userApi'

const eventEmitter = BJY.eventEmitter;
const auth = BJY.auth;
const store = BJY.store;
const config = BJY.config;

export default {
  name: "app",
  components: {
    Loading,
    WhiteBorad,
    SettingPanel,
    InteractionPanel,
    TeacherPlayer,
    FunctionPanel,
    HorseLamp,
    ModalPanel,
    DocList,
    swiper,
    WorkPanel
  },
  
  data() {
    return {
      visible: false,
      zuoye: true,
      hudong: true,
      mediaPlayer: null,
      loaded: false,
      webrtc: 1,
      isTeacher: false,
      showStartBtn: false,
      work: null,
      src: require('../src/assets/img/8.png')
    };
  },
  mounted() {
    /**
     * flash的奇怪特性（普通大班课使用了flash）；
     * 需要在页面中插入一个大尺寸的flash才会自动播放，否则将会导致无法上麦和视频无法自动播放的问题
     */
    var url = "//live-cdn.baijiayun.com/js-sdk/1.15.0/player/extension/flash.swf";
    var html = BJY.createSWF("temp", "", url);

    var swf = $(html);
    $("body").prepend(swf);
    swf.css({
      position: "absolute",
      top: 0,
      width: 398,
      height: 298,
      opacity: 0,
    });
    // 判断是否支持flash
    if (!this.supportFlash() && !this.webrtc) {
      this.$Dialog
        .show({
          title: "提示",
          content: `网页Flash插件加载不成功，请重新<a class="opt-button"
            href="http://www.adobe.com/go/getflashplayer">启用flash</a>`,
          confirmText: "关闭",
        })
        .then(() => {
          console.log("flash启用");
        })
        .catch((e) => {
          console.log(e);
        });
    }
    // webrtc 添加页面交互
    if (this.webrtc) {
      this.$Dialog
        .show({
          title: "提示",
          content: `正在进入教室。。。`,
          confirmText: "确认",
        })
        .then(() => {
          console.log("教室内首次交互完成");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
  created() {
    // 绑定事件
    let $body = $("body");
    store.watch(
      "class.started",
      (started) => {
        this.showStartBtn = auth.isTeacher() && !started;
      },
      true
    );
    eventEmitter
      .one(eventEmitter.CLASSROOM_CONNECT_TRIGGER, (event, data) => {
        // 初始化扩展
        var extension = BJY.getExtension();
        // 如果您使用的是webrtc拓展的话，请确保引入了realtimecat.js这个依赖，否则此处会报undefined：RTCat
        extension.init().then(() => {
          eventEmitter.trigger(eventEmitter.CLASSROOM_CONNECT_TRIGGER, data);
        });
        return false;
      })
      .on(eventEmitter.CLASSROOM_CONNECT_FAIL, () => {
        alert(language.ROOM_SERVER_CONNECT_FAIL);
      })
      .on(eventEmitter.LOGIN_CONFLICT, () => {
        alert(language.LOGIN_CONFLICT);
      })
      .on(
        eventEmitter.MESSAGE_SEND_FORBID_ALL_CHANGE,
        function (event, data) {
            // console.log('xxxxxxxxxx', data);
            // if (data.forbidAll) {
            //     // 是否全体禁言
            //     data.forbidAll = false
            // } else {
            //   data.forbidAll = true
            // }
        }
    )
    .on(
        eventEmitter.SPEAK_APPLY_FORBID_ALL_CHANGE,
        function (event, data) {
          console.log('data:', data);
          console.log('event:', event);
          store.set("class.forbidAll", data.forbidAll);
        }
    )
      // 监听初始化事件，初始化组件
      // 请将所有的组件创建逻辑写于此回调函数之中
      .one(eventEmitter.VIEW_RENDER_TRIGGER, () => {
        // 注意，在VIEW_RENDER_TRIGGER事件触发后再去加载教室里面的组件
        store.set("class.xx", true);
        this.loaded = true;
        this.isTeacher = auth.isTeacher();
        eventEmitter.trigger(eventEmitter.DOC_ALL_REQ);

        if (auth.isTeacher() || auth.isAssistant()) {
          store.set("class.speakState", config.SPEAK_STATE_FREE);
        } else {
          store.set("class.speakState", config.SPEAK_STATE_LIMIT);
        }

        // if (auth.isPresenter() && store.get("class.started")) {
        if (auth.isTeacher() && store.get("class.started")) {
          setTimeout(() => {
            var player = BJY.Player.instances[BJY.store.get("user.id")];
            BJY.userPublish.setDevice(player, !player.videoOn, !player.audioOn);
          }, 1000);
        }
        if (auth.isStudent()) {
          $body.addClass("student");
        }

        // 初始化webRTC的屏幕扩展
        // 如果你需要使用到webrtc屏幕共享的话，记得在index.html里面引入对应的js依赖
        if (auth.isWebRTC()) {
          BJY.ScreenShareExtensionWebrtc.init();
        }

      })
      .one(eventEmitter.LOADING_PANEL_END, () => {
        // 进度条加载完成再显示ui
        $("#main").css("opacity", 1);
      })
      .on(eventEmitter.CLASS_END, () => {
        // 下课后所有人自动关闭音视频
        eventEmitter.trigger(eventEmitter.MEDIA_SWITCH_TRIGGER, {
          audioOn: false,
          videoOn: false,
        });
      })
      .on(eventEmitter.CLASS_START, () => {
        // 老师上课自动打开音视频
        if (auth.isPresenter()) {
          setTimeout(() => {
            var player = BJY.Player.instances[BJY.store.get("user.id")];
            BJY.userPublish.setDevice(player, !player.videoOn, !player.audioOn);
          }, 1000);
        }
      })
      .on(eventEmitter.CLASSROOM_CONNECT_SUCCESS, (event, data) => {
        // data.reconnect 是否为断线重连
      })
      .on(eventEmitter.DOC_FIT_CHANGE, () => {
      })
      // 踢出教室
      .on(eventEmitter.COMMAND_RECEIVE, (event, data) => {
        if (data.command && data.command.command_type === 'logout' && data.toId === store.get('user.id')) {
          alert('你已被踢出教室');
          location.reload();
        }
      });

    // 初始化教室
    this.init();
  },
  methods: {
    showHuDong () {
      this.hudong = !this.hudong
    },
    showWork () {
      this.zuoye = !this.zuoye
    },
    init() {
      var _this = this
      // 默认demo教室-学生端
      var options = {
        prefixName: "e83228320",
        env: "production",
        room_id: "21032159047031",
        user_number: "31",
        user_avatar: "https%3A%2F%2Falioss.shejizhizi.com%2Fwkapi%2Fdefault.jpg",
        user_name: "mobile_64aff661cfd",
        user_role: 0,
        sign: "51061dedc19171f33d3d67e91c6abc15",
        webrtc: 1,
      };

      if (location.href.includes("teacher=1")) {
        options = Object.assign(options, {
          user_name: "mobile_b15a9cc5176",
          user_role: 1,
          user_avatar: "https%3A%2F%2Fwkapi.shejizhizi.com%2Fstatic%2Favatar%2Fdefault.jpg",
          user_number: "24",
          sign: "0614cafba2bd4a2e45bb21b7b3c21539",
        });
      }
      console.log('options:', options);
      if (options.user_role == 0) {
        
        let xx = `partner_id=83228320&room_id=21032159047031&timestamp=1615996148&user_ids=${options.user_number}&partner_key=dBn3oMMrE68/kijw20wg6JGHWGUcUkwh2Fi57N9r26v4R3QbWYQ66/IUchj/pyzlKM9l1WjgNEnLqCWFc2Lzvtp6xhlI`
        let sign = _this.$md5(xx)
        let params = { partner_id: 83228320, room_id: 21032159047031, user_ids: options.user_number, timestamp: 1615996148, sign: sign}
        _classBindStudentBatchApi(params).then((response) => {
            console.log('response11111111111111111' , response);
          })

        let xx1 = `page=1&page_size=50&partner_id=83228320&role=0&timestamp=1615996149&partner_key=dBn3oMMrE68/kijw20wg6JGHWGUcUkwh2Fi57N9r26v4R3QbWYQ66/IUchj/pyzlKM9l1WjgNEnLqCWFc2Lzvtp6xhlI`
        let sign1 = _this.$md5(xx1)
        let params1 = { partner_id: 83228320, page: 1, page_size: 50, role: 0, timestamp: 1615996149, sign: sign1}
        _getUserListApi(params1).then((response) => {
            console.log('response11111111111111111' , response);
          })

        
      }

// url: "https://e83228320.at.baijiayun.com/web/room/enter?
// room_id=21032159047031&
// user_number=31&
// user_role=0&
// user_name=mobile_64aff661cfd&
// user_avatar=https%3A%2F%2Falioss.shejizhizi.com%2Fwkapi%2Fdefault.jpg&
// sign=51061dedc19171f33d3d67e91c6abc15"


      // url: "https://e83228320.at.baijiayun.com/web/room/enter?
      // room_id=21032159047031&
      // user_number=24&
      // user_role=1&
      // user_name=mobile_b15a9cc5176&
      // user_avatar=&
      // sign=0614cafba2bd4a2e45bb21b7b3c21539"

      // var url = location.href;
      // options = Object.assign(options, this.urlParser(url));
      // console.log(options);
      var classOption = {
        // 必须为字符串
        id: options.room_id,
        // 学生默认限制发言
        speakState: BJY.config.SPEAK_STATE_LIMIT,
      };
      if (Number(options.webrtc)) {
        classOption.webrtcType = Number(options.webrtc);
      }
      this.webrtc = classOption.webrtcType;

      //
      BJY.init({
        env: options.env,
        privateDomainPrefix: options.prefixName,
        // privateDomainPrefix: 'e83228320',
        class: classOption,
        user: {
          number: options.user_number,
          avatar: decodeURIComponent(options.user_avatar),
          name: decodeURIComponent(options.user_name),
          type: Number(options.user_role),
        },
        teacher: {
          number: options.user_number,
          avatar: decodeURIComponent(options.user_avatar),
          name: decodeURIComponent(options.user_name),
          type: Number(options.user_role),
        },
        sign: options.sign,
      });
    },
    // 支持解析输入的url进教室
    urlParser(url) {
      var params = {};
      if (url) {
        try {
          var queryStr = url.split("?")[1];
          var paramList = queryStr.split("&");
          paramList.forEach((item) => {
            var pair = item.split("=");
            params[pair[0]] = pair[1];
          });
          // 区分环境
          params.env = this.getEnv(url);
          // 个性域名
          params.prefixName = url.split(".")[0].split("//")[1];
        } catch (e) {
          alert("url格式错误，已进入默认教室");
        }
      }
      return params;
    },
    getEnv(url) {
      // 获取环境
      let hostName = url.match(/\/\/(.*)\./)[1];
      if (
        /test/.test(hostName) ||
        /localhost/.test(hostName) ||
        /\d{1,3}\.\d{1,3}\.\d{1,3}/.test(hostName)
      ) {
        return "test";
      }
      if (/beta/.test(hostName)) {
        return "beta";
      }
      if (/www/.test(hostName)) {
        return "";
      }
      return "";
    },
    supportFlash() {
      var swf;
      var plugins = navigator.plugins;

      if (plugins && plugins.length > 0) {
        swf = plugins["Shockwave Flash"];
      } else if (document.all) {
        // eslint-disable-next-line no-undef
        swf = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
      }
      return !!swf;
    },
    handleClassStart() {
      eventEmitter.trigger(eventEmitter.CLASS_START_TRIGGER);
    },
    swiperClick (params) {
      this.work = params
      this.visible = true
    }
  },
};
</script>

<style lang="scss">
@import "./assets/iconfont/iconfont.css";
@import "./assets/iconfont1/iconfont.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;

  #main {
    display: flex;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: #11131A;
    .container {
      flex: 1;
      height: 100%;
    }
    .media-panel-main {
      flex: 0 0 0px;
      height: 100%;
    }
    .class-panel {
      position: absolute;
      top: 0;
      left: 0;
      margin: 25px 150px;
      bottom: 220px;
      background-size: cover;
      background-repeat: no-repeat;
      .class-work {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
      }
      .start-btn {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        background: linear-gradient(#0E98D7,#027CB5);
        border: 1px solid #27AEED;
        border-radius: 5px;
        width: 178px;
        height: 42px;
        // line-height: 42px;
        color: #fff;
        // text-align: center;
        font-size: 14px;
        cursor: pointer;
      }

      .bjy-popup {
        display: none;
      }
    }
    .kejian {
      position: absolute;
      // width: 150px;
      top: 0;
      // right: 290px;
      bottom: 40px;
      // padding: 8px 12px;
      height: calc(100% - 55px);
      box-sizing: border-box;
      background: #fff;
      z-index: 1;
    }
    .media-panel {
      position: absolute;
      display: flex;
      align-items: center;
      width: 290px;
      top: 0;
      right: 0;
      bottom: 0px;
      // padding: 8px 12px;
      box-sizing: border-box;
      // background: #fff;
      background: #2B313E !important;
      box-shadow: -2px 0 6px rgba(0, 0, 0, 0.2);
      z-index: 999;
      .live-teacher-player {
        background: #000;
        height: 200px;
        width: 100%;
      }
      .wrap {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        // background: #fff;
        // padding: 10px 10px 0 10px;

        #live-teacher-player {
          height: 200px;
        }
      }
      .wrap-hide {
        // position: ab;
        display: flex;
        align-items: center;
        width: 30px;
        height: 74px;
        background: #000000;
        opacity: 0.3;
        border-radius: 4px;
        justify-content: center;
        cursor: pointer;
        z-index: 100;
      }
    }
    .zuoye {
      background: #2B3240;
      position: absolute;
      left: 0;
      // width: 100%;
      // right: 290px;
      bottom: 60px;
      height: 194px;
      // display: flex;
      // justify-content: space-between;
      // padding: 0 15px;
      // align-items: center;
      font-size: 15px;
      margin: 0 10px;
      color: #bdc6cf;
      z-index: 0;
      border-radius: 4px;
      .title {
        width: 100%;
        height: 40px;
        background: #2B3240;
        padding-left: 20px;
        display: flex;
        align-items: center;
        border-radius: 4px;
        cursor: pointer;
      }
      .item {

      }
    }
    .footer {
      border-top: 1px solid #434B59;
      position: absolute;
      left: 0;
      // right: 290px;
      bottom: 0;
      height: 55px;
      background-color: #2B313E;
      display: flex;
      justify-content: space-between;
      padding: 0 15px 7px;
      align-items: center;
      font-size: 15px;
      color: #bdc6cf;
      z-index: 1000;
      color: #fff;
      font-size: 14px;
    }
    .wrap-hide1 {
        position: absolute;
        display: flex;
        align-items: center;
        top: 44%;
        right: 0px;
        width: 30px;
        height: 74px;
        background: #000000;
        opacity: 0.3;
        border-radius: 4px;
        z-index: 100;
        text-align: center;
        justify-content: center;
        cursor: pointer;
      }
  }
  .bjy-sidebar {
    background: #2D3342 !important;
    color: red !important;
    box-shadow: -2px 0 6px rgba(0, 0, 0, 0.2);
  }

  .bjy-catalogue small {
    font-size: 12px !important;
    color: #fff;
  }
  .bjy-active > small{
    color: #04AEFF !important;
  }

  .tab-title {
    // border: 4px solid #3C4353;
    background: #3C4353;
    border-bottom: 0px !important;
    font-size: 14px;
    color: #fff;
  }
  .tab-title .active {
    background: #1A96D8;
    border-bottom: 0px;
  }
  .tab-container {
    // margin: 0px 5px !important;
    // background: #262C38 !important;
  }
}
// .bjy-catalogue {
//         height: calc(100% - 100px);
//   }
//   .bjy-doc-list {
//     height: calc(100% - 110px) !important;
//   }
  .bjy-doc-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 90px !important;
    overflow: auto
  }
  .bjy-message-sender {
    z-index: 9999 !important;
  }
  .bjy-message-sender {
    z-index: 9999 !important;
  }
  .bjy-link {
    display: none !important;
  }
  .bjy-player-theme-default {

  }
  .bjy-watermark {
    display: none;
  }
  // .bjy-avatar-wrap {
  //   -webkit-animation: twinkling 1s infinite ease-in-out
  // }
  // .animated {
  //   -webkit-animation-duration: 1s;
  //   animation-duration: 1s;
  //   -webkit-animation-fill-mode: both;
  //   animation-fill-mode: both
  // }
  // @-webkit-keyframes twinkling{
  //   0%{
  //     opacity: 0.5;
  //   }
  //   100%{
  //     opacity: 1;
  //   }
  // }
  // @keyframes twinkling {
  //   0%{
  //     opacity: 0.5;
  //   }
  //   100%{
  //     opacity: 1;
  //   }
  // }
  .bjy-body {
  background: #313847 !important;
  color: #fff !important;
}
</style>
