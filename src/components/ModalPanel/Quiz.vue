<!-- 发布作业 -->
<template>
  <div
    v-loading="loading"
    element-loading-text="素材上传中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    v-show="visible"
    :class="isTeacher ? 'teacher' : 'teacher'"
    id="quiz-xxx"
  >
    <div class="close-bar">
      <span class="bar-title">发布作业</span>
      <span v-show="isTeacher || !forceJoin" @click="close" class="bjy-close"
        ><i class="el-icon-close"></i
      ></span>
    </div>
    <div class="placeholder">
      <el-form
        :model="formItem"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="zuoye-box">
          <el-form-item label="作业标题" prop="title">
            <el-input
              v-model="formItem.title"
              placeholder="请输入作业标题"
            ></el-input>
          </el-form-item>
          <el-form-item label="作业类型" prop="work_type">
            <el-select
              v-model="formItem.work_type"
              placeholder="请选择作业类型"
            >
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
              <span>视频</span
              >(MPEG/MPG/DAT、AVI、MOV、WMV、RMVB、F4V、MKvMP4格式)限定100MB。
            </p>
            <p class="sucai-p">
              <span>音频</span
              >(WAVE、AIFF、MPEG、MP3、MPEG-4、MIDI、WMA、RealAudio、OggVorbis、AMR、APE、FLAC、AAC
              格式)限定
            </p>
            <div style="margin-top: 5px">
              <el-upload
                id="uploadVideo"
                ref="upload"
                action="#"
                :limit="9"
                list-type="picture-card"
                :class="{ disabled: disabled ? true : false }"
                accept="image/jpeg,image/png,image/gif,image/jpg,audio/mpeg,audio/mp3,video/mp4"
                :on-change="(file, fileList) => cosUploadFile(file, fileList)"
                :on-remove="handleRemove"
                :on-preview="handlePictureCardPreviewVidoe"
                :auto-upload="false"
                :on-exceed="exceedVideo">
                <i slot="default" class="el-icon-plus"></i>
              </el-upload>
            </div>
          </el-form-item>
        </div>
        <el-form-item style="text-align: right; margin: 14px 0 -6px">
          <el-button
            v-if="!uploading"
            type="primary"
            @click="submitForm('ruleForm')"
            >确认</el-button
          >
          <el-button v-if="uploading" type="primary">上传中</el-button>
          <el-button @click="close">取消</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 照片和视频模态框 -->
    <el-dialog  :fullscreen="false" :modal="false" width="60%" title="图片" max-height="70%" :visible.sync="dialogVisible1">
        <img width="100%" :src="dialogUrl" alt="">
    </el-dialog> 
    <el-dialog title="视频" :modal="false" :visible.sync="dialogVisible2" max-height="70%" style="margin:auto;">
            <video width="100%" controls :src="dialogUrl" style="height: -webkit-fill-available;text-align:center;">
                抱歉，您的浏览器不支持
            </video>
    </el-dialog>
    <el-dialog title="音频" :modal="false" :visible.sync="dialogVisible3" max-height="70%" style="margin:auto;">
      <audio controls autoplay loop :src="dialogUrl">
        <p>Your browser does not support the <code>audio</code> element.</p>
      </audio>
    </el-dialog>
    
  </div>
</template>

<script>
const eventEmitter = BJY.eventEmitter;
const auth = BJY.auth;
import { _uploadFileApi } from "../../api/upload/index";
import { _putWorkApi } from "../../api/work/index";
let store = BJY.store;

