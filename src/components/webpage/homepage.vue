<template>
  <div class="H_background">
    <div class="H_outer_lable">
      <img class="H_inner_lable" src="../../assets/webpage/homepage/home.png">
    </div>
    <div class="H_message1">南方海洋科学与工程广东实验室</div>
    <div class="H_message2">（湛江湾）</div>

    <div class="H_photograph">
      <div class="H_message4">
        <el-button type="primary" class="H_btn" icon="el-icon-search">拍照识鱼</el-button>
        <input ref="pictureref1" type="file" accept="image/*" @change="ImageToBase641()" capture="camera"
          class="file-upload-input1" />
      </div>

      <div class="H_message3">
        <div>上传图片></div>
        <input type="file" ref="pictureref2" @change="ImageToBase642()" class="file-upload-input2">
      </div>
    </div>

  </div>
</template>

<script>
  import Bus from '@/socket/bus'
  import {
    newWebsocket
  } from '@/socket/index'
  import axios from 'axios'
  import {
    Loading
  } from 'element-ui'


  export default {

    created() {
      newWebsocket()
    },
    data() {
      return {
        fishdata: null
      }
    },

    methods: {
      //将图片转base64
      FileReader(files) {
        var reader = new FileReader()
        reader.readAsDataURL(files)
        return new Promise(resolve => reader.onloadend = () => resolve(reader.result))
      },

      //(拍照)
      async ImageToBase641() {
        let file = this.$refs.pictureref1.files[0]
        let imagebase = await this.FileReader(file)
        this.$store.dispatch('passimgSrc', imagebase)
        var imagebase1 = imagebase.replace(/data.+?;base64,/, "");
        var formData = new FormData();
        formData.append('sign', '9');
        formData.append('img-type', "jpg");
        formData.append('img', imagebase1);
        var objData = {};
        formData.forEach((value, key) => objData[key] = value);
        var imagebase2 = JSON.stringify(objData);
        //传值后台
        const rLoading = this.openLoading();
        window.onsetmessage(imagebase2)
        Bus.$on('message', res => {
          if (res.data == "heartbeat") {} else {
            let data = res.data
            this.fishdata = JSON.parse(data)
            this.seekfish()
          }
        })
      },
      //(上传图片)
      async ImageToBase642() {
        let file = this.$refs.pictureref2.files[0]
        let imagebase = await this.FileReader(file)
        this.$store.dispatch('passimgSrc', imagebase)
        var imagebase1 = imagebase.replace(/data.+?;base64,/, "");
        // console.log(imagebase1,'123')
        var formData = new FormData();
        formData.append('sign', '9');
        formData.append('img-type', "jpg");
        formData.append('img', imagebase1);
        var objData = {};
        formData.forEach((value, key) => objData[key] = value);
        var imagebase2 = JSON.stringify(objData);
        //传值后台
        const rLoading = this.openLoading();

        window.onsetmessage(imagebase2)
        Bus.$on('message', res => {
          if (res.data == "heartbeat") {} else {
            let data = res.data
            this.fishdata = JSON.parse(data)
            this.seekfish()
          }
        })
      },
      //刷选数据，获得结果
      seekfish() {
        if (this.fishdata && this.fishdata.data && this.fishdata.data.err_message) {
          var msg = null
          try {
            msg = JSON.parse(this.fishdata.data.err_message)
          } catch (e) {
            msg = null
          }
          if (msg && msg.ke) {
            this.fishdata = msg
            window.onbeforeunload()
          } else {
            this.fishdata = '识别失败！'
            window.onbeforeunload()
          }
          //将识别结果传到vuex
          console.log(this.fishdata, "识别结果")
          const rLoading = this.closeLoading();
          this.$store.dispatch('passresult', this.fishdata.ke)
          // console.log(fishdata1,'数据表')
          this.$router.push('/Identification')
        }
      },
    }

  }

</script>

<style>
  .H_background {
    display: inline;
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: 100% 100%;
  }

  .H_outer_lable {
    height: 30vh !important;
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 150px;
    text-align: center;
  }

  .H_inner_lable {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    /* top:8%; */
    margin: auto;
    height: 100px;
    width: 100px;

  }

  .H_message1 {
    height: 5vh !important;
    font-size: 15px !important;
    color: rgb(255, 255, 255);
    text-align: center;
    margin-top: 1%;
    margin-left: 20%;
    width: 60%;
    font-weight: bolder;
  }

  .H_message2 {
    height: 5vh !important;
    font-size: 14px !important;
    color: rgb(255, 255, 255);
    text-align: center;
    margin-left: 20%;
    width: 60%;

  }

  .H_message3 {
    overflow: hidden;
    border: none;
    display: inline-block;
    font-size: 14px !important;
    color: rgb(255, 255, 255);
    text-align: center;
    width: 40%;
    font-weight: bolder;
    position: absolute;
    left: 50%;
    top: 86%;
    transform: translate(-50%, -50%);
  }

  .H_message4 {
    overflow: hidden;
    border: none;
    display: inline-block;
    font-size: 14px !important;
    color: rgb(255, 255, 255);
    text-align: center;
    width: 40%;
    font-weight: bolder;
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -50%);
  }

  .file-upload-input1 {
    outline: none;
    border: none;
    background-color: transparent;
    position: absolute;
    width: 9999px;
    height: 999px;
    right: -100px;
    cursor: pointer;
  }

  .file-upload-input2 {
    outline: none;
    border: none;
    background-color: transparent;
    position: absolute;
    width: 9999px;
    height: 999px;
    top: 3px;
    right: -100px;
    cursor: pointer;
  }

  .H_btn {
    border: 0px;
    background: -webkit-linear-gradient(left, #2c2cd6, #2154FA);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #0c0cebf5, #2154FA);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #0000d3ee, #2154FA);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #0000db, #2154FA);
    /* 标准的语法 */
    filter: brightness(1.3);
  }

  .H_photograph {
    height: 30vh !important;
  }



  .uploadbtn {
    outline: none;
    font-size: 13px;
    color: #fff;
    text-align: center;
    border: none;
    cursor: pointer;
    background-color: Transparent;
    outline: none;
  }

</style>
