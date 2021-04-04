<template>
<div>
<div id="setting">
    <CameraMenu />
    <MicMenu />
    <SpeakerMenu />
    <div>
      <span @click="toggleSetting" style="cursor: pointer;padding-left: 10px;color: #919BA9;font-size: 20px;margin-left:6px;border-left: 1px solid #353C48" class="iconfont">&#xe60d;</span>
    </div>
    <div>
      <span style="cursor: pointer;padding-right: 10px;color: #919BA9;font-size: 20px;margin-left:10px;border-right: 1px solid #353C48" class="iconfont">&#xe627;</span>
    </div>
  </div>
    <Setting />
</div>
  
</template>

<script>
import MicMenu from "./MicMenu";
import SpeakerMenu from "./SpeakerMenu";
import CameraMenu from "./CameraMenu";
import Setting from "./Setting";
let eventEmitter = BJY.eventEmitter;

export default {
  components: {
    MicMenu,
    SpeakerMenu,
    CameraMenu,
    Setting
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    toggleSetting() {
      eventEmitter.trigger("toggle_setting_dialog");
    },
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
//@import url(); 引入公共css类
#setting {
  display: flex;
  align-items: center;
}
</style>
