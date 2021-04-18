<template>
  <div id="live-self-player1"></div>
</template>

<script>
let store = BJY.store;
let eventEmitter = BJY.eventEmitter;
export default {
  components: {},
  props: {
    student: {
      type: Object,
    },
  },
  data() {
    return {
      player: null,
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 创建自己的播放器
    createMyPlayer(element) {
      this.player = BJY.DefaultThemePlayer.create({
        element: $("#live-self-player1"),
        replace: false,
        user: this.student,
        extension: BJY.getExtension(),
        canFold: false,
        canSwitchCamera: true,
        canSwitchMic: true,
      });
      if (store.get("user").id == this.student.id) {
        setTimeout(() => {
          BJY.userPublish.setDevice(this.player, true);
          var player = BJY.Player.instances[this.student.id];
          player && BJY.userPublish.setDevice(player, true, true);

          // 获取我的播放器
          var player1 = BJY.Player.instances[this.student.id];
          
          // 设置摄像头设备
          BJY.userPublish.setDevice(player1, !player1.videoOn);

          console.log('player1player1', player1);
          console.log('this.studentthis.student', this.student);
       

        }, 1000)
      }
    },
  },
  created() {},
  mounted() {
    this.createMyPlayer();
    eventEmitter.on(
      // 监听自己摄像头和麦克风变化
      eventEmitter.MEDIA_SWITCH_TRIGGER,
      function (event, data) {
        console.log('xxxxxxxxxxxxx');
        var player = BJY.Player.instances[store.get("user.id")];
        player && BJY.userPublish.setDevice(player, data.videoOn, data.audioOn);
      }
    );
  },
  beforeDestroy() {},
};
</script>

<style lang="scss">
//@import url(); 引入公共css类
#live-self-player1 {
  width: 100%;
  height: 100%;
}
</style>
