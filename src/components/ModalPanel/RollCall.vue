<!-- 点名组件实现： 点名没有独立的组件来实现，我们提供了一套事件驱动的点名系统 -->

<template>
  <div id="roll-call-dialog"></div>
</template>

<script>
import language from "../../language/main";
import { _getClassStudentListApi } from "../../api/user/userApi"
let auth = BJY.auth;
let eventEmitter = BJY.eventEmitter;

export default {
  components: {},
  data() {
    return {
      language: language,
      status: 0,
      isStudent: auth.isStudent(),
      applyTimer: null,
      timeLeft: "",
      result: "",
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    var _this = this
    eventEmitter.on(
      eventEmitter.ROLL_CALL, // 老师发起了点名
      async (e, data) => {
        console.log('datadatadatadata', data);
        if (data.duration == '30') {
        } else  {
           console.log('2222222', data);
        let params = data.duration + ''
        console.log('333333333', params[0])
        let result = await _getClassStudentListApi({page: 1, page_size: 50, room_id: 21032159047031})
        // 随机抽几个人的算法
        var classStudentList = result.data.list
        var posArray = []
        do {
          var n = Math.floor(Math.random() *  classStudentList.length);
          for(var i = 0; i < posArray.length; i++) {
            if (classStudentList[n].id == posArray[i].id) { 
              break;
            }
          }
          posArray.push(classStudentList[n]);
        } while(posArray.length != Number(params[0]));
        //
        this.timeLeft = data.duration;
        posArray.forEach(student => {
          if (BJY.store.get("user").number == student.id) {
            this.$Dialog.show({
              title: "点名",
              content: `请在<span id="roll-call-time-left">${data.duration}</span>秒内响应`,
              confirmText: "答到",
            }).then(() => {
              eventEmitter.trigger(eventEmitter.ROLL_CALL_RES);
            }).catch((e) => {
            });
            this.applyTimer = setInterval(() => {
              if (this.timeLeft === 0) {
                clearInterval(this.applyTimer);
                this.$Dialog.hide();
              }
              $("#roll-call-time-left").text(this.timeLeft);
              this.timeLeft--;
            }, 1000);
          }
        })
        }
       

      }
    );
  },
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
