<!-- 小测组件 -->
<template>
  <div v-show="visible1" id="quiz-home-work-master">
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
            UI基础入门
          </el-form-item>
          <el-form-item label="作业类型" prop="region">
            随堂作业
          </el-form-item>
          <el-form-item label="截止时间">
            2021-03-03 17:09:00
          </el-form-item>
          <el-form-item label="作业要求" prop="desc">
            作业要求作业要求作业要求作业要求作业要求作业要求作业要求作业要求作业要求作业要求
          </el-form-item>
          <el-form-item label="作业素材" prop="desc">
            <div v-for="item in 4" :key="item" class="sucai-img">
              <img :src="require('@/assets/img/sucai.jpg')" alt="" style="width:100%;height:100%;object-fit: cover;">
            </div>
          </el-form-item>
        </div>
        <el-form-item style="text-align: center; margin: 14px 0 -6px -74px">
          <el-button type="primary" @click="submitForm()">下载</el-button>
          <!-- <el-button @click="close">取消</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
<script>
// import '@/utils/jquery.wordexport.js'
const eventEmitter = BJY.eventEmitter;
const auth = BJY.auth;

export default {
  props: {
    visibleHomeworkMater: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    visibleHomeworkMater (val) {
      this.visible1 = val
    }
  },
  data() {
    return {
      visible1: this.visibleHomeworkMater,
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
    submitForm() {
      for (let i = 0; i < 4; i++) {
          const link = document.createElement('a');//我们用模拟q标签点击事件
          const fname = 'sucai.jpg'; //下载文件的名字
          link.href = require('../../assets/img/sucai.jpg');
          link.setAttribute('download', fname);
          document.body.appendChild(link);
          link.click();
      }    
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
      this.$emit('closeHomeworkMater', this.visible1)
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
#quiz-home-work-master {
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
      .sucai-img {
        float: left;
        width: 80px;
        height: 80px;
        background: #1D2129;
        margin-right: 4px;
        margin-bottom: 4px;
        border-radius: 4px;
        border: 1px solid #6E7583;
        overflow: hidden;
      }
    }
  }
}
</style>
<style lang="scss">
#quiz-home-work-master {
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
    width: 114px;
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