<!-- 小测组件 -->
<template>
  <div style="height: 500px;background: #313847" v-loading="loading"
    element-loading-text="素材上传中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)" v-show="visible1" id="quiz-view">
    <div class="close-bar">
      <span class="bar-title">下载素材</span>
      <span v-show="isTeacher || !forceJoin" @click="close" class="bjy-close"
        ><i class="el-icon-close"></i
      ></span>
    </div>
    <div class="placeholder">
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="zuoye-box">
          <el-form-item label="作业名称" prop="name">
            {{ ruleForm.title }}
          </el-form-item>
          <!-- <el-form-item label="作业类型" prop="region">
            随堂作业
          </el-form-item>
          <el-form-item label="截止时间">
            2021-03-03    17：09：00
          </el-form-item> -->
          <el-form-item label="作业要求" prop="desc">
            {{ ruleForm.work_require }}
          </el-form-item>
          <el-form-item label="作业素材" prop="desc">
            <el-upload
              id="uploadVideo"
              ref="videoUpload"
              action="#"
              :limit="1"
              list-type="picture-card"
              :file-list="fileList"
              class="disabled1 model1"
              accept="video/mp4,video/ogg,video/flv,video/avi,video/wmv,video/rmvb"
              :on-change="
                (file, fileList) => cosUploadFileVideo(file, fileList)
              "
              :on-preview="handlePictureCardPreviewVidoe"
              :on-remove="handleVdieoRemove"
              :auto-upload="false"
              :on-exceed="exceedVideo"
            >
              <i slot="default" class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </div>
        <el-form-item style="text-align: center; margin: 14px 0 -6px -74px">
          <el-button type="primary" @click="downloadImage()">下载</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 照片和视频模态框 -->
    <el-dialog
      :fullscreen="false"
      :modal="false"
      width="60%"
      title="图片"
      max-height="70%"
      :visible.sync="dialogVisible1"
    >
      <img width="100%" :src="dialogUrl" alt="" />
    </el-dialog>
    <el-dialog
      title="视频"
      :modal="false"
      :visible.sync="dialogVisible2"
      max-height="70%"
      style="margin:auto;"
    >
      <video
        width="100%"
        controls
        :src="dialogUrl"
        style="height: -webkit-fill-available;text-align:center;"
      >
        抱歉，您的浏览器不支持
      </video>
    </el-dialog>
    <el-dialog
      title="音频"
      :modal="false"
      :visible.sync="dialogVisible3"
      max-height="70%"
      style="margin:auto;"
    >
      <audio controls autoplay loop :src="dialogUrl">
        <p>Your browser does not support the <code>audio</code> element.</p>
      </audio>
    </el-dialog>
  </div>
</template>

<script>
const eventEmitter = BJY.eventEmitter;
const auth = BJY.auth;
import { _queryPushWorkListApi } from "../../api/work";
let store = BJY.store;

