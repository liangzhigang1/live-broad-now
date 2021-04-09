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
        // let xx = `page=1&page_size=50&partner_id=83228320&room_id=21032159047031&timestamp=1615996148&partner_key=dBn3oMMrE68/kijw20wg6JGHWGUcUkwh2Fi57N9r26v4R3QbWYQ66/IUchj/pyzlKM9l1WjgNEnLqCWFc2Lzvtp6xhlI`
        // let sign = _this.$md5(xx)
        // let params = { partner_id: 83228320, room_id: 21032159047031, page: 1, page_size: 50, timestamp: 1615996148, sign: sign}
        let result = await _getClassStudentListApi({page: 1, page_size: 50, room_id: 21032159047031})
        if (result.data.list.length > 0) {


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
        } while(posArray.length != 1);

        console.error('posArrayposArrayposArray', posArray)
        this.timeLeft = data.duration;
        console.log('BJY.store.get("user.id")', BJY.store.get("user"));

        if (BJY.store.get("user").number == posArray[0].id) {
          setTimeout(() => {
            console.error('32132131231233222222222222');
            var player = BJY.Player.instances[BJY.store.get("user.id")];
            BJY.userPublish.setDevice(player, !player.videoOn, !player.audioOn);
          }, 1000);
        }
        


        this.$Dialog
          .show({
            title: "点名",
            content: `请在<span id="roll-call-time-left">${data.duration}</span>秒内响应`,
            confirmText: "答到",
          })
          .then(() => {
            eventEmitter.trigger(eventEmitter.ROLL_CALL_RES);
          })
          .catch((e) => {
          });

        this.applyTimer = setInterval(() => {
          if (this.timeLeft === 0) {
            clearInterval(this.applyTimer);
            this.$Dialog.hide();
          }
          $("#roll-call-time-left").text(this.timeLeft);
          this.timeLeft--;
        }, 1000);

        } else {
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
