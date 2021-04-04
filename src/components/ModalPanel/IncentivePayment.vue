<!-- 小测组件 -->
<template>
  <div
    v-show="visible1"
    :class="isTeacher ? 'teacher' : 'student'"
    id="quiz-x"
  >
    <div class="close-bar">
      <span class="bar-title">发放激励</span>
      <span v-show="isTeacher || !forceJoin" @click="close" class="bjy-close"
        ><i class="el-icon-close"></i
      ></span>
    </div>
        <!-- :rules="rules" -->
    <div class="placeholder">
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="zuoye-box">
          <el-form-item label="激励类型" prop="x">
            <el-select v-model="ruleForm.x" placeholder="请选择激励类型">
              <el-option label="优惠券" value="0"></el-option>
              <el-option label="红包" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="ruleForm.x == '0'" label="发放方式" prop="xx">
            <el-select v-model="ruleForm.xx" placeholder="请选择发放方式">
              <el-option label="抢优惠券" value="0"></el-option>
              <el-option label="指定发送" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="ruleForm.x == '1'" label="发放方式" prop="xx">
            <el-select v-model="ruleForm.xx" placeholder="请选择发放方式">
              <el-option label="抢红包" value="0"></el-option>
              <el-option label="指定发送" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="ruleForm.x == '0' && ruleForm.xx == '0'" label="抢券时长" prop="xxx">
            <el-select v-model="ruleForm.xxx" placeholder="请选择作抢优惠券时长">
              <el-option label="10秒" value="0"></el-option>
              <el-option label="30秒" value="1"></el-option>
              <el-option label="60秒" value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item v-if="ruleForm.x == '1' && ruleForm.xx == '0'" label="抢包时长" prop="xxx">
            <el-select v-model="ruleForm.xxx" placeholder="请选择作抢红包时长">
              <el-option label="10秒" value="0"></el-option>
              <el-option label="30秒" value="1"></el-option>
              <el-option label="60秒" value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item v-if="(ruleForm.x == '0' || ruleForm.x == '1') && ruleForm.xx == '1'" label="指定对象" prop="xxx">
            <el-button @click="openStudent" type="primary" >添加</el-button>
            <div style="margin-top: 10px;width: 400px">
              <div style="position: relative;float: left;width: 90px;height: 36px;margin-right: 5px;background: #1F242E;border-radius: 1px;">
                <span style="font-size: 16px;margin-right:4px;position: absolute;top: -18px;right: -6px" class="iconfont">&#xe613;</span>
              </div>
              <div style="position: relative;float: left;width: 90px;height: 36px;margin-right: 5px;background: #1F242E;border-radius: 1px;">
                <span style="font-size: 16px;margin-right:4px;position: absolute;top: -18px;right: -6px" class="iconfont">&#xe613;</span>
              </div>
              <div style="position: relative;float: left;width: 90px;height: 36px;margin-right: 5px;background: #1F242E;border-radius: 1px;">
                <span style="font-size: 16px;margin-right:4px;position: absolute;top: -18px;right: -6px" class="iconfont">&#xe613;</span>
              </div>
              <div style="position: relative;float: left;width: 90px;height: 36px;margin-right: 5px;background: #1F242E;border-radius: 1px;">
                <span style="font-size: 16px;margin-right:4px;position: absolute;top: -18px;right: -6px" class="iconfont">&#xe613;</span>
              </div>
            </div>
            
          </el-form-item>


          <el-form-item v-if="ruleForm.x == '0' " label="优惠券" prop="xxxx">
            <el-select v-model="ruleForm.xxxx" placeholder="请选择优惠券">
              <el-option label="xx优惠券" value="0"></el-option>
              <el-option label="xxxx优惠券" value="1"></el-option>
            </el-select>
            <div>剩余数量：21</div>
          </el-form-item>

          <el-form-item v-if="ruleForm.x == '0'"  label="发放数量" prop="xxxxx">
            <el-input
              v-model="ruleForm.xxxxx"
              placeholder="请输入发放数量"
            ></el-input>
          </el-form-item>

          <el-form-item v-if="ruleForm.x == '1'" label="红包金额" prop="xxxxx">
            <el-input
              v-model="ruleForm.xxxxx"
              placeholder="请输入红包金额"
            ></el-input>
          </el-form-item>

          <el-form-item v-if="ruleForm.x == '1' && ruleForm.xx == '0'" label="发放数量" prop="xxxxx">
            <el-input
              v-model="ruleForm.xxxxx"
              placeholder="请输入数量"
            ></el-input>
          </el-form-item>

        </div>
        <el-form-item style="text-align: right; margin: 14px 0 -6px">
          <el-button type="primary" @click="openPwd"
            >确认</el-button
          >
          <el-button @click="close">取消</el-button>
        </el-form-item>
      </el-form>
    </div>


    <div>


      <div v-show="studentVisible" style="position: absolute;z-index: 1000;top: 20%;left: 30%;
