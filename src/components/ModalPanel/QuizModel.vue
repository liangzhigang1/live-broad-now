<!-- 发布作业 -->
<template>
  <div
    v-show="visible"
    :class="isTeacher ? 'teacher' : 'teacher'"
    id="quiz-xxx"
  >
    <div class="close-bar">
      <span class="bar-title">发布作业</span>
      <span v-show="isTeacher || !forceJoin" @click="close" class="bjy-close"><i class="el-icon-close"></i></span>
    </div>
    <div class="placeholder">
      <el-form :model="formItem"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
        <div class="zuoye-box">
          <el-form-item label="作业标题" prop="title">
            <el-input
              v-model="formItem.title"
              placeholder="请输入作业标题"
            ></el-input>
          </el-form-item>
          <el-form-item label="作业类型" prop="work_type">
            <el-select v-model="formItem.work_type" placeholder="请选择作业类型">
              <el-option label="随堂作业" value="1"></el-option>
              <el-option label="课后作业" value="2"></el-option>
              <el-option label="结课作业" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="截止时间">
            <el-date-picker
              v-model="formItem.end_time"
              type="datetime"
              format="yyyy-MM-dd HH:mm:ss"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="作业要求" prop="desc">
            <el-input
              type="textarea"
              v-model="formItem.work_require"
              :autosize="{ minRows: 4, maxRows: 6 }"
              placeholder="请输入作业要求"
            ></el-input>
          </el-form-item>
          <el-form-item label="素材上传" prop="file_url">
            <p class="sucai-p"><span>图片</span>(jpg,png，gif格式)限定5MB,</p>
            <p class="sucai-p">
              <span>视频</span>(MPEG/MPG/DAT、AVI、MOV、WMV、RMVB、F4V、MKvMP4格式)限定100MB。
            </p>
            <p class="sucai-p">
              <span>音频</span>(WAVE、AIFF、MPEG、MP3、MPEG-4、MIDI、WMA、RealAudio、OggVorbis、AMR、APE、FLAC、AAC 格式)限定
            </p>
            <div style="margin-top: 5px">

              <el-upload
                id="uploadVideo"
                ref="upload"
                action="#"
                :limit="9"
                list-type="picture-card"
                :class="{disabled: disabled ? true : false}"
                accept="image/jpeg,image/png,image/gif,image/jpg,audio/mpeg,audio/mp3,video/mp4"
                :on-change="(file, fileList) => cosUploadFile(file, fileList)"
                :on-remove="handleRemove"
                :auto-upload="false">
                <i slot="default" class="el-icon-plus"></i>
              </el-upload>
              </div>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
          </el-form-item>
        </div>
        <el-form-item style="text-align: right; margin: 14px 0 -6px">
          <el-button v-if="!uploading" type="primary" @click="submitForm('ruleForm')">确认</el-button>
          <el-button v-if="uploading" type="primary">上传中</el-button>
          <el-button @click="close">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
const eventEmitter = BJY.eventEmitter;
const auth = BJY.auth;
import { _uploadFileApi } from '../../api/upload/index'
import { _putWorkApi } from '../../api/work/index'
let store = BJY.store;