export default {
  data() {
    return {
      loading: false,
      dialogUrl: '',
      uploading: false,
      dialogImageUrl: "",
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
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
        file_url: "",
      },
      ruleForm: {},
    };
  },
  methods: {
    handlePictureCardPreviewVidoe(file) {
      this.dialogUrl = file.url
      if (file.raw.type == 'video/mp4') {
        this.dialogVisible2 = true
      } else if (file.raw.type == 'audio/mp3' || file.raw.type == 'audio/mpeg') {
        this.dialogVisible3 = true
      } else {
        this.dialogVisible1 = true
      }
    },
    exceedVideo(files, fileList) {
      if (fileList && fileList.length > 0) {
        return this.$message.error("只能添加九个文件 !");
      }
    },
    handleDownload(file) {
      console.log("filefilefile", file);
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
        return this.$message.error("作业标题不能为空!");
      }
      if (!this.formItem.work_type) {
        return this.$message.error("作业类型不能为空!");
      }
      if (!this.formItem.end_time) {
        return this.$message.error("截止时间不能为空!");
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("this.formItemthis.formItem", this.formItem);
          _putWorkApi(this.formItem)
            .then((res) => {
              console.log("1111111111111", res);
              if (res.code === 0) {
                this.$message({
                  message: "保存成功",
                  type: "success",
                  duration: 1000 * 1.5,
                });
              }
            })
            .finally(() => {
              this.$refs.upload.clearFiles();
              this.formItem = {
                room_id: store.get('class.id'),
                title: "",
                work_type: "",
                end_time: "",
                work_require: "",
                file_url: "",
              };
              this.close();
            });
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
    cosUploadFile(file) {
      console.log("this.$refs.upload", this.$refs.upload);
      this.loading = true;

      this.uploading = true;
      if (file.raw.type.indexOf("image") != -1) {
        let width = 1080;
        let height = 608;
        let _URL = window.URL || window.webkitURL;
        let image = new Image();
        image.onload = () => {
          // const isSize = (image.width >= 100 && image.height >= 80) && (image.width <= 800 && image.height <= 400);
          const isSize = true;

          // const isLt2M = file.size / 1024 / 1024 < 5;
          const isLt2M = true;
          if (!isLt2M) {
            // this.$refs.upload.uploadFiles.pop();
            // return this.$message.error("上传图片大小不能超过 5MB!");
          }
          if (!isSize) {
            this.$message.error(
              "上传图片尺寸不符合,请上传100*80至800*400的图片!"
            );
          }
          if (isLt2M && isSize) {
            console.log("file.raw", file.raw);
            const formData = new FormData();
            formData.append("file", file.raw);
            _uploadFileApi(formData).then((res) => {
              console.log("resresres", res);
              this.uploading = false;
              if (res.code == 0) {
                if (this.formItem.file_url) {
                  this.formItem.file_url += "," + res.data.url;
                } else {
                  this.formItem.file_url = res.data.url;
                }
                this.loading = false;
              } else {
                this.$refs.upload.uploadFiles.pop();
              }
            });
          } else {
          }
        };
        image.src = _URL.createObjectURL(file.raw);
      } else if (file.raw.type.indexOf("audio") != -1) {
        const isLt2M = file.size / 1024 / 1024 < 5;
        if (!isLt2M) {
          // this.$refs.upload.uploadFiles.pop();
          // return this.$message.error("上传音频大小不能超过 5MB!");
        }
        console.log("file.raw", file.raw);
        const formData = new FormData();
        formData.append("file", file.raw);
        _uploadFileApi(formData).then((res) => {
          this.uploading = false;
          if (res.code == 0) {
            if (this.formItem.file_url) {
              this.formItem.file_url += "," + res.data.url;
            } else {
              this.formItem.file_url = res.data.url;
            }
          } else {
            this.$refs.upload.uploadFiles.pop();
          }
        });

        setTimeout(() => {
          var parent = document.querySelectorAll("#uploadVideo ul li");
          // for (let i = 0; i < parent.length; i++) {
          if (parent[parent.length - 1].querySelector("img")) {
            var video = parent[parent.length - 1].querySelector("img");
            console.log("videovideo", video);
            var newVideo = document.createElement("img");
            newVideo.src = require("../../assets/img/WechatIMG94.jpeg");
            newVideo.class = "el-upload-list__item-thumbnail";
            newVideo.style = "width:100%;height:100%;";
            parent[parent.length - 1].appendChild(newVideo);
            parent[parent.length - 1].removeChild(video);
            this.loading = false;
          }
          // }
        }, 1010);
      } else if (file.raw.type.indexOf("video") != -1) {
        this.loading = true;
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isLt2M) {
          // this.$refs.upload.uploadFiles.pop();
          // return this.$message.error("上传视频大小不能超过 10MB!");
        }
        console.log("file.raw", file.raw);
        const formData = new FormData();
        formData.append("file", file.raw);
        _uploadFileApi(formData).then((res) => {
          console.log("resresres", res);
          this.uploading = false;
          if (res.code == 0) {
            if (this.formItem.file_url) {
              this.formItem.file_url += "," + res.data.url;
            } else {
              this.formItem.file_url = res.data.url;
            }
            setTimeout(() => {
              var parent = document.querySelectorAll("#uploadVideo ul li");
              // for (let i = 0; i < parent.length; i++) {
              if (parent[parent.length - 1].querySelector("img")) {
                var video = parent[parent.length - 1].querySelector("img");
                var newVideo = document.createElement("video");
                newVideo.src = video.src;
                newVideo.class = "el-upload-list__item-thumbnail";
                newVideo.style = "width:100%;height:100%;";
                parent[parent.length - 1].appendChild(newVideo);
                parent[parent.length - 1].removeChild(video);
              }
              // }
              this.loading = false;
            }, 200);
          } else {
            this.$refs.upload.uploadFiles.pop();
          }
        });
      }
    },
    // 图片限制一个
    exceedPicture(files, fileList) {
      if (fileList && fileList.length > 9) {
        this.disabled = true;
        return this.$message.error("最多只能添加9个素材 !");
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
    eventEmitter.on("toggle_quiz_dialog", (e, data) => {
      this.visible ? this.close() : this.open();
    });
  },
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="scss">
.el-dialog {
}
.disabled .el-upload--picture-card {
  display: none !important;
}
.disabled .el-upload--picture-card {
  display: none !important;
}
.disabled .el-upload-list__item {
  background-image: none;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.el-upload-list--picture-card .el-upload-list__item-actions:hover span {
  display: inline-block;
}
.el-upload-list--picture-card .el-upload-list__item-actions {
  z-index: 1000 !important;
}
.el-progress-circle {
  height: 147px !important;
  width: 147px !important;
}
.el-upload--picture-card {
  width: 300px;
}
#edui1_iframeholder {
  height: 520px !important;
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
      height: 500px;
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
