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
    <div class="placeholder">
      <el-form :model="ruleForm"
               ref="ruleForm"
               label-width="260px"
               class="demo-ruleForm"
      >
        <div class="zuoye-box">
          <el-form-item label="点名人数" prop="x">
            <el-select  v-model="ruleForm.x">
              <el-option label="1人" value="1"></el-option>
              <el-option label="2人" value="2"></el-option>
              <el-option label="3人" value="3"></el-option>
              <el-option label="4人" value="4"></el-option>
              <el-option label="5人" value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="摄像头要求" prop="xx">
            <el-radio v-model="ruleForm.xx" label="1">是</el-radio>
            <el-radio v-model="ruleForm.xx" label="2">否</el-radio>
          </el-form-item>
        </div>
        <el-form-item style="text-align: right; margin: 14px 0 2px">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >确认</el-button
          >
          <el-button @click="close">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
const eventEmitter = BJY.eventEmitter;
const auth = BJY.auth;

export default {
  props: {
    visibleRandomRollCall: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    visibleRandomRollCall (val) {
      this.visible1 = val
    }
  },
  data() {
    return {
      radio: false,
      input: '',
      pwdVisible: false,
      visible1: this.visibleRandomRollCall,
      studentVisible: false,
      checked: false,
      isTeacher: auth.isTeacher(),
      forceJoin: false,
      ruleForm: {
        x: "1",
        xx: "1",
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
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
      this.$nextTick(() => {
        !this.isTeacher;
      });
    },
    close() {
      this.visible1 = false;
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
      .on("toggle_incentive-payment", (e, data) => {
        console.log('1222222222222');
        this.visible1 ? this.close() : this.open();
      });
    // eventEmitter.trigger(eventEmitter.QUIZ_REQ);
  },
  mounted() {
    this.isTeacher ? this.initTeacher() : this.initStudent();
  },
  beforeDestroy() {},
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
    padding: 10px;
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