<!-- 答题器组件 -->
<template>
  <div v-show="visible" id="answer-machine">
    <div class="placeholder"></div>
  </div>
</template>

<script>
import language from "../../language/main";
const eventEmitter = BJY.eventEmitter;
const auth = BJY.auth;

export default {
  components: {},
  data() {
    return {
      language,
      visible: false,
    };
  },
  methods: {
    open(data, isShowResult) {
      this.visible = true;
      auth.isStudent() &&
        BJY.AnswerStudent.open(
          $.extend(
            {
              element: $("#answer-machine .placeholder")[0],
              // 是否在提交之后关闭，默认为false
              autoCloseAfterSubmit: false,
              // 组件内部不提供UI隐藏，由外层隐藏
              onClose: () => {
                this.close();
              },
              onHide: () => {
                this.close();
              },
              replace: false,
              // // 显示答案
              showResult: isShowResult,
              // 提交后立即显示答案
              autoShowResultAfterEnd: !!data.isShowCorrectAnswer,
            },
            data
          )
        );
    },
    close() {
      this.visible = false;
    },
  },
  created() {
    //   学生端需要监听事件
    eventEmitter
      .on(eventEmitter.START_ANSWER, (event, data) => {
        console.log(data);
        this.open(data, false);
      })
      .on(eventEmitter.END_ANSWER, () => {})
      // 展示答题结果
      .on(eventEmitter.ANSER_RESULT_SHOW, (event, data) => {
        this.open(data, true);
      })
      .on("toggle_answer_dialog", () => {
        this.visible ? this.close() : this.open();
      });
  },
  mounted() {
    auth.isTeacher()
      ? BJY.AnswerTeacher.init({
          element: $("#answer-machine .placeholder")[0],
          onClose: () => {
            this.close();
          },
          onHide: () => {
            this.close();
          },
        })
      : BJY.AnswerStudent.init();
  },
  beforeDestroy() {},
};
</script>

<style lang="scss">
//@import url(); 引入公共css类
/*答题器样式*/
#answer-machine {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  z-index: 10;
  border-radius: 4px;
  border: 1px solid #6E7583;
  .bjy-answer-teacher-header {
    background-color: #1C222E;
    color: #fff;
  }
  .bjy-answer-teacher-body {
    background-color: #313847;
    .bjy-answer-option, .bjy-option-action {
      border: 1px solid #27AEED;
      color:  #27AEED;
    }
    .bjy-answer-teacher-tab-item.active, .bjy-answer-option.active, .bjy-answer-add {
      background: linear-gradient(#0E98D7, #027CB5);
      color: #fff;
    }
    .bjy-answer-teacher-tab-item, .bjy-answer-teacher-timer, .bjy-answer-options-title, .bjy-correct-show-title, .bjy-correct-show, .bjy-description-box textarea, .bjy-answer-option:hover, .bjy-option-action:hover {
      color: #fff;
    }
  }
}
</style>
