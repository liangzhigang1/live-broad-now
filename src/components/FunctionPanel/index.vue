<template>
  <div class="function-panel">
    <div class="left">
      <div class="bjy-spacer"></div>
      <div v-if="!isStudent" @click="toggleMediaPlayer" class="btn-div">
        <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe60a;</span>
        播放
      </div>

      <!-- 录制按钮 -->
      <div v-if="!isStudent" class="btn-wrap btn-div">
        <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe6b0;</span>
        <Record class="bjy-custom-record" v-if="!isStudent" />
      </div>
      

      <!-- 屏幕分享菜单 -->
      <div class="btn-wrap btn-div">
        <!-- <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe675;</span> -->
        <ShareScreenMenu />
      </div>

      <!-- 下载素材弹框 -->
      <div @click="showHomeworkMater" v-if="isStudent" class="btn-wrap btn-div">
        <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe675;</span>
        下载素材
      </div>

      <!-- 提交作业 -->
      <div @click="showSubmitWork" v-if="isStudent" class="btn-wrap btn-div">
        <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe675;</span>
        提交作业
      </div>

      

      <!-- 举手菜单 -->
      <div v-if="isStudent" class="btn-wrap btn-div">
        <!-- <span style="font-size: 16px;" class="iconfont">&#xe603;</span> -->
        <!-- <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe603;</span>
        举手 -->
        <SpeakApplyMenu />
      </div>


      <div style="position: relative"  v-if="!isStudent" class="btn-div showZuoye">
        <div class="showZuoye">
          <span style="font-size: 16px;margin-right:4px" class="iconfont showZuoye">&#xe62d;</span>
          发布作业
        </div>
        


        <div v-if="showZuoye" class="more-layer active">
          <div class="wrapper" >
            <div @click="toggleQuiz" class="item">
              <span  style="font-size: 16px;margin-right:6px"  class="iconfont">&#xe62d;</span>
              发布作业
            </div>
            <div @click="toggleViewQuiz" class="item">
              <span style="font-size: 16px;margin-right:6px" class="iconfont">&#xe609;</span>
              查看发布
            </div>
             <!-- <div class="item">
              <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe609;</span>
              xxx
            </div> -->
          </div>
        </div>


      </div>

      <!-- <div v-if="!isStudent" @click="toggleAnswer" class="btn-div">
        <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe603;</span>
        举手
      </div> -->

      <!-- <div v-if="!isStudent" @click="toggleLottery" class="btn-div">
        <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe609;</span>
        抽奖
      </div> -->

      <div v-if="isHandUp && !isStudent" @click="toggleHandUp(false)" class="btn-div">
        <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe603;</span>
        允许举手
      </div>
      <div v-if="!isHandUp && !isStudent" @click="toggleHandUp(true)" class="btn-div">
        <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe6b4;</span>
        禁止举手
      </div>

      <!-- <div v-if="!isStudent" @click="toggleRollCall" class="btn-div">
        <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe61e;</span>
        点名
      </div> -->

      <div v-if="!isStudent" @click="toggleEvaluate" class="btn-div">
        <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe61e;</span>
         评价
      </div>


      <div v-if="!isStudent" style="position: relative" class="btn-div show111">
        <div class="show111">
          <span style="font-size: 16px;margin-right:4px" class="iconfont show111">&#xe627;</span>
          <span class="show111">更多</span>
        </div>
        
        <div v-if="show" class="more-layer active">
          <div class="wrapper" >

            <div v-if="isRollCall" @click="toggleRandomRollCall" class="item">
              <span style="font-size: 16px;margin-right:6px" class="iconfont">&#xe609;</span>
              随机点名
            </div>
            <div v-else @click="closeRandomRollCall1" class="item">
              <span style="font-size: 16px;margin-right:6px" class="iconfont">&#xe609;</span>
              结束点名
            </div>

            <div @click="toggleIncentivePayment" class="item">
              <span  style="font-size: 16px;margin-right:6px"  class="iconfont">&#xe609;</span>
              发放激励
            </div>
            <div v-if="!isWatermark" @click="closeWatermark" class="item">
              <span style="font-size: 16px;margin-right:6px" class="iconfont">&#xe609;</span>
              打开水印
            </div>
            <div v-if="isWatermark" @click="closeWatermark" class="item">
              <span style="font-size: 16px;margin-right:6px" class="iconfont">&#xe609;</span>
              关闭水印
            </div>
             
             <!-- <div class="item">
              <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe609;</span>
              xxx
            </div> -->
          </div>
        </div>
        
      </div>

      <!-- <div v-if="!isStudent" @click="toggleAttentionDetection">
        <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe675;</span>
        专注度检测
      </div> -->
    </div>

    <div class="right">


      <!-- 退出课堂 -->
      <div @click="exitRoom" v-if="isStudent" class="btn-wrap btn-div">
        退出课堂
      </div>
      <div style="margin-right: 20px" v-if="!isStudent && started" @click="exitRoom" class="btn-div">
        退出课堂
      </div>
      <!-- 上下课 -->
      <div v-if="!isStudent" @click="toggleClassStart" class="btn-div">
        <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe609;</span>
        {{ statusTip }}
      </div>
      
      <!-- <div v-if="isStudent" class="btn-wrap">
        <SpeakApplyMenu />
      </div> -->

      

      <!-- 弹幕按钮 -->
      <!-- <div @click="toggleBarrage()" class="btn-wrap">
        <span style="font-size: 16px;margin-right:4px" class="iconfont">&#xe603;</span>
        <i v-if="isBarrageOn" class="icon icon-barrage-on"></i>
        <i v-else class="icon icon-barrage-off"></i>
        {{ barrageState }}
      </div> -->

      <!-- 线路切换 -->
      <select
        class="cdn-node-list"
        v-if="cdnList.length > 1 && canSwitchCdn"
        v-model="currentNode"
        name="cdn"
        id="cdn-list"
      >
        <option v-for="index in cdnList.length" :key="index" :value="index">
          {{ index | cdnListFilter }}
        </option>
      </select>
    </div>
    <IncentivePayment @closeIn="closeIn" :visible="visible" />
    <Evaluate @closeEvaluate="closeEvaluate" :visibleEvaluate="visibleEvaluate" />
    <RandomRollCall @closeRandomRollCall="closeRandomRollCall" :visibleRandomRollCall="visibleRandomRollCall" />
    <ViewQuiz @closeViewQuiz="closeViewQuiz" :visibleViewQuiz="visibleViewQuiz" />
    <HomeworkMater @closeHomeworkMater="closeHomeworkMater" :visibleHomeworkMater="visibleHomeworkMater" />
    <SubmitWork @closeSubmitWork="closeSubmitWork" :visibleSubmitWork="visibleSubmitWork" />
  </div>
