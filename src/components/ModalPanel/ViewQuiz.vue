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
import {_queryPushWorkListApi} from '../../api/work'

export default {
  props: {
    visibleViewQuiz: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    visibleViewQuiz (val) {
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
      visible1: this.visibleViewQuiz,
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
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