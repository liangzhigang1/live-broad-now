<!-- 跑马灯组件，此组件不需要预置dom，只需在创建的时候指定挂载dom（即要在哪个dom里面跑） -->
<template>
  <div :style="{width: show ? '160px' : '0px'}" class="bjy-sidebar" :class="{ 'bjy-active': show }">
    <div @click="show = !show" class="bjy-toggle-btn"><span style="color: #fff;font-size: 8px;text-align: center;" class="icon iconfont">{{show?'&#xeca5;':'&#xeca6;'}}</span>文档列表</div>
    <div class="bjy-doc-list"></div>
    <div class="upload-doc" v-show="show">
      <el-button icon="el-icon-folder-opened" @click="showKeJian">课件上传</el-button>
    </div>
    <doc-manage ref="docManage"></doc-manage>
  </div>
</template>

<script>
import DocManage from './DocManage'
let store = BJY.store;
import language from "../../language/main";
import {  _deleteDocApi } from '../../api/doc/docApi'

export default {
  components: {
    DocManage,
    language
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    showKeJian () {
      if (!store.get("class.started")) {
          // 针对教室状态给出相应的提示，你可以使用任何你喜欢的UI来处理他们，这里我使用的是自定义的全局tip，下同
          this.$Toast(language.TIP_CLASS_NOT_START);
          return;
        }
      this.$refs.docManage.open()
    }
  },
  mounted() {
    var _this = this
    var xx = BJY.Catalogue.create({
      element: $(".bjy-doc-list"),
      thumbnailWidth: 100,
      // hasWhiteboard: true,
    });
    store.set("class.catalogue", xx);

    setTimeout(() => {
      // var dom = document.createTextNode(`<span style="font-size: 16px;margin-right:6px" class="iconfont">&#xe609;</span>`);
      var odivs = document.getElementsByClassName("bjy-file")
      console.log(odivs)
      for(let i = 0; i < odivs.length; i++) {
        console.log('odivs[i]', odivs[i]);
        // odivs[i].innerHTML = ''; 
        // odivs[i].appendChild(dom);
        var zif = "x";
        var obj = document.createElement("p"); //添加哪类节点
        obj.style.position = "absolute";
        obj.style.right = "25px";
        obj.style.top = "-18px";
        obj.style.fontSize = "20px";
        obj.style.cursor = "pointer";
        obj.onclick = function(e) {
          _this.$confirm('确定删除吗？', "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            let xx = `fid=${Number(e.target.parentNode.attributes[1].value)}&partner_id=83228320&room_id=${store.get('class.id')}&timestamp=1615996149&partner_key=dBn3oMMrE68/kijw20wg6JGHWGUcUkwh2Fi57N9r26v4R3QbWYQ66/IUchj/pyzlKM9l1WjgNEnLqCWFc2Lzvtp6xhlI`
            let sign = _this.$md5(xx)
            let params = { partner_id: 83228320, room_id: store.get('class.id'), fid: e.target.parentNode.attributes[1].value, timestamp: 1615996149, sign: sign}
            _deleteDocApi(params).then((response) => {
              console.log('response' , response);
            })
          })
        }
        var objNode = document.createTextNode(zif); //创建文字节点
        odivs[i].appendChild(obj);
        obj.appendChild(objNode);

      }
    // document.getElementsByClassName("bjy-file ")[0].appendChild(dom);

      // odivs = Array.prototype.slice.call(odivs);
      // var odivs1=[].slice.call(odivs);
      // console.log(odivs)
      // console.log(odivs1)
    }, 1000)
    


  },
};
</script>

<style lang="scss" scoped>
.bjy-sidebar {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  left: 0;
  // width: 160px;
  background: #fff;
  // box-shadow: 5px -5px 5px 5px #aaa;
  
  &.bjy-active {
    left: -160px;
  }

  .bjy-toggle-btn {
    position: absolute;
    left: -24px;
    top: 100px;
    word-break: break-all;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 0;
    text-align: center;
    width: 24px;
    height: 120px;
    background: #2D3342;
    border-radius: 4px 0px 0px 4px;

    color: #fff;
    // z-index: 99999 !important;
    // border: 1px solid #4a4a4a;
    cursor: pointer;
  }
  .upload-doc {
    position: absolute;
    left: 16px;
    bottom: 20px;
    text-align: center;
    color: #fff;
    .el-button {
      padding: 9px 24px !important;
      background: linear-gradient(#0E98D7,#027CB5);
      border: 1px solid #27AEED;
      color: #fff;
    }
  }
}
</style>
<style lang="scss">
  .bjy-catalogue .bjy-image {
    background-color: transparent;
    border-color: #7F8B9D;
  }
</style>