</template>

<script>
import language from "../../language/main";
import SpeakApplyMenu from "./SpeakApplyMenu";
import ShareScreenMenu from "./ShareScreenMenu";
import Record from "./Record";
import IncentivePayment from "../ModalPanel/IncentivePayment";
import Evaluate from "../ModalPanel/Evaluate";
import RandomRollCall from "../ModalPanel/RandomRollCall";
import ViewQuiz from "../ModalPanel/ViewQuiz";
import HomeworkMater from "../ModalPanel/HomeworkMater";
import SubmitWork from "../ModalPanel/SubmitWork";
import { _setWatermarkApi } from '../../api/doc/docApi'




let store = BJY.store;
let eventEmitter = BJY.eventEmitter;
let auth = BJY.auth;

export default {
  components: {
    SpeakApplyMenu,
    ShareScreenMenu,
    Record,
    IncentivePayment,
    Evaluate,
    RandomRollCall,
    ViewQuiz,
    HomeworkMater,
    SubmitWork
  },
  data() {
    return {
      isRollCall: true,
      isWatermark: true,
      isHandUp: true,
      visibleSubmitWork: false,
      visibleHomeworkMater: false,
      visibleViewQuiz: false,
      visible: false,
      visibleRandomRollCall: false,
      visibleEvaluate: false,
      show: false,
      showZuoye: false,
      statusTip: "",
      language: language,
      isStudent: auth.isStudent(),
      barrage: null,
      isBarrageOn: false,
      cdnList: [],
      currentNode: 1,
      canSwitchCdn: !BJY.auth.isWebRTC(),
    };
  },
  computed: {
    barrageState() {
      return this.isBarrageOn ? language.BARRAGE_ON : language.BARRAGE_OFF;
    },
  },
  watch: {
    currentNode(newIndex, oldIndex) {
      console.log(newIndex);
      eventEmitter.trigger(eventEmitter.DOWNLINK_SERVER_NODE_CHANGE_TRIGGER, {
        index: newIndex - 1,
      });
    },
  },
  filters: {
    cdnListFilter(index) {
      return "线路" + index;
    },
  },
  methods: {
    exitRoom () {
      this.goBack();
    },
    goBack() {
      if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){ // IE
          if(history.length > 0){
              window.history.go( -1 );
          }else{
              window.opener=null;window.close();
          }
      }else{ //非IE浏览器
          if (navigator.userAgent.indexOf('Firefox') >= 0 ||
              navigator.userAgent.indexOf('Opera') >= 0 ||
              navigator.userAgent.indexOf('Safari') >= 0 ||
              navigator.userAgent.indexOf('Chrome') >= 0 ||
              navigator.userAgent.indexOf('WebKit') >= 0){
  
              if(window.history.length > 1){
                  window.history.go( -1 );
              }else{
                  window.opener=null;window.close();
              }
          }else{ //未知的浏览器
              window.history.go( -1 );
          }
      }
    },
    closeWatermark () {
      console.log('xczczczczcz', BJY);
      var _this = this
      this.isWatermark = !this.isWatermark
      let xx = `partner_id=83228320&pos=${this.isWatermark ? 1 : 0}&product_type=1&timestamp=1615996143&partner_key=dBn3oMMrE68/kijw20wg6JGHWGUcUkwh2Fi57N9r26v4R3QbWYQ66/IUchj/pyzlKM9l1WjgNEnLqCWFc2Lzvtp6xhlI`
      let sign = _this.$md5(xx)
      let params = { partner_id: 83228320, pos: this.isWatermark ? 1 : 0, product_type: 1, timestamp: 1615996143, sign: sign}
      _setWatermarkApi(params).then((response) => {
        if (response.code == 0) {
          this.$message.success('操作成功！')
        }
      })
    },
    toggleHandUp (value) {
      console.log('store.get("class.forbidAll")', store.get("class.forbidAll"))
      this.isHandUp = !this.isHandUp
      eventEmitter.trigger(eventEmitter.SPEAK_APPLY_FORBID_ALL_CHANGE_TRIGGER, {
        value: value,
      });
    },
    closeIn (val) {
      this.visible = val
    },
    closeEvaluate (val) {
      this.visibleEvaluate = val
    },
    closeRandomRollCall (val) {
      this.visibleRandomRollCall = val
    },
    closeViewQuiz (val) {
      this.visibleViewQuiz = val
    },
    closeHomeworkMater (val) {
      this.visibleHomeworkMater = val
    },
    closeSubmitWork (val) {
      this.visibleSubmitWork = val
    },
    toggleClassEnd () {
      eventEmitter.trigger(eventEmitter.CLASS_END_TRIGGER);
    },
    toggleClassStart() {
      if (store.get("class.started")) {
        eventEmitter.trigger(eventEmitter.CLASS_END_TRIGGER);
      } else {
        eventEmitter.trigger(eventEmitter.CLASS_START_TRIGGER);
      }
    },
    toggleBarrage() {
      let isOpen = this.barrage.isOpened();
      if (isOpen) {
        this.barrage.close();
        this.isBarrageOn = false;
      } else {
        this.barrage.open();
        this.isBarrageOn = true;
      }
    },
    toggleQuiz() {
      eventEmitter.trigger("toggle_quiz_dialog");
    },
    showHomeworkMater () {
      this.visibleHomeworkMater = true
    },
    showSubmitWork () {
      this.visibleSubmitWork = true
    },
    toggleViewQuiz () {
      this.visibleViewQuiz = true
    },
    toggleAnswer() {
      eventEmitter.trigger("toggle_answer_dialog");
    },
    toggleMediaPlayer() {
      eventEmitter.trigger("toggle_media_player");
    },
    toggleIncentivePayment() {
      this.visible = true
    },
    toggleEvaluate () {
      this.visibleEvaluate = true
    },
    toggleRandomRollCall () {
      if (!store.get("class.started")) {
          // 针对教室状态给出相应的提示，你可以使用任何你喜欢的UI来处理他们，这里我使用的是自定义的全局tip，下同
          this.$Toast(language.TIP_CLASS_NOT_START);
          return;
        }
      this.isRollCall = false
      this.visibleRandomRollCall = true
    },
    closeRandomRollCall1 () {
      // 处理这个问题
      // eventEmitter.trigger(eventEmitter.AV_SWITCH_END);
      eventEmitter.trigger(eventEmitter.ROLL_CALL_TRIGGER, {
        // 倒计时 秒
        duration: Number(30),
      });
      this.isRollCall = true
    },
    toggleRollCall() {
      eventEmitter.trigger("toggle_roll_call");
    },
    toggleLottery() {
      eventEmitter.trigger("toggle_lottery");
    },
    toggleAttentionDetection() {
      eventEmitter.trigger("toggle_attention_detection");
    },
  },
  created() {
    store.watch(
      "class.started",
      (started) => {
        if (started) {
          this.statusTip = language.CLASS_END;
          this.$Toast(language.TIP_CLASS_START);
        } else {
          this.statusTip = language.CLASS_START;
          this.$Toast(language.TIP_CLASS_END);
        }
        this.started = started;
      },
      true
    );
    // 获取k可用的cdn节点
    this.cdnList = BJY.data.server.getLiveServerList();
  },
  mounted() {
    var _this = this
    document.addEventListener('click', (e) => {
      console.log('e.target.class', e.target.className);
      if (e.target.className.indexOf('show111') != -1) {
        _this.show = !_this.show
      } else if (e.target.className.indexOf('showZuoye') != -1) {
        _this.showZuoye = !_this.showZuoye
      } else {
        _this.show = false
        _this.showZuoye = false
      }
    });
    // 调用 create 方法创建弹幕组件
    // 弹幕组件不需要独立的容器，只需要在create中提供挂载的容器
    this.barrage = new BJY.Barrage({
      // 组件父容器
      container: $(".class-panel"),
      // 移动速度，每秒移动多少个像素
      speed: 100,
      // 最长可显示多少个字，超过这个字数的会过滤
      maxLength: 20,
      // 在 top - bottom 的区间出现弹幕
      top: 30,
      bottom: 30,
      // 轨道高度
      trackHeight: 30,
      // 是否只显示文本消息
      textOnly: false,
      // 如果需要自定义弹幕内容，可实现此方法
      renderContent: function (data) {
        return data.content;
      },
    });
  },
  beforeDestroy() {},
};
</script>

