<!-- 点名组件实现： 点名没有独立的组件来实现，我们提供了一套事件驱动的点名系统 -->

<template>
  <div v-show="visible" id="roll-call-dialog" class="teacher">
    <div class="close-bar">
      <span class="bar-title">点名</span>
      <span @click="close" class="bjy-close"><i class="el-icon-close"></i></span>
    </div>
    <div v-show="status === statusMap.before" class="before-roll-call">
      <p>
        请设置学生需要在
        <input v-model="rollCallDuration" type="number" />
        秒内响应
      </p>
      <div @click="startRollCall" class="btn start-btn">发起点名</div>
    </div>

    <div v-show="status === statusMap.ing" class="roll-call-ing">学生正在陆续答到中，{{ resultTimer }}秒后可查看点名结果，请稍后</div>

    <div v-show="status === statusMap.after" class="after-roll-call">
      <p class="result">答到情况：答到{{ ackCount }}人，未答到{{ nackCount }}人</p>
      <div class="btn" @click="reCall">再次点名</div>
    </div>
  </div>
</template>

<script>
import language from "../../language/main";

const auth = BJY.auth;
const eventEmitter = BJY.eventEmitter;

const ROLL_CALL_STATUS = {
    before: 0,
    ing: 1,
    after: 2
}

export default {
  data() {
    return {
      language: language,
      status: 0,
      isTeacher: auth.isTeacher(),
      resultTimer: 60,
      nextTimer: 60,
      result: "",
      rollCallDuration: 60,
      visible: false,
      status: ROLL_CALL_STATUS.before,
      statusMap: ROLL_CALL_STATUS,
      resultInterval: null,
      ackCount: 0, // 答到人数
      nackCount: 0, // 未答到人数
    };
  },
  created() {
    eventEmitter
      .on("toggle_roll_call", () => {
        this.show();
      })
      .on(
        // 点名结果
        eventEmitter.ROLL_CALL_RESULT,
        (e, data) => {
          var result = data;
        //  点名结果 
          console.log(result);
          this.status = ROLL_CALL_STATUS.after

          this.ackCount = result.ackList.length
          this.nackCount = result.nackList.length
        }
      )
      .on(
        // 点名开始
        eventEmitter.ROLL_CALL,
        () => {
            this.resultTimer = this.rollCallDuration
            this.status = ROLL_CALL_STATUS.ing
            this.resultInterval = null
            this.resultInterval = setInterval(() => {
                if (this.resultTimer > 0) {
                    --this.resultTimer;
                } else {
                    // 时间到了需要老师端主动触发结束
                    eventEmitter.trigger(eventEmitter.ROLL_CALL_FINISH);
                    clearInterval(this.resultInterval)
                }
            }, 1000);
        }
      );
  },
  methods: {
    show() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    startRollCall() {
      eventEmitter.trigger(eventEmitter.ROLL_CALL_TRIGGER, {
        // 倒计时 秒
        duration: this.rollCallDuration,
      });
    },
    reCall() {
        this.status = ROLL_CALL_STATUS.before
    }
  },
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
#roll-call-dialog {
  background: #313847;
  font-size: 14px;
  color: #fff;
  box-shadow: none;
  border: 1px solid #6E7583;
  border-radius: 4px;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .close-bar {
    display: block;
    background-color: #1C222E;
    height: 30px;
    padding: 0 12px;
    line-height: 30px;
    border-radius: 4px 4px 0 0;
    .bar-title {
      float: left;
    }
    .bjy-close {
      float: right;
    }
  }
  .before-roll-call, .after-roll-call {
    padding: 0 12px;
  }
  .before-roll-call input {
    width: 100px;
    line-height: 28px;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
  }
  .roll-call-ing {
    padding: 14px 12px;
  }

  .btn {
    width: 120px;
    background: linear-gradient(#0E98D7, #027CB5);
    height: 32px;
    line-height: 32px;
    cursor: pointer;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 14px;
  }
}
</style>
