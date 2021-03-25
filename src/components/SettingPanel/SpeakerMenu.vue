<template>
  <div id="menu-speaker"></div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    // 创建扬声器菜单
    BJY.SpeakerMenu.create({
      element: $("#menu-speaker"),
      canAdjustVolume: true,
      maxVolume: 100,
    });
  },
  beforeDestroy() {},
};
</script>

<style lang="scss">
//@import url(); 引入公共css类
.bjy-volume-slider {
  background-color: #313847 !important;
  background-image: none !important;
  border: 1px solid #3C4353;
  opacity: 0.9;
}
</style>