<style lang="scss">
//@import url(); 引入公共css类
.function-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  .left,
  .right {
    display: flex;

    & > * {
      margin: 0 4px;
      padding: 2px 12px;
      cursor: pointer;
      display: flex;
      align-items: center;

      // &:hover {
      //   border-radius: 4px;
      //   background-color: rgba(255, 255, 255, 0.3);
      //   color: #fff;
      //   transition: all 0.3s;
      // }
    }

    .bjy-custom-record {
      display: flex;
      align-items: center;

      .bjy-menu-switcher {
        padding: 0;

        .bjy-label {
          margin-left: 0;
          vertical-align: unset;
        }

        &:hover {
          background: none;
          color: #bdc6cf;
        }
      }

      .bjy-cloud-record-ing:after {
        top: 5px;
        left: -7px;
      }
    }
    .more-layer {
      z-index: 10000;
      background: #2B323E;
      color: #9fa8b5;
      border-radius: 3px;
      border-radius: 3px;
      border: 1px solid rgba(159,168,181,0.1);
      font-size: 12px;
      position: absolute;
      left: -2px;
      bottom: 40px;
      font-size: 12px;
      .wrapper {
        min-width: 112px;
        max-height: 200px;
        overflow: auto;
        overflow-x: hidden;
        .item {
          cursor: pointer;
          display: flex;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -moz-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          white-space: nowrap;
          width: 100%;
          padding: 5px 12px 5px 8px;
          &:hover {
            background: rgba(49,56,71,0.6);
            color: #fff;
        }
        }
      }
    }
  }

  // .bjy-spacer {
  //   margin-right: 200px;
  // }
  .btn-div {
    width: 114px;
    height: 34px;
    border: 1px solid #6E7583;
    background-color: #4B5767;
    border-radius: 4px;
    display: inline-flex;
    justify-content: center;
  }
}
</style>
