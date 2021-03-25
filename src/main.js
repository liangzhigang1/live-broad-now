import Vue from 'vue'
import App from './App.vue'

import Dialog from './components/common/Dialog/dialog.js'
import Toast from './components/common/Toast/toast.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/css/swiper.css";
import 'swiper/swiper.scss'

Vue.use(VueAwesomeSwiper)

Vue.use(ElementUI)
Vue.use(Dialog)
Vue.use(Toast)

import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

import AudioPlayer from '@liripeng/vue-audio-player'
import '@liripeng/vue-audio-player/lib/vue-audio-player.css'
Vue.use(AudioPlayer)

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
