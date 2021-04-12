<!-- 小测组件 -->
<template>
  <div v-show="visible1" id="quiz-view">
    <div class="close-bar">
      <span class="bar-title">查看发布</span>
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
            <div class="work-list" v-for="(item, index) in this.fileList" :key="index" style="float: left;width: 80px;height: 80px;margin-right: 3px;margin-bottom: 3px">

            </div>
          </el-form-item>
        </div>
        <el-form-item style="text-align: center; margin: 14px 0 -6px -74px">
          <el-button type="primary" @click="downloadImage()">下载</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
const eventEmitter = BJY.eventEmitter;
const auth = BJY.auth;
import {_queryPushWorkListApi} from '../../api/work'

export default {
  props: {
    visibleHomeworkMater: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    visibleHomeworkMater (val) {
      let temp = {room_id: 21032159047031, last_file_id: 0, page_size: 1}
      _queryPushWorkListApi(temp).then(res => {
        console.log('fffff', res)
        if (res.data.length > 0) {
          console.log('res.data.file_url', res.data.file_url);
          let tempFlieList = res.data[0].file_url.split(',')
          this.ruleForm = res.data[0]
          tempFlieList.forEach((item, index) => {
            this.fileList.push({name: 'item' + index, url: item})
          })
          console.log('this.fileList', this.fileList);
          this.visible1 = val
        } else {
          return this.$message.error('未发布作业！')
        }
      })
    }
  },
  data() {
    return {
      fileList: [],
      visible1: this.visibleHomeworkMater,
      isTeacher: auth.isTeacher(),
      forceJoin: false,
      ruleForm: {
        work_require: "",
        user_id: "",
        title: "",
        file_url: "",
        id: ""
      },
    };
  },
  methods: {
    downloadImage() {
      for (let i = 0; i < this.fileList.length; i++) {
        console.log('this.fileList', this.fileList[i]);
        if (this.fileList[i].url.split('.')[3] == 'png' || this.fileList[i].url.split('.')[3] == 'jpg' ) {
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
          };
        } else {
          //  var video = new File(this.fileList[i].url);  //选择的文件
          //  console.log('videovideovideo', video);
          //   var reader = new FileReader();  
          //   var rs = reader.readAsDataURL(video);  
          //   reader.onload = (e) =>{
          //     var videoSrc= e.target.result; 
          //     console.log(videoSrc)
          //     //提交到后台部分略
          //   }
          // window.open(this.fileList[i].url);
          // console.log('3333333333333333');
          // const link = document.createElement('a');//我们用模拟q标签点击事件
          // const fname = this.fileList[i].name; //下载文件的名字
          // link.href = this.fileList[i].url;
          // link.setAttribute('download', 'xxx.mp4');
          // document.body.appendChild(link);
          // link.click();

          //在本页打开窗口
    let $eleForm = $("<form method='get'></form>");
    $eleForm.attr("action",this.fileList[i].url);
    $(document.body).append($eleForm);
    //提交表单，实现下载
    $eleForm.submit();
        }
        

      }        
    },
    // downloadImage() {
    //   try {
    //      for (let i = 0; i < this.fileList.length; i++) {
    //       // const link = document.createElement('a');//我们用模拟q标签点击事件
    //       const fname = this.fileList[i].name; //下载文件的名字
    //       // link.href = this.fileList[i].url;
    //       // link.setAttribute('download', fname);
    //       // document.body.appendChild(link);
    //       // link.click();
    //       this.convertUrlToBase64(this.fileList[i].url).then(function(base64) {
    //         console.log('555555555');
    //           // 图片转为base64
    //           var blob = that.convertBase64UrlToBlob(base64); // 转为blob对象
    //           // 下载
    //           var a = document.createElement("a");
    //           a.download = fname;
    //           a.href = URL.createObjectURL(blob);
    //           a.click();
    //       });
    //   }    
    //   } catch (error) {
    //     console.error('222', error);
    //   }
     
    // },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    open(data) {
      
      // this.$nextTick(() => {
      //   !this.isTeacher;
      // });
    },
    close() {
      this.visible1 = false;
      this.$emit('closeViewQuiz', this.visible1)
    },
    initTeacher() {},
    initStudent() {
      // BJY.quizStudent.init();
    },
  },
  created() {
  },
  mounted() {
    this.isTeacher ? this.initTeacher() : this.initStudent();
  },
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
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
  background-image: url('../../assets/img/zip.png');
  // background-repeat:no-repeat;
  background-position:center center;

}
</style>