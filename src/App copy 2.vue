<template>
  <div id="app">
    <Button type="success" @click="getPermission()" style="margin:1vw;">获取麦克风权限</Button>
    <br/>
    <Button type="info" @click="startRecorder()"  style="margin:1vw;">开始录音</Button>
    <Button type="info" @click="resumeRecorder()" style="margin:1vw;">继续录音</Button>
    <Button type="info" @click="pauseRecorder()" style="margin:1vw;">暂停录音</Button>
    <Button type="info" @click="stopRecorder()" style="margin:1vw;">结束录音</Button>
    <br/>
    <Button type="success" @click="playRecorder()" style="margin:1vw;">录音播放</Button>
    <Button type="success" @click="pausePlayRecorder()" style="margin:1vw;">暂停录音播放</Button>
    <Button type="success" @click="resumePlayRecorder()" style="margin:1vw;">恢复录音播放</Button>
    <Button type="success" @click="stopPlayRecorder()" style="margin:1vw;">停止录音播放</Button>
    <br/>
    <Button type="info" @click="getRecorder()" style="margin:1vw;">获取录音信息</Button>
    <Button type="info" @click="downPCM()" style="margin:1vw;">下载PCM</Button>
    <Button type="info" @click="downWAV()" style="margin:1vw;">下载WAV</Button>
    <Button type="info" @click="getMp3Data()" style="margin:1vw;">下载MP3</Button>
    <br/>
    <Button type="error" @click="destroyRecorder()" style="margin:1vw;">销毁录音</Button>
  </div>
</template>

<script>

  export default {
    name: 'home',
    methods: {
      /**
       *  录音的具体操作功能
       * */
      // 开始录音
      startRecorder () {
        recorder.start().then(() => {

        }, (error) => {
          // 出错了
          console.log(`${error.name} : ${error.message}`);
        });
      },
      // 继续录音
      resumeRecorder () {
        recorder.resume()
      },
      // 暂停录音
      pauseRecorder () {
        recorder.pause();
      },
      // 结束录音
      stopRecorder () {
        recorder.stop()
      },
      // 录音播放
      playRecorder () {
        recorder.play()
      },
      // 暂停录音播放
      pausePlayRecorder () {
        recorder.pausePlay()
      },
      // 恢复录音播放
      resumePlayRecorder () {
        recorder.resumePlay()
      },
      // 停止录音播放
      stopPlayRecorder () {
        recorder.stopPlay();
      },
      // 销毁录音
      destroyRecorder () {
        recorder.destroy().then(function() {
          recorder = null;
        });
      },
      /**
       *  获取录音文件
       * */
      getRecorder(){
        let toltime = recorder.duration;//录音总时长
        let fileSize = recorder.fileSize;//录音总大小
        //录音结束，获取取录音数据
        let PCMBlob = recorder.getPCMBlob();//获取 PCM 数据
        let wav = recorder.getWAVBlob();//获取 WAV 数据
        let channel = recorder.getChannelData();//获取左声道和右声道音频数据
      },
      /**
       *  下载录音文件
       * */
      //下载pcm
      downPCM(){
        //这里传参进去的时文件名
        recorder.downloadPCM('新文件');
      },
      //下载wav
      downWAV(){
        //这里传参进去的时文件名
        recorder.downloadWAV('新文件');
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
        const mp3Blob = this.convertToMp3(recorder.getWAV());
        console.log('mp3Blobmp3Blob', mp3Blob);
        recorder.download(mp3Blob, 'recorder', 'mp3');
      },
      convertToMp3(wavDataView) {
        // 获取wav头信息
        const wav = lamejs.WavHeader.readHeader(wavDataView); // 此处其实可以不用去读wav头信息，毕竟有对应的config配置
        const { channels, sampleRate } = wav;
        const mp3enc = new lamejs.Mp3Encoder(channels, sampleRate, 128);
        // 获取左右通道数据
        console.log('dsadas', recorder);
        const result = recorder.getChannelData()
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
      }

    },

  }
</script>

<style lang='less' scoped>

</style>