<!-- 小测组件 -->
<template>
  <div
    v-show="visible"
    :class="isTeacher ? 'teacher' : 'teacher'"
    id="quiz-placeholder"
  >
    <div class="close-bar">
      <span class="bar-title">设置</span>
      <span v-show="isTeacher || !forceJoin" @click="close" class="bjy-close"
        ><i class="el-icon-close"></i
      ></span>
    </div>
    <div style="display: flex;width: 650px;height: 600px;padding: 20px 20px;background: #313847">
      <div style="flex: 0 0 180px;border: 1px solid #5f6777;">
        <div @click="clickSetting('shexiangtou')" :class="active.shexiangtou ? 'active' : ''" style="cursor: pointer;width: 182px;height: 34;line-height: 34px;border-radius: 4px;background: #3E4653;margin-bottom:2px;text-align: center">摄像头</div>   
        <div @click="clickSetting('maikefeng')" :class="active.maikefeng ? 'active' : ''" style="cursor: pointer;width: 182px;height: 34;line-height: 34px;border-radius: 4px;background: #3E4653;margin-bottom:2px;text-align: center">麦克风</div>   
        <div @click="clickSetting('yangshiqi')" :class="active.yangshiqi ? 'active' : ''" style="cursor: pointer;width: 182px;height: 34;line-height: 34px;border-radius: 4px;background: #3E4653;margin-bottom:2px;text-align: center">扬声器</div>   
        <div @click="clickSetting('luzhi')" :class="active.luzhi ? 'active' : ''" style="cursor: pointer;width: 182px;height: 34;line-height: 34px;border-radius: 4px;background: #3E4653;margin-bottom:2px;text-align: center">课程录制</div>   
      </div>
      <!-- 摄像头 -->
      <div v-if="active.shexiangtou" style="flex: 1;border: 1px solid #5f6777;margin-left: 10px" class="placeholder">
        <div style="padding-left: 24px;padding-right: 60px" class="shexiangtou">
          <!--  -->
          <div style="height: 205px;width: 100%;background: #fff">
          </div>
          <!--  -->
          <div style="display: flex;width: 100%;margin-top: 10px">
            <div class="default" style="flex: 0 0 100px;margin-right: 5px">
              <el-select style="width: 170px" v-model="value1" placeholder="请选择">
                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div style="flex: 0 0 100px">
              <el-select v-model="value2" style="width: 140px" placeholder="请选择">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <!--  -->
          <div style="margin-top: 30px">
            <span>摄像头背景</span>
            <div style="height: 205px;width: 100%;background: #262C38">

            </div>
          </div>
        </div>
      </div>

      <!-- 麦克风 -->
      <div v-if="active.maikefeng" style="flex: 1;border: 1px solid #5f6777;margin-left: 10px" class="placeholder">
        <div style="padding-left: 24px;padding-right: 60px" class="maikefeng">
          <!--  -->
          <div>
            <span style="margin-right: 17px">设备列表</span>
            <el-select v-model="value2" style="width: 200px" placeholder="请选择">
                <el-option
                  v-for="item in [{value: '1', label: 'Windows默认设备'}, {value: '2', label: 'Lenovo Easy Camera'}]"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </div>
          <!--  -->
          <div style="display: flex;margin-top: 20px">
            <div style="flex: 0 0 80px;line-height: 42px">输入音量</div>
            <div style="flex: 1">
              <el-slider v-model="value4"></el-slider>
            </div>
          </div>
          <!--  -->
          <div style="margin-top: 20px">
            <span>请点击麦克风测试，对着麦克风说话进行试听</span>
            <div style="float: left;margin-top: 5px;">
              <el-button type="primary">麦克风测试</el-button> 
            </div>
            <div style="margin-top: 5px;margin-left: 150px">
              <span style="background: #ccc;padding: 5px 6px;border-radius: 2px;line-height: 31px;margin-right: 5px"></span>
              <span style="background: #ccc;padding: 5px 6px;border-radius: 2px;line-height: 31px;margin-right: 5px"></span>
              <span style="background: #2B3240;border: 1px solid #6E7583;padding: 5px 6px;border-radius: 2px;line-height: 31px;margin-right: 5px"></span>
              <span style="background: #2B3240;border: 1px solid #6E7583;padding: 5px 6px;border-radius: 2px;line-height: 31px;margin-right: 5px"></span>
              <span style="background: #2B3240;border: 1px solid #6E7583;padding: 5px 6px;border-radius: 2px;line-height: 31px;margin-right: 5px"></span>
              <span style="background: #2B3240;border: 1px solid #6E7583;padding: 5px 6px;border-radius: 2px;line-height: 31px;margin-right: 5px"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- 扬声器 -->
      <div v-if="active.yangshiqi" style="flex: 1;border: 1px solid #5f6777;margin-left: 10px" class="placeholder">
        <div style="padding-left: 24px;padding-right: 60px" class="maikefeng">
          <!--  -->
          <div>
            <span style="margin-right: 17px">设备列表</span>
            <el-select v-model="value2" style="width: 200px" placeholder="请选择">
                <el-option
                  v-for="item in [{value: '1', label: 'Windows默认设备'}, {value: '2', label: 'Lenovo Easy Camera'}]"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </div>
          <!--  -->
          <div style="display: flex;margin-top: 20px">
            <div style="flex: 0 0 80px;line-height: 42px">输入音量</div>
            <div style="flex: 1">
              <el-slider v-model="value4"></el-slider>
            </div>
          </div>
          <!--  -->
          <div style="margin-top: 20px">
            <span>点击播放，是否能听到声音......</span>
            <div style="float: left;margin-top: 5px;">
              <el-button type="primary">扬声器测试</el-button> 
            </div>
            <div style="margin-top: 5px;margin-left: 150px">
              <span style="background: #ccc;padding: 5px 6px;border-radius: 2px;line-height: 31px;margin-right: 5px"></span>
              <span style="background: #ccc;padding: 5px 6px;border-radius: 2px;line-height: 31px;margin-right: 5px"></span>
              <span style="background: #2B3240;border: 1px solid #6E7583;padding: 5px 6px;border-radius: 2px;line-height: 31px;margin-right: 5px"></span>
              <span style="background: #2B3240;border: 1px solid #6E7583;padding: 5px 6px;border-radius: 2px;line-height: 31px;margin-right: 5px"></span>
              <span style="background: #2B3240;border: 1px solid #6E7583;padding: 5px 6px;border-radius: 2px;line-height: 31px;margin-right: 5px"></span>
              <span style="background: #2B3240;border: 1px solid #6E7583;padding: 5px 6px;border-radius: 2px;line-height: 31px;margin-right: 5px"></span>
            </div>
          </div>
        </div>
      </div>

       <!-- 课程录制 -->
      <div v-if="active.luzhi" style="flex: 1;border: 1px solid #5f6777;margin-left: 10px" class="placeholder">
        <div style="padding-left: 24px;padding-right: 60px" class="maikefeng">
          <!--  -->
          <div>
            <el-switch @change="changeSwitch" v-model="value6" inactive-text="上课后自动打开" >
            </el-switch>   
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
  data() {
    return {
      value6: false,
      value4: 50,
      value1: '1',
      value2: '1',
      options1: [
        {value: '1', label: 'Windows默认设备'}
      ],
      options2: [
        {value: '1', label: '流畅'},
        {value: '2', label: '标清'},
        {value: '3', label: '高清'},
        {value: '4', label: '超清'},
      ],
      active: {
        shexiangtou: true,
        maikefeng: false,
        yangshiqi: false,
        luzhi: false
      },
      visible: false,
      isTeacher: auth.isTeacher(),
      forceJoin: false,
      ruleForm: {
        name: "",
        region: "",
        time: "",
        desc: "",
      },
    };
  },
  methods: {
    clickSetting(params) {
      if (params == 'shexiangtou') {
        this.active = { shexiangtou: true, maikefeng: false, yangshiqi: false, luzhi: false }
      } else if (params == 'maikefeng') {
        this.active = { shexiangtou: false, maikefeng: true, yangshiqi: false, luzhi: false }
      } else if (params == 'yangshiqi') {
        this.active = { shexiangtou: false, maikefeng: false, yangshiqi: true, luzhi: false }
      } else if (params == 'luzhi') {
        this.active = { shexiangtou: false, maikefeng: false, yangshiqi: false, luzhi: true }
      }
    },
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
      this.visible = true;
      this.$nextTick(() => {
        !this.isTeacher;
      });
    },
    close() {
      this.visible = false;
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
      .on("toggle_setting_dialog", (e, data) => {
        this.visible ? this.close() : this.open();
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
#quiz-placeholder {
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
  .active {
    background: #1A96D8 !important;
  }
}
</style>
<style lang="scss">
#quiz-placeholder {
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
    width: 140px;
    color: #fff;
  }
  .default .el-input__inner {
    width: 170px !important;
  }
  .maikefeng .el-input__inner {
    width: 200px !important;
  }
  .el-button--default {
    background-color: #2b313f !important;
    border-color: #6e7583 !important;
    color: #fff !important;
  }
  .el-button {
    width: 120px;
    height: 32px;
    line-height: 0px;
  }
  .el-slider__bar {
    background: #C5C5C5 !important;
    height: 10px !important;
  }
  .el-slider__runway {
    background-color: #262C38 !important;
    height: 10px !important;
  }
  .el-slider__button-wrapper {
    height: 40px !important;
  }
  .el-slider__button {
    border: 0px !important;
  }
  .el-switch__label {
    color: #fff;
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