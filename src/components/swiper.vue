 <template>
  <div style="position: relative;width: 100%" class="swiper-container1">
    <div style="position:relative" class="right-left-base-info-content">
            <swiper ref="mySwipe1r" :options="swiperOptions">
              <swiper-slide v-for="(item, index) in workLists" :key="index">
                <div @click="showWork(item)" style="height: 146px;width: 100%">
                  <span v-if="item.type == 'png'">
                    <!-- <span style="color: red;font-size: 25px">照片</span> -->
                    <img style="width: 100%;height: 100%;object-fit: cover;" :src="item.src" />
                  </span>
                   <span v-if="item.type == 'jpg'">
                    <!-- <span style="color: red;font-size: 25px">照片</span> -->
                    <img style="width: 100%;height: 100%;object-fit: cover;" :src="item.src" />
                  </span>
                  <span v-if="item.type == 'mp3'">
                    <!-- <span style="color: red;font-size: 25px">mp3</span> -->
                    <img style="width: 100%;height: 100%;object-fit: cover;" src="../assets/img/WechatIMG94.jpeg" />
                  </span>
                  <span v-if="item.type == 'mp4'">
                    <el-upload 
                               style="position:relative"
                               action="#"
                               ref="uploadVideo"
                               :limit="1"
                               :file-list="item.videoFiles"
                               class="uploadVideo disabled1"
                               accept="video/mp4,video/ogg,video/flv,video/avi,video/wmv,video/rmvb"
                               list-type="picture-card">
              <i slot="default" class="el-icon-plus"></i>
            </el-upload>
                  </span>
                </div>
              </swiper-slide>
              
            </swiper>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/swiper-bundle.css";
import 'swiper/swiper.scss'

export default {
  name: "PortalSetting",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    workList: {
      type: Array,
    }
  },
  watch: {
    workList: {
      handler(newName, oldName) {
        this.workLists = newName.map(item => {
          return { type: item.type, src: item.src, videoFiles: [{ url: item.src, name: "mediaUrl" }] }
        })
        setTimeout(() => {
          var parent = document.querySelectorAll(".uploadVideo ul li");
          console.error('parentparentparent', parent);
          for (let i = 0; i < parent.length; i++) {
            if (parent[i].querySelector("img")) {
              var video = parent[i].querySelector("img");
              var newVideo = document.createElement("video");
              newVideo.src = video.src;
              newVideo.class = "el-upload-list__item-thumbnail";
              newVideo.style = "width:100%;height:100%;";
              parent[i].appendChild(newVideo);
              parent[i].removeChild(video);
            }
          }
        }, 2000);
      },
      immediate: true
    }
  },
  data() {
    return {
      videoFiles: [],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        },
        // 如果需要滚动条
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        watchSlidesProgress: true,
        grabCursor: true,
        parallax: true,
        uniqueNavElements: false,
        // slidesPerView: 'auto',
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        observer: true,
        //  on: {
        //   resize: function(){
        //     this.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
        //   }, 
        // },
        breakpoints: {
          768: {
            //当屏幕宽度大于等于320
            slidesPerView: 7,
            spaceBetween: 10
          },
          1080: {
            //当屏幕宽度大于等于768
            slidesPerView: 7,
            spaceBetween: 10
          },
          1280: {
            //当屏幕宽度大于等于320
            slidesPerView: 5,
            spaceBetween: 10
          },
          1570: {
            //当屏幕宽度大于等于768
            slidesPerView: 5,
            spaceBetween: 10
          },
          1864: {
            //当屏幕宽度大于等于1280
            slidesPerView: 7,
            spaceBetween: 10
          }
        }
      },
      workLists: []
    };
  },
  methods: {
    cosUploadFileVideo() {
    },
    handlePictureCardPreviewVidoe() {
    },
    handleVdieoRemove() {
    },
    exceedVideo() {
    },
    showWork (item) {
      console.log('11111', item);
      this.$emit('swiperClick', item)
    }
  }
};
</script>
<style lang="scss" >
.swiper-container1 {

  .el-upload-list__item {
    width: 100% !important;
    height: 146px !important;
    border: 0px !important;
  }
  .el-upload-list__item-delete {
    display: none !important;
  }
}


.disabled1 .el-upload--picture-card {
  display: none !important;
}
.disabled1 .el-upload-list__item {
  background-image: none;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.el-upload-list--picture-card .el-upload-list__item-actions:hover span {
  display: inline-block;
}
.el-upload-list--picture-card .el-upload-list__item-actions {
  z-index: 1000 !important;
}
.el-progress-circle {
  height: 147px !important;
  width: 147px !important;
}
.el-upload--picture-card {
  width: 300px;
}
.swiper-button-prev {
  padding: 73px 5px;
  top: 15% !important;
  left: 0 !important;
  width: 50px !important;
  background: #000000;
  opacity: 0.5 !important;
  z-index: 1000 !important;
  border: 0px !important;
  outline: none;
}
.swiper-button-prev:after {
  font-size: 20px !important;
  color: #fff;
  // opacity: 1;
  font-weight: bold;
  border: 0px !important;
}
.swiper-button-next {
  padding: 73px 5px;
  top: 15% !important;
  right: 0 !important;
  width: 50px !important;
  background: #000000;
  opacity: 0.5;
  z-index: 1000 !important;
  outline: none;
}
.swiper-button-next:after {
  font-size: 20px !important;
  color: #fff;
  // opacity: 1;
  font-weight: bold;
}
</style>