export default {
  props: {
    visibleHomeworkMater: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    visibleHomeworkMater(val) {
      this.$refs['videoUpload'].clearFiles()
      this.fileList = []
      this.loading = true;
      let temp = { room_id: store.get('class.id'), last_file_id: 0, page_size: 1 };
      _queryPushWorkListApi(temp).then((res) => {
        console.log("fffff", res);
        if (res.data.length > 0) {
          console.log("res.data.file_url", res.data.file_url);
          let tempFlieList = res.data[0].file_url.split(",");
          this.ruleForm = res.data[0];
          tempFlieList.forEach((item, index) => {
            this.fileList.push({ name: "item" + index, url: item });
          });
          setTimeout(() => {
            var parent = document.querySelectorAll("#uploadVideo ul li");
            for (let i = 0; i < parent.length; i++) {
              if (parent[i].innerHTML.indexOf('.mp4') != -1) {


                if (parent[i].querySelector("img")) {
                  var video = parent[i].querySelector("img");
                  var newVideo = document.createElement("video");
                  newVideo.src = video.src;
                  newVideo.class = "el-upload-list__item-thumbnail";
                  newVideo.style = "width:100%;height:100%;";
                  parent[i].appendChild(newVideo);
                  parent[i].removeChild(video);


                }
              } else if (parent[i].innerHTML.indexOf('.mp4') != -1) {


                var parent = document.querySelectorAll("#uploadVideo ul li");
                console.log("parentparentparent", parent);
                if (parent[i].querySelector("img")) {
                  var video = parent[i].querySelector("img");
                  console.log("videovideo", video);
                  var newVideo = document.createElement("img");
                  newVideo.src = require("../../assets/img/WechatIMG94.jpeg");
                  newVideo.class = "el-upload-list__item-thumbnail";
                  newVideo.style = "width:100%;height:100%;";
                  parent[i].appendChild(newVideo);
                  parent[i].removeChild(video);
                }
              }
            }
                            this.loading = false;
          }, 1000);
          this.visible1 = val;
        } else {
          return this.$message.error("未发布作业！");
        }
      });
    },
  },
  data() {
    return {
      loading: false,
      dialogUrl: "",
      uploading: false,
      dialogImageUrl: "",
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,

      fileList: [],
      visible1: this.visibleHomeworkMater,
      isTeacher: auth.isTeacher(),
      forceJoin: false,
      ruleForm: {
        work_require: "",
        user_id: "",
        title: "",
        file_url: "",
        id: "",
      },
    };
  },
  methods: {
    exceedVideo() {},
    handleVdieoRemove() {},
    handlePictureCardPreviewVidoe(file) {
      console.log("filefile", file.url);
      this.dialogUrl = file.url;
      if (file.url.indexOf('.mp4') != -1) {
        this.dialogVisible2 = true;
      } else if (
        ffile.url.indexOf('.mp3') != -1
      ) {
        this.dialogVisible3 = true;
      } else {
        this.dialogVisible1 = true;
      }
    },
    cosUploadFileVideo() {},
    downloadImage() {
      for (let i = 0; i < this.fileList.length; i++) {
        if (
          this.fileList[i].url.split(".")[3] == "png" ||
          this.fileList[i].url.split(".")[3] == "jpg"
        ) {
          // const link = document.createElement('a');//我们用模拟q标签点击事件
          const fname = this.fileList[i].name; //下载文件的名字
          // 生成一个 a 标签
          const a = document.createElement("a");
          a.download = fname;
          a.alt = fname;
          a.style.display = "none";
          const image = new Image();
          image.crossOrigin = "*";
          image.src = this.fileList[i].url + "?v=" + Math.random();

          image.onload = () => {
            const base64 = getBase64Images(image);
            a.href = base64;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          };
          function getBase64Images(image) {
            const canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            const context = canvas.getContext("2d");
            context.drawImage(image, 0, 0, image.width, image.height);
            const url = canvas.toDataURL("image/png", 0);
            return url;
          }
        } else {
          //在本页打开窗口
          // let $eleForm = $("<form method='get'></form>");
          // $eleForm.attr("action", this.fileList[i].url);
          // $(document.body).append($eleForm);
          // //提交表单，实现下载
          // $eleForm.submit();
          this.downloadMp3(this.fileList[i].url)
          // const link = document.createElement('a');//我们用模拟q标签点击事件
          // const fname = 'sucai.jpg'; //下载文件的名字
          // link.href = this.dataUrlToBold(this.fileList[i].url);
          // link.setAttribute('download', fname);
          // document.body.appendChild(link);
          // link.click();
        }
      }
    },

    downloadMp3(filePath) {
	  fetch(filePath).then(res => res.blob()).then(blob => {
	    const a = document.createElement('a');
	    document.body.appendChild(a)
	    a.style.display = 'none'
	    // 使用获取到的blob对象创建的url
	    const url = window.URL.createObjectURL(blob);
	    a.href = url;
	    // 指定下载的文件名
	    a.download = filePath;
	    a.click();
	    document.body.removeChild(a)
	    // 移除blob对象的url
	    window.URL.revokeObjectURL(url);
	  });
	},
      
    // },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    open(data) {},
    close() {
      this.visible1 = false;
      this.fileList = []
      this.$emit("closeHomeworkMater", this.visible1);
    },
    initTeacher() {},
    initStudent() {
      // BJY.quizStudent.init();
    },
  },
  created() {},
  mounted() {
    this.isTeacher ? this.initTeacher() : this.initStudent();
  },
  beforeDestroy() {},
};
</script>

<style lang="scss">
.model1 .el-upload-list__item-delete {
  display: none !important;
}
.disabled1 .el-upload--picture-card {
  display: none !important;
}
// 新加样式  2020.7.20
.disabled1 .el-upload-list__item {
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
#quiz-view {
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background: #fff;
  border: 1px solid #6e7583;

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
      padding: 4px 20px 10px;
      width: 100%;
      border-radius: 4px;
    }
  }
}
</style>
<style lang="scss">
#quiz-view {
  .el-form-item {
    margin-bottom: 0;
  }
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
.work-list {
  background-image: url("../../assets/img/zip.png");
  // background-repeat:no-repeat;
  background-position: center center;
}
</style>
