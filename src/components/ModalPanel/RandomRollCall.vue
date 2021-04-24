<!-- 小测组件 -->
<template>
  <div
    v-show="visible1"
    :class="isTeacher ? 'teacher' : 'student'"
    id="quiz-random-roll-call"
  >
    <div class="close-bar">
      <span class="bar-title">随机点名</span>
      <span v-show="isTeacher || !forceJoin" @click="close" class="bjy-close"
        ><i class="el-icon-close"></i
      ></span>
    </div>
        <!-- :rules="rules" -->
    <div v-show="status === statusMap.before" class="placeholder">
      <el-form :model="ruleForm"
               ref="ruleForm"
               label-width="260px"
               class="demo-ruleForm"
      >
        <div class="zuoye-box">
          <el-form-item label="点名人数" prop="number">
            <el-select  v-model="ruleForm.number">
              <el-option label="1人" value="1"></el-option>
              <el-option label="2人" value="2"></el-option>
              <el-option label="3人" value="3"></el-option>
              <el-option label="4人" value="4"></el-option>
              <el-option label="5人" value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="摄像头要求" prop="yaoqiu" style="margin-bottom:0">
            <el-radio v-model="ruleForm.yaoqiu" label="1">是</el-radio>
            <el-radio v-model="ruleForm.yaoqiu" label="2">否</el-radio>
          </el-form-item>
        </div>
        <el-form-item style="text-align: right; margin: 14px 0 -6px">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >确认</el-button
          >
          <el-button @click="close">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div style="background-color: #313847" v-show="status === statusMap.ing" class="roll-call-ing">学生正在陆续答到中，{{ resultTimer }}秒后可查看点名结果，请稍后</div>

    <!-- <div style="background-color: #313847;padding: 14px 12px" v-show="status === statusMap.after" class="after-roll-call">
      <p class="result">点名情况：答到{{ ackCount }}人，未答到{{ nackCount }}人</p>
      <div class="btn" @click="reCall">再次点名</div>
    </div> -->
  </div>
</template>

<script>
const eventEmitter = BJY.eventEmitter;
const auth = BJY.auth;
import language from "../../language/main";
const store = BJY.store;
import { _getClassStudentListApi } from "../../api/user/userApi"


const ROLL_CALL_STATUS = {
    before: 0,
    ing: 1,
    after: 2
}

