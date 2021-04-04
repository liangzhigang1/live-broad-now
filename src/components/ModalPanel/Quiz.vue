<!-- 小测组件 -->
<template>
  <div
    v-show="visible"
    :class="isTeacher ? 'teacher' : 'student'"
    id="quiz-xxx"
  >
    <div class="close-bar">
      <span class="bar-title">发布作业</span>
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
          <el-form-item label="作业名称" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入作业名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="作业类型" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择作业类型">
              <el-option label="随堂作业" value="0"></el-option>
              <el-option label="课后作业" value="1"></el-option>
              <el-option label="结课作业" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="截止时间">
            <el-date-picker
              v-model="ruleForm.time"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="作业要求" prop="desc">
            <el-input
              type="textarea"
              v-model="ruleForm.desc"
              :autosize="{ minRows: 4, maxRows: 6 }"
              placeholder="请输入作业要求"
            ></el-input>
          </el-form-item>
          <el-form-item label="素材上传" prop="desc">
            <p class="sucai-p"><span>图片</span>(jpg,png，gif格式)限定5MB,</p>
            <p class="sucai-p">
              <span>视频</span
              >(MPEG/MPG/DAT、AVI、MOV、WMV、RMVB、F4V、MKvMP4格式)限定100MB。
            </p>
            <p class="sucai-p">
              <span>音频</span>(WAVE、AIFF、MPEG、MP3、MPEG-4、MIDI
              、WMA、RealAudio、OggVorbis、AMR、APE、FLAC、AAC 格式)限定
            </p>
            <div style="margin-top: 5px">
              <el-upload action="#" list-type="picture-card" :limit="9" :auto-upload="false">
                    <i slot="default" class="el-icon-plus"></i>
                    <!-- <div slot="file" slot-scope="{file}">
                      <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                      <span class="el-upload-list__item-actions">
                        <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                          <i class="el-icon-zoom-in"></i>
                        </span>
                        <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                          <i class="el-icon-download"></i>
                        </span>
                        <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                          <i class="el-icon-delete"></i>
                        </span>
                      </span>
                    </div> -->
                </el-upload>
              </div>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
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
  </div>
</template>

<script>
const eventEmitter = BJY.eventEmitter;
const auth = BJY.auth;

export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
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
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
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
      .on("toggle_quiz_dialog", (e, data) => {
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
#quiz-xxx {
  position: absolute;
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
#quiz-xxx {
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