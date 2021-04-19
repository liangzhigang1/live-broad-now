<template>
  <div>
    <video v-show="isShow" controls="controls"></video>
    <el-progress v-if="isShowMai" :text-inside="true" :stroke-width="26" :percentage="percentage"></el-progress>
    <audio></audio>
  </div>
</template>

<script>
  import Recorder from 'js-audio-recorder'
  const lamejs = require('lamejs')
  export default {
    name: 'home',
    props: {
      isShowMai: {
        type: Boolean,
        default: false
      },
    },
    watch: {
      isShowMai (val) {
        console.log('2222222', val);
        if (val) {
          this.startRecorder()
          const video = document.querySelector('video');
          // if (navigator.mediaDevices) {
          //     navigator.mediaDevices.getUserMedia ({audio: true, video: true})
          //     .then(function(stream) {
          //         video.srcObject = stream;
          //         video.onloadedmetadata = function(e) {
          //             video.play();
          //             video.muted = true;
          //         };
          //         const audioCtx = new AudioContext();
          //         const source = audioCtx.createMediaStreamSource(stream);
          //         const biquadFilter = audioCtx.createBiquadFilter();

          //         console.log('audioCtx', audioCtx);
          //         console.log('source', source);
          //         console.log('biquadFilter', biquadFilter);
          //         // biquadFilter.type = "lowshelf";
          //         // biquadFilter.frequency.value = 1000;
          //         // biquadFilter.gain.value = 1;
                  
          //         source.connect(biquadFilter);
          //         biquadFilter.connect(audioCtx.destination);
          //     })
          //     .catch(function(err) {
          //         console.log('The following gUM error occured: ' + err);
          //     });
          // } else {
          //     console.log('getUserMedia not supported on your browser!');
          // }
        } else {
          this.stopRecorder()
          // const audioCtx = new AudioContext();
          // audioCtx.close()
          // const video = document.querySelector('video');
          // if (navigator.mediaDevices) {
          //     navigator.mediaDevices.getUserMedia ({audio: false, video: false})
          //     .then(function(stream) {
          //         video.srcObject = stream;
          //         video.onloadedmetadata = function(e) {
          //             video.play();
          //             video.muted = true;
          //         };
          //         const audioCtx = new AudioContext();
          //         const source = audioCtx.createMediaStreamSource(stream);
          //         const biquadFilter = audioCtx.createBiquadFilter();

          //         console.log('audioCtx', audioCtx);
          //         console.log('source', source);
          //         console.log('biquadFilter', biquadFilter);
          //         // biquadFilter.type = "lowshelf";
          //         // biquadFilter.frequency.value = 1000;
          //         // biquadFilter.gain.value = 1;
                  
          //         source.connect(biquadFilter);
          //         biquadFilter.connect(audioCtx.destination);
          //     })
          //     .catch(function(err) {
          //         console.log('The following gUM error occured: ' + err);
          //     });
          // } else {
          //     const video = document.querySelector('video');
          //     video.stop();
          //     video.muted = false;
          //     console.log('getUserMedia not supported on your browser!');
          // }
        }
      }
    },
    data () {
      return {
        isShow: false,
        percentage: 0,
        recorder: null,
      }
    },
    methods: {
      /**
       *  录音的具体操作功能
       * */
      // 开始录音
      startRecorder () {
        this.recorder.start()
      },
      // 继续录音
      resumeRecorder () {
        this.recorder.resume()
      },
      // 暂停录音
      pauseRecorder () {
        this.recorder.pause();
      },
      // 结束录音
      stopRecorder () {
        this.recorder.stop()
      },
      // 录音播放
      playRecorder () {
        this.recorder.play()
      },
      // 暂停录音播放
      pausePlayRecorder () {
        this.recorder.pausePlay()
      },
      // 恢复录音播放
      resumePlayRecorder () {
        this.recorder.resumePlay()
      },
      // 停止录音播放
      stopPlayRecorder () {
        thisr.ecorder.stopPlay();
      },
      // 销毁录音
      destroyRecorder () {
        var _this = this
        this.recorder.destroy().then(function() {
          _this.recorder = null;
        });
      },
      /**
       *  获取录音文件
       * */
      getRecorder(){
        let toltime = this.recorder.duration;//录音总时长
        let fileSize = this.recorder.fileSize;//录音总大小
        //录音结束，获取取录音数据
        let PCMBlob = this.recorder.getPCMBlob();//获取 PCM 数据
        let wav = this.recorder.getWAVBlob();//获取 WAV 数据
        let channel = this.recorder.getChannelData();//获取左声道和右声道音频数据
      },
      /**
       *  下载录音文件
       * */
      //下载pcm
      downPCM(){
        //这里传参进去的时文件名
        this.recorder.downloadPCM('新文件');
      },
      //下载wav
      downWAV(){
        //这里传参进去的时文件名
        this.recorder.downloadWAV('新文件');
      },
      /**
       *  获取麦克风权限
       * */
      getPermission(){
        Recorder.getPermission().then(() => {
          alert('获取权限成功')
        }, (error) => {
          console.log(`${error.name} : ${error.message}`);
        });
      },
      /**
       * 文件格式转换 wav-map3
       * */
      getMp3Data(){
        const mp3Blob = this.convertToMp3(this.recorder.getWAV());
        console.log('mp3Blobmp3Blob', mp3Blob);
        this.recorder.download(mp3Blob, 'recorder', 'mp3');
      },
      convertToMp3(wavDataView) {
        // 获取wav头信息
        const wav = lamejs.WavHeader.readHeader(wavDataView); // 此处其实可以不用去读wav头信息，毕竟有对应的config配置
        const { channels, sampleRate } = wav;
        const mp3enc = new lamejs.Mp3Encoder(channels, sampleRate, 128);
        // 获取左右通道数据
        console.log('dsadas', this.recorder);
        const result = this.recorder.getChannelData()
        const buffer = [];

        const leftData = result.left && new Int16Array(result.left.buffer, 0, result.left.byteLength / 2);
        const rightData = result.right && new Int16Array(result.right.buffer, 0, result.right.byteLength / 2);
        const remaining = leftData.length + (rightData ? rightData.length : 0);

        const maxSamples = 1152;
        for (let i = 0; i < remaining; i += maxSamples) {
          const left = leftData.subarray(i, i + maxSamples);
          let right = null;
          let mp3buf = null;

          if (channels === 2) {
            right = rightData.subarray(i, i + maxSamples);
            mp3buf = mp3enc.encodeBuffer(left, right);
          } else {
            mp3buf = mp3enc.encodeBuffer(left);
          }

          if (mp3buf.length > 0) {
            buffer.push(mp3buf);
          }
        }
        const enc = mp3enc.flush();
        if (enc.length > 0) {
          buffer.push(enc);
        }
        return new Blob(buffer, { type: 'audio/mp3' });
      },
    },
    mounted () {
      var _this = this
      this.recorder = new Recorder({
        sampleBits: 16,                 // 采样位数，支持 8 或 16，默认是16
        sampleRate: 48000,              // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
        numChannels: 1,                 // 声道，支持 1 或 2， 默认是1
        compiling: true,  // 是否边录边转换，默认是false(0.x版本中生效,1.x增加中)
      })
      // 绑定事件-打印的是当前录音数据
      this.recorder.onprogress = function(params) {
        // console.log(params)
        // console.log('--------------START---------------')
        // console.log('录音时长(秒)', params.duration);
        // console.log('录音大小(字节)', params.fileSize);
        // console.log('录音音量百分比(%)', params.vol);
        _this.percentage = parseInt(params.vol)
        // console.log('当前录音的总数据([DataView, DataView...])', params.data);
        // console.log('--------------END---------------')
      }
    }

  }
</script>

<style lang='less' scoped>

</style>