export default {
  props: {
    visibleRandomRollCall: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    visibleRandomRollCall (val) {
      this.status = ROLL_CALL_STATUS.before
      this.visible1 = val
    }
  },
  data() {
    return {
      language: language,
      status: 0,
      isTeacher: auth.isTeacher(),
      resultTimer: 10,
      nextTimer: 10,
      result: "",
      rollCallDuration: 0,
      visible: false,
      statusMap: ROLL_CALL_STATUS,
      resultInterval: null,
      ackCount: 0, // 答到人数
      nackCount: 0, // 未答到人数

      radio: false,
      input: '',
      pwdVisible: false,
      visible1: this.visibleRandomRollCall,
      studentVisible: false,
      checked: false,
      duration: null,
      isTeacher: auth.isTeacher(),
      forceJoin: false,
      ruleForm: {
        number: "1",
        yaoqiu: "1",
      },
    };
  },
  methods: {
    startRollCall(params) {
      console.log('2222', params);
      console.log('2222', params);
      console.log('2222', params);
      console.log('2222', params);
      console.log('2222', params);
      console.log('2222', params);
      eventEmitter.trigger(eventEmitter.ROLL_CALL_TRIGGER, {
        // 倒计时 秒
        duration: Number(params),
      });
    },
    reCall() {
        this.status = ROLL_CALL_STATUS.before
    },
    async submitForm(formName) {
      let result = await _getClassStudentListApi({page: 1, page_size: 50, room_id: store.get('class.id')})
      if (result.data.list.length < Number(this.ruleForm.number)) {
        return this.$message.error('教室学员人数要大于随机点名人数！')
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
      console.log('2222', );
      console.log('2222', );
      console.log('2222', );
      console.log('2222', );

          this.startRollCall(this.ruleForm.number + this.ruleForm.yaoqiu)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    open(data) {
      this.visible1 = true;
      this.status = ROLL_CALL_STATUS.before
      console.log('open', this.status);
      this.$nextTick(() => {
        !this.isTeacher;
      });
    },
    close() {
      this.visible1 = false;
      this.status = ROLL_CALL_STATUS.before
      this.$emit('closeRandomRollCall', this.visible1)
    },
    openStudent() {
      this.studentVisible = true;
    },
    closeStudent() {
      this.studentVisible = false;
    },
    openPwd() {
      this.pwdVisible = true;
    },
    closePwd () {
      this.pwdVisible = false;
    },
    initTeacher() {},
    initStudent() {
      // BJY.quizStudent.init();
    },
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
          console.log('data', data);
          console.log('eeeeeeeee', e);
          //  点名结果 
          this.status = ROLL_CALL_STATUS.after
          this.ackCount = result.ackList.length // 点名人数
          this.nackCount = result.nackList.length // 未点名人数
          if (this.duration == 30) {
            this.$Toast('结束点名！');
          }
          console.log('zczxcz', this.duration);
          console.log('this.ackCount', this.ackCount);
          if (this.duration != '30' && this.ackCount == 0) {
            this.$Toast('没有人上麦！');
          }
          this.close()
        }
      )
      .on(
        // 点名开始
        eventEmitter.ROLL_CALL,
        (e, data) => {
          console.log('data.durationdata.durationdata.duration', data.duration);
          this.duration = data.duration
            if (data.duration == '30') {
              console.error('222233333333');
              eventEmitter.trigger(eventEmitter.ROLL_CALL_FINISH);
            } else {
              this.resultTimer = 11
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
            
        }
      );
    this.status = ROLL_CALL_STATUS.before

  },
  mounted() {
    this.status = ROLL_CALL_STATUS.before
    this.isTeacher ? this.initTeacher() : this.initStudent();
  },
  beforeDestroy() {
    this.status = ROLL_CALL_STATUS.before
  },
};
</script>

<style lang="scss" scoped>
#quiz-random-roll-call {
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background: #fff;
  border: 1px solid #6e7583;
  &.student {
    width: max-content;
    height: 80%;

    .close-bar {
      position: absolute;
      width: 100%;
      top: 0;
    }
    .placeholder {
      top: 30px;
      bottom: 0;
      position: absolute;
      width: 100%;
    }
  }
  &.teacher {
    width: max-content;
  }

  .close-bar {
    background: #1c222e;
    height: 30px;
    border-radius: 4px 4px 0 0;
    .bar-title {
      color: #fff;
      line-height: 30px;
      font-size: 14px;
      float: left;
      padding-left: 18px;
    }
    .bjy-close {
      line-height: 30px;
      color: #fff;
      font-size: 20px;
      margin-right: 16px;
      cursor: pointer;
      float: right;
    }
  }
  .placeholder {
    background-color: #313847;
    border-radius: 0 0 4px 4px;
    padding: 20px;
    .zuoye-box {
      border: 1px solid #5f6777;
      padding: 20px;
      width: 100%;
      border-radius: 4px;
    }
  }
}
</style>
<style lang="scss">
#quiz-random-roll-call {
  .el-form-item__label {
    color: #fff;
    width: max-content !important;
  }
  .el-form-item__content {
    margin-left: 74px !important;
  }
  .el-input__inner,
  .el-textarea__inner {
    border-color: #6e7583;
    height: 36px;
    background-color: #1f242e;
    width: 216px;
    color: #fff;
  }
  .pwd-model .el-input__inner {
    width: 250px;
    height: 30px;
  }
  .pwd-model .el-input__suffix {
    position: absolute;
    top: -4px !important;
    left: 210px !important;
  }
  .el-button--default {
    background-color: #2b313f !important;
    border-color: #6e7583 !important;
    color: #fff !important;
  }
  .el-button {
    width: 88px;
    height: 38px;
  }
}

.el-select-dropdown,
.el-picker-panel,
.el-date-picker__time-header,
.el-picker-panel__footer {
  background-color: #2c3240 !important;
  border-color: #6e7583 !important;
  span {
    color: #fff;
  }
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: #3c4352 !important;
}
.el-select-dropdown,
.el-picker-panel {
  margin-top: -2px !important;
}
.popper__arrow,
.popper__arrow::after {
  border-bottom-color: none !important;
  border: 0 !important;
}
.el-date-table th {
  color: #6e7583 !important;
}
.el-date-table td.today span {
  color: #027cb5 !important;
}
.el-date-picker {
  .el-input__inner {
    background-color: #3c4352;
    color: #fff;
  }
  .el-button {
    height: unset;
    width: unset;
  }
}
.el-date-table td.current:not(.disabled) span {
  background: linear-gradient(#0e98d7, #027cb5) !important;
  color: #fff !important;
}
.el-button.is-plain,
.el-button--primary {
  background: linear-gradient(#0e98d7, #027cb5) !important;
  border: 1px solid #27aeed !important;
}
.sucai-p {
  color: #999;
  line-height: 18px;
  margin: 0;
  max-width: 416px;
  span {
    color: #ccc;
    padding-right: 10px;
  }
}
</style>