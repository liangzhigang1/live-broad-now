<!-- 小测组件 -->
<template>
  <div v-show="visible" id="media-player" >
  </div>
</template>

<script>
const eventEmitter = BJY.eventEmitter;
const auth = BJY.auth;

export default {
  data() {
    return {
      visible: false,
      isTeacher: auth.isTeacher(),
      mediaPlayer: null
    };
  },
  methods: {
    open () {
        this.visible = true;
        if (!this.mediaPlayer) {
            this.mediaPlayer = BJY.NewMediaPlayer.create({
                element: $('#media-player'),
                volume: 100,
                // 是否可以拖动，默认为false
                draggale: true,
                // 可拖动区域的选择符，默认为Body元素
                draggableRectSelector: 'body',
                replace: false,
                onCloseButtonClick: () => {
                    this.close()
                },
                onMinimizeButtonClick: () => {
                    this.visible = false;
                },
                onPlayFileFail: function () {
                    alert('打开文件失败');
                }
            });
        setTimeout(() => {
          console.log('111122222222111', this.mediaPlayer)
          this.mediaPlayer.pushVideoStream = true
          this.mediaPlayer.needUseVideoFrame = true
          this.mediaPlayer.isServerMediaPlayMode = true

          
        }, 2000);
        }
    },
    close () {
        this.visible = false;
        this.mediaPlayer = null;
    }
  },
  created() {
    
  },
  mounted() {
    eventEmitter.on('toggle_media_player', () => {
      this.open()
      // this.mediaPlayer ? this.close() : this.open()
    })
  },
  beforeDestroy() {},
};
</script>

<style lang="scss">
#media-player {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .bjy-new-media-player {
      border: 1px solid #6E7583;
      .bjy-header, .bjy-list.bjy-empty .bjy-info {
        color: #fff;
      }
      .bjy-button {
        background: linear-gradient(#0E98D7, #027CB5);
        border: 1px solid #27AEED;
      }
      .bjy-header {
        border-bottom: none;
        .bjy-minimize {
          background-position: -194px -64px;
        }
        .bjy-close {
          background-position: -194px -42px;
        }
      }
      .bjy-footer {
        background-color: #1E2430;
        .bjy-player-volume-slider,.bjy-loop-layer {
          background-color: #1E2430;
          color: #fff;
          outline: none;
        }
        .bjy-item:hover {
          background-color: #000;
          color: #fff;
        }
      }
    }
}
</style>