export default {
  data() {
    return {
      uploading: false,
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      visible: false,
      isTeacher: auth.isTeacher(),
      forceJoin: false,
      formItem: {
        room_id: store.get('class.id'),
        title: "",
        work_type: "",
        end_time: "",
        work_require: "",
        file_url: ""
      },
      ruleForm: {

      }
    };
  },
  methods: {
    handleDownload (file) {
      console.log('filefilefile', file);
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      // this.dialogVisible = true;
    },
    submitForm(formName) {
      if (!this.formItem.title) {
        return this.$message.error('作业标题不能为空!')
      }
      if (!this.formItem.work_type) {
        return this.$message.error('作业类型不能为空!')
      }
      if (!this.formItem.end_time) {
        return this.$message.error('截止时间不能为空!')
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('this.formItemthis.formItem', this.formItem)
          _putWorkApi(this.formItem).then(res => {
            console.log('1111111111111', res);
              if (res.code === 0) {
                  this.$message({
                      message: '保存成功',
                      type: 'success',
                      duration: 1000 * 1.5
                  });
              }
          }).finally(() => {
            this.$refs.upload.clearFiles();
            this.formItem = {
              room_id: store.get('class.id'),
              title: "",
              work_type: "",
              end_time: "",
              work_require: "",
              file_url: ""
            }
            this.close()
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 上传图片
        cosUploadFile (file) {
          console.log('this.$refs.upload', this.$refs.upload)
          this.uploading = true
          if (file.raw.type.indexOf('image') != -1) {
              let width = 1080;
              let height = 608;
              let _URL = window.URL || window.webkitURL;
              let image = new Image();
              image.onload = () => {
                    const formData = new FormData();
                    formData.append("file",file.raw)
                    _uploadFileApi(formData).then(res => {
                      this.uploading = false
                      if (res.code == 0) {
                        if (this.formItem.file_url) {
                          this.formItem.file_url += ',' + res.data.url
                        } else {
                          this.formItem.file_url = res.data.url
                        }
                      } else {
                        this.$refs.upload.uploadFiles.pop()
                      }     
                    })
              };
              image.src = _URL.createObjectURL(file.raw);
          } else if (file.raw.type.indexOf('audio') != -1) {
            const formData = new FormData();
            _uploadFileApi(formData).then(res => {
              this.uploading = false
              if (res.code == 0) {
                if (this.formItem.file_url) {
                  this.formItem.file_url += ',' + res.data.url
                } else {
                  this.formItem.file_url = res.data.url
                }
              } else {
                this.$refs.upload.uploadFiles.pop()
              }
            })

            setTimeout(() => {
              var parent = document.querySelectorAll("#uploadVideo ul li");
              for (let i = 0; i < parent.length; i++) {
                  if (parent[i].querySelector("img")) {
                      var video = parent[i].querySelector("img")
                      console.log('videovideo', video);
                      var newVideo = document.createElement('img');
                      newVideo.src = require('../../assets/img/WechatIMG94.jpeg');
                      newVideo.class = "el-upload-list__item-thumbnail";
                      newVideo.style = "width:100%;height:100%;";
                      parent[i].appendChild(newVideo);
                      parent[i].removeChild(video);
                  }
              }
            }, 100);

          } else if (file.raw.type.indexOf('video') != -1) {
            const formData = new FormData();
            _uploadFileApi(formData).then(res => {
              this.uploading = false
              if (res.code == 0) {
                if (this.formItem.file_url) {
                  this.formItem.file_url += ',' + res.data.url
                } else {
                  this.formItem.file_url = res.data.url
                }
              } else {
                this.$refs.upload.uploadFiles.pop()
              }
            })
            setTimeout(() => {
              var parent = document.querySelectorAll("#uploadVideo ul li");
              for (let i = 0; i < parent.length; i++) {
                  if (parent[i].querySelector("img")) {
                      var video = parent[i].querySelector("img")
                      var newVideo = document.createElement('video');
                      newVideo.src = video.src;
                      newVideo.class = "el-upload-list__item-thumbnail";
                      newVideo.style = "width:100%;height:100%;";
                      parent[i].appendChild(newVideo);
                      parent[i].removeChild(video);
                  }
              }
            }, 1000);
          }
        },
    // 图片限制一个
    exceedPicture (files, fileList) {
      if (fileList && fileList.length > 9) {
        this.disabled = true;
        return this.$message.error('最多只能添加9个素材 !')
      }
    },
    open(data) {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
  },
  created() {
    eventEmitter
      .on("toggle_quiz_dialog", (e, data) => {
        this.visible ? this.close() : this.open();
      });
  },
  mounted() {
  },
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.disabled .el-upload--picture-card {
    display: none !important;
}
#quiz-xxx {
  .el-upload-list__item {
    width: 100px !important;
    height: 100px !important;;
  }
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
      height: 556px;
      overflow: auto;
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