border: 1px solid #6E7583;">
        <div class="close-bar">
          <span class="bar-title">添加对象</span>
          <span @click="closeStudent" class="bjy-close"
            ><i class="el-icon-close"></i
          ></span>
        </div>
        <div style="background-color: #313847;width: 200px;padding: 0 10px" class="main">
          <!-- 1 -->
          <div style="position: relative;padding-top: 5px">
            <div style="display: inline-flex;justify-content: center;">
              <span style="font-size: 13px;margin-right:4px" class="iconfont">&#xe627;</span>
              <span>学生2</span>
            </div>
            <div style="position: absolute;top: 5px;right: 10px">
              <el-checkbox v-model="checked"></el-checkbox>
            </div>
          </div>
          <!-- 2 -->
          <div style="position: relative;padding-top: 5px">
            <div style="display: inline-flex;justify-content: center;">
              <span style="font-size: 13px;margin-right:4px" class="iconfont">&#xe627;</span>
              <span>学生1</span>
            </div>
            <div style="position: absolute;top: 5px;right: 10px">
              <el-checkbox v-model="checked"></el-checkbox>
            </div>
          </div>
          <!-- 3 -->
          <div style="position: relative;padding-top: 5px">
            <div style="display: inline-flex;justify-content: center;">
              <span style="font-size: 13px;margin-right:4px" class="iconfont">&#xe627;</span>
              <span>学生3</span>
            </div>
            <div style="position: absolute;top: 5px;right: 10px">
              <el-checkbox v-model="checked"></el-checkbox>
            </div>
          </div>
          <!-- 3 -->
          <div style="position: relative;padding-top: 5px">
            <div style="display: inline-flex;justify-content: center;">
              <span style="font-size: 13px;margin-right:4px" class="iconfont">&#xe627;</span>
              <span>学生4</span>
            </div>
            <div style="position: absolute;top: 5px;right: 10px">
              <el-checkbox v-model="checked"></el-checkbox>
            </div>
          </div>
          <!-- 3 -->
          <div style="position: relative;padding-top: 5px">
            <div style="display: inline-flex;justify-content: center;">
              <span style="font-size: 13px;margin-right:4px" class="iconfont">&#xe627;</span>
              <span>学生5</span>
            </div>
            <div style="position: absolute;top: 5px;right: 10px">
              <el-checkbox v-model="checked"></el-checkbox>
            </div>
          </div>
          <div style="text-align: center;margin-top: 120px;margin-bottom: 10px">
            <el-button type="primary">确认</el-button>
          </div>
        

        </div>
      </div>




      <div class="pwd-model" v-show="pwdVisible" style="position: absolute;z-index: 1100;top: 20%;left: 20%;border: 1px solid #6E7583;">
        <div class="close-bar">
          <span class="bar-title">输入密码</span>
          <span @click="closePwd" class="bjy-close"
            ><i class="el-icon-close"></i
          ></span>
        </div>
        <div style="background-color: #313847;width: 350px;padding: 0 10px;text-align: center;" class="main">
          <div style="padding-top: 10px">
            <el-input v-model="input" show-password placeholder="请输入内容"></el-input>
          </div>
          <div style="text-align: center;padding-top: 100px;padding-bottom: 10px">
            <el-button @click="submitForm" type="primary">确认</el-button>
            <el-button @click="closePwd">取消</el-button>
          </div>     
        </div>
      </div>


    </div>
  </div>
</template>

<script>
const eventEmitter = BJY.eventEmitter;
const auth = BJY.auth;

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    visible (val) {
      this.visible1 = val
    }
  },
  data() {
    return {
      input: '',
      pwdVisible: false,
      visible1: this.visible,
      studentVisible: false,
      checked: false,
      isTeacher: auth.isTeacher(),
      forceJoin: false,
      ruleForm: {
        x: "0",
        xx: "0",
        xxx: "",
        xxxx: "",
        xxxxx: "",
        xxxxxx: "",
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
      this.$emit('closeIn', this.visible1)
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
      // .on(
      //   // 小测开始事件
      //   eventEmitter.QUIZ_START,
      //   (e, data) => {
      //     console.log(data);
      //     this.forceJoin = data.forceJoin;
      //     this.open(data);
      //   }
      // )
      // // 测验结束
      // .on(eventEmitter.QUIZ_END, (e, data) => {
      //   !this.isTeacher && this.close();
      // })
      // .on(eventEmitter.QUIZ_CLOSE, (e, data) => {
      //   if (!data.force && $.isEmptyObject(data.solution)) {
      //       alert('请至少回答一个题目之后提交');
      //       return;
      //   }
      //   this.close();
      // })
      // .on(
      //   // 查看小测答案
      //   eventEmitter.QUIZ_SOLUTION,
      //   (e, data) => {
      //     this.forceJoin = false;
      //     this.open(data);
      //   }
      // )
      // .on(eventEmitter.QUIZ_SUBMIT, (e, data) => {
      //   console.log(data);
      //   this.close();
      // })
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
#quiz-x {
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
      padding-bottom: 0;
      width: 100%;
      border-radius: 4px;
    }
  }
}
</style>
<style lang="scss">
#quiz-x {
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
    width: 416px;
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