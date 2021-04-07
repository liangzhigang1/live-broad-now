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
      <div v-show="active.shexiangtou" style="flex: 1;border: 1px solid #5f6777;margin-left: 10px" class="placeholder">
        <div style="padding-left: 24px;padding-right: 60px" class="shexiangtou">
          <!--  -->
          <div style="height: 205px;width: 100%;">
            <div style="width: 100%;height: 100%" id="live-shezhi-player"></div>
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
              <el-select v-model="value2" @change="changeValue2" style="width: 140px" placeholder="请选择">
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
          <div v-if="isTeacher" style="margin-top: 30px">
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
            <el-select v-model="value3" style="width: 200px" placeholder="请选择">
                <el-option
                  v-for="item in [{value: '1', label: 'External Microphone (Built-in)'}]"
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
              <el-slider @input="changeValue4" v-model="value4"></el-slider>
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
            <el-select @change="changeValue5" v-model="value5" style="width: 200px" placeholder="请选择">
                <el-option
                  v-for="item in [{value: '0', label: 'Headphones (Built-in)'}, {value: '1', label: 'LG ULTRAWIDE (HDMI)'}]"
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
              <el-slider @input="changeValue6" v-model="value6"></el-slider>
            </div>
          </div>
          <!--  -->
          <!-- <div style="margin-top: 20px">
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
          </div> -->
        </div>
      </div>

       <!-- 课程录制 -->
      <div v-if="active.luzhi" style="flex: 1;border: 1px solid #5f6777;margin-left: 10px" class="placeholder">
        <div style="padding-left: 24px;padding-right: 60px" class="maikefeng">
          <!--  -->
          <div>
            <el-switch @change="changeSwitch" v-model="value7" inactive-text="上课后自动打开" >
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
let store = BJY.store;
// 获取创建播放器的 Player 对象
var Player = BJY.Player;
var VolumeSlider = BJY.VolumeSlider;

export default {
  data() {
    return {
      value7: false,
      value6: 20,
      value4: 50,
      value1: '0',
      value2: '0',
      value3: '1',
      value5: '0',
      options1: [
        {value: '0', label: 'FaceTime HD Camera'}
      ],
      options2: [
        {value: '0', label: '流畅'},
        {value: '1', label: '标清'},
        {value: '2', label: '高清'},
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
    changeSwitch () {

    },
    changeValue5 () {
      eventEmitter.trigger(eventEmitter.SPEAKER_INDEX_CHANGE_TRIGGER, {
        index: Number(this.value5),
      });
    },
    changeValue6 () {
      eventEmitter.trigger(eventEmitter.SPEAKER_VOLUME_CHANGE_TRIGGER, {
        value: Number(this.value6),
      });
    },
    changeValue4 () {
      eventEmitter.trigger(eventEmitter.MIC_VOLUME_CHANGE_TRIGGER, {
        value: Number(this.value4),
      });
    },
    changeValue2 (e) {
      var player = BJY.Player.instances[BJY.store.get("user.id")];
      console.log('playerplayer1', BJY.userPublish);
      // console.log('233333444555', this.player)
      // this.player.
      eventEmitter.trigger(eventEmitter.CAMERA_QUALITY_CHANGE_TRIGGER, {
        value: Number(this.value2),
      });
      // this.createMyPlayer()
    },
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
      this.createMyPlayer();
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
    // 创建自己的播放器
    createMyPlayer(element) {
      if (!this.player) {
        this.player = new Player({
        element: $("#live-shezhi-player"),
        replace: false,
        user: store.get("user"),
        extension: BJY.getExtension(),
        canFold: true,
        canSwitchCamera: true,
        canSwitchMic: true,
          onComplete: function () {
          },
        });
        this.player.openCamera()
        console.log('this.playerthis.player', this.player)
      }
    },
  },
  created() {
    
  },
  mounted() {
    eventEmitter.on("toggle_setting_dialog", (e, data) => {
        this.visible ? this.close() : this.open();
      }).on("MIC_VOLUME_CHANGE", (e, data) => {
        console.log('data1111', data);
        this.value4 = data
      }).on("SPEAKER_VOLUME_CHANGE", (e, data) => {
        console.log('data2222', data);
        this.value4 = data
      }).on("SYSTEM_MIC_VOLUME_CHANGE", (e, data) => {
        console.log('eeeeeee', data);
        this.value4 = data
      }).on("SYSTEM_SPEAKER_VOLUME_CHANGE", (e, data) => {
        console.log('444444', data);
        this.value4 = data
      }).on("SPEAKER_VOLUME_CHANGE", (e, data) => {
        console.log('444444', data);
        this.value6 = data
      })
    // eventEmitter.on(
    //   // 监听自己摄像头和麦克风变化
    //   eventEmitter.MEDIA_SWITCH_TRIGGER,
    //   function (event, data) {
    //     var player = BJY.Player.instances[store.get("user.id")];
    //     player && BJY.userPublish.setDevice(player, data.videoOn, data.audioOn);
    //   }
    // );
    this.isTeacher ? this.initTeacher() : this.initStudent();
  },
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
// .bjy-footer {
//  display: none !important;
// }
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
.el-select-dropdown {
  border: 0 !important;
  margin-top: 0 !important;
  .el-select-dropdown__list {
    padding: 0;
    border-radius: 4px;
    overflow: hidden;
  }
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