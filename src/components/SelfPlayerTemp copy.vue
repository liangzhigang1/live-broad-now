<template>
  <div id="active">
    <div v-if="isTeacher" id="active-list">
      <div class="placeholder"></div>
    </div>
    <!-- 自己播放器 -->
    <div v-else class="live-self-player">
      <SelfPlayers :student="student" />
    </div>
  </div>
</template>

<script>
// 自己播放器
import SelfPlayers from "./SelfPlayers";
const eventEmitter = BJY.eventEmitter;
const auth = BJY.auth;
const store = BJY.store;

export default {
  name: "aaaaa",
  props: {
    id: {
      type: String,
      default: '#live-self-player1'
    },
    student: {
      type: Object,
    }
  },
  components: {
    SelfPlayers,
  },
  data() {
    return {
      activeList: null,
      noOneSpeaking: true,
      isTeacher: false,
      isShow: false
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    this.isShow = store.get("user").id == this.student.id
    this.isTeacher = auth.isTeacher();
  },
  mounted() {
    console.error('studentstudentstudentstudent', this.student);
    if (this.isTeacher) {
      var activeList = BJY.ActiveList.create({
        element: $("#active-list .placeholder"), // 父容器
        extension: BJY.getExtension(), // 播放器扩展
        width: 260, // 父容器宽度，用于计算播放器的高度
        replace: false, // 是否替换父容器下的 DOM
      });
      eventEmitter.on(
        eventEmitter.ACTIVE_LIST_PRESENTER_CHANGE_TRIGGER,
        function (event, data) {
          activeList.changePresenter(data.newPresenter, data.oldPresenter);
        }
      );
      activeList.watch("userList.length", (newValue, oldValue) => {
        if (newValue !== 0) {
          this.noOneSpeaking = false;
        } else {
          this.noOneSpeaking = true;
        }
      });
      BJY.ApplyList.create({
        element: $(".bjy-apply-list .placeholder"), // 组件父容器
        replace: false, // 是否替换父容器下的 DOM
      });
    }




    // store.set("user.videoOn", false)
    // store.set("user.audioOn", false)
    // activeList.addUser(this.student)
    //   // activeList.addUser(store.get("user"))
    //   activeList.switchVideo(activeList.userList[0])
    //   console.log('wwwwwwwwww', store.get("user.videoOn"));
      // eventEmitter.trigger(eventEmitter.UPDATE_USER_LAYER_TRIGGER, {user: store.get("user") })
      // eventEmitter.trigger(eventEmitter.SET_USER_MIC_TRIGGER, {on: !store.get("user").video_state, number: store.get("user").number})






  },
};
</script>

<style lang="scss">
//@import url(); 引入公共css类
#active {
  height: 100%;
  width: 100%;
  .live-self-player {
    height: 200px;
    width: 266px;
    position: absolute;
    top: 0;
    transition: 0.2s bottom;
  }
}
</style>
