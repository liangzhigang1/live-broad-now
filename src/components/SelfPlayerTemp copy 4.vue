<template>
  <div id="active">
    <div id="live-my-player"></div>
    <div id="menu-camera" class="menu"></div>
    <div id="menu-mic" class="menu"></div>
  </div>
</template>

<script>
const eventEmitter = BJY.eventEmitter;
const auth = BJY.auth;
const store = BJY.store;

export default {
  name: "SelfPlayTemp",
  props: {
    id: {
      type: String,
      default: 'live-teacher-player'
    },
    student: {
      type: Object,
    }
  },
  components: {
  },
  data() {
    return {
      isTeacher: false,
      myPlayer: null,
      micMenu: null,
      cameraMenu: null,
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 创建自己的播放器
    createMyPlayer(isWebRTCMix) {
      var _this = this
      if (_this.student.id == store.get("user.id")) {
        // console.log('23232323232323232222222222222222222222222222222222222222222222');
        //  if (isWebRTCMix === undefined) {
        //   isWebRTCMix = auth.isWebRTC();
        // }
        // isWebRTCMix && (store.get('webrtcMixUser').name = 'xxxx');
        // _this.myPlayer && _this.myPlayer.destroy();
        // _this.myPlayer = null;
        // const options = {
        //   element: $("#live-my-player"),
        //   replace: false,
        //   user: _this.student,
        //   extension: BJY.getExtension(),
        //   canSwitchCamera: _this.student.id == store.get("user.id") ? true : false,
        //   canSwitchMic: _this.student.id == store.get("user.id") ? true : false,
        // };
        // !(_this.student.id == store.get("user.id")) && (options.isWebRTCMix = isWebRTCMix);
        // _this.myPlayer = BJY.DefaultThemePlayer.create(options);


         _this.myPlayer = BJY.DefaultThemePlayer.create(
           {
          element: $("#live-my-player"),
          replace: false,
          user: store.get("user"),
          extension: BJY.getExtension(),
          canFold: true,
          canSwitchCamera: true,
          canSwitchMic: true,
          onComplete: function () {
            eventEmitter.trigger(eventEmitter.MEDIA_SWITCH_TRIGGER, {
              videoOn: true,
              audioOn: true,
            });
          },
        }  
        );
        console.log('23232323232323232222222222222222222222222222222222222222222222', this.myPlayer);

        // 创建麦克风菜单按钮
        _this.micMenu = BJY.MicMenu.create({
            element: $('#menu-mic'),
            canSelectDevice: true,
            canAdjustVolume: true,
            maxVolume: 100,
            onSwitcherClick: function () {
                var player = _this.myPlayer.player;
                BJY.userPublish.setDevice(player, null, !player.audioOn);
            }

        });
        // 创建摄像头菜单按钮
        _this.cameraMenu = BJY.CameraMenu.create({
            element: $('#menu-camera'),
            canSelectDevice: true,
            onSwitcherClick: function () {
                var player = _this.myPlayer.player;
                BJY.userPublish.setDevice(player, !player.videoOn);
            }
        });

      }
     
    },
  },
  created() {
    var _this = this
    _this.isTeacher = auth.isTeacher();
  },
  mounted() {
    var _this = this
    console.error('studentstudentstudentstudent', _this.student);
    _this.createMyPlayer();
    eventEmitter.on(
      // 监听自己摄像头和麦克风变化
      eventEmitter.MEDIA_SWITCH_TRIGGER,
      function (event, data) {
        console.error('openpenpenopenpenpenopenpenpen');
        var player = _this.myPlayer.player;
        BJY.userPublish.setDevice(player, true, true);
        // var player = BJY.Player.instances[store.get("user.id")];
        // player && BJY.userPublish.setDevice(player, data.videoOn, data.audioOn);
      }
    );
    // 监听自己播放器是否折叠
    _this.player &&
      _this.player.watch("isFolded", (isFolded) => {
        var element = $(".live-my-player");
        if (isFolded) {
          // 执行折叠
          element.addClass("hide");
        } else {
          // 执行展开
          element.removeClass("hide");
        }
      });
  },
};
</script>

<style lang="scss">
//@import url(); 引入公共css类
#active {
  height: 100%;
  width: 100%;
  .live-my-player {
    height: 200px;
    width: 266px;
    position: absolute;
    top: 250px;
    transition: 0.2s bottom;
  }
  .live-teacher-player {
    height: 100px;
    width: 100px;
    position: absolute;
    top: 0;
    transition: 0.2s bottom;
  }
}
</style>
