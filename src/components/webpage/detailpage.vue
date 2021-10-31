<template>
  <div class="D">
    <div class="D_back">
      <el-button class="D_backbtn" icon="el-icon-arrow-left" @click="backtohome()">返回</el-button>
    </div>

    <div class="D_background">
      <div class="D_img"><img class="img" :src="imgurl"></div>

      <div class="D_information1" v-text="name"></div>
      <div class="D_information2" v-text="information1"></div>
      <div class="D_font">形态特征</div>
      <div class="D_information3" v-text="information2"></div>
      <div class="D_font">地理分布</div>
      <div class="D_information3" v-text="information3"></div>
      <div class="D_font">栖所生态</div>
      <div class="D_information3" v-text="information4"></div>

    </div>


  </div>
</template>
<script>
  import fishdata1 from '../../assets/js/data.js'
  export default {

    computed: {
      result: function () {
        return this.$store.getters.getresult;
      },

    },
    mounted() {
      this.comparefish()
    },

    data() {
      return {
        imgurl: '',
        name: '',
        information1: '',
        information2: '',
        information3: '',
        information4: '',
      }
    },

    methods: {
      backtohome() {
        this.$router.push('/Identification')
      },

      comparefish() {
        switch (this.result) {
          case "fish0 ":
            this.imgurl = fishdata1.data[1].img
            this.name = fishdata1.data[1].name //名字
            this.information1 = fishdata1.data[1].info4 + '·' + fishdata1.data[1].info5 + '·' + fishdata1.data[1]
              .info6 //门纲目
            this.information2 = fishdata1.data[1].info2 //形态特征
            this.information3 = fishdata1.data[1].info1 //地理分布
            this.information4 = fishdata1.data[1].info3 //栖所生态
            break
          case "fish1 ":
            this.imgurl = fishdata1.data[2].img
            this.name = fishdata1.data[2].name //名字
            this.information1 = fishdata1.data[2].info4 + '·' + fishdata1.data[2].info5 + '·' + fishdata1.data[2]
              .info6 //门纲目
            this.information2 = fishdata1.data[2].info2 //形态特征
            this.information3 = fishdata1.data[2].info1 //地理分布
            this.information4 = fishdata1.data[2].info3 //栖所生态
            break
          case "fish2 ":
            this.imgurl = fishdata1.data[3].img
            this.name = fishdata1.data[3].name //名字
            this.information1 = fishdata1.data[3].info4 + '·' + fishdata1.data[3].info5 + '·' + fishdata1.data[3]
              .info6 //门纲目
            this.information2 = fishdata1.data[3].info2 //形态特征
            this.information3 = fishdata1.data[3].info1 //地理分布
            this.information4 = fishdata1.data[3].info3 //栖所生态
            break
          case "fish3 ":
            this.imgurl = fishdata1.data[4].img
            this.name = fishdata1.data[4].name //名字
            this.information1 = fishdata1.data[4].info4 + '·' + fishdata1.data[4].info5 + '·' + fishdata1.data[4]
              .info6 //门纲目
            this.information2 = fishdata1.data[4].info2 //形态特征
            this.information3 = fishdata1.data[4].info1 //地理分布
            this.information4 = fishdata1.data[4].info3 //栖所生态
            break
          case "fish4 ":
            this.imgurl = fishdata1.data[5].img
            this.name = fishdata1.data[5].name //名字
            this.information1 = fishdata1.data[5].info4 + '·' + fishdata1.data[5].info5 + '·' + fishdata1.data[5]
              .info6 //门纲目
            this.information2 = fishdata1.data[5].info2 //形态特征
            this.information3 = fishdata1.data[5].info1 //地理分布
            this.information4 = fishdata1.data[5].info3 //栖所生态
            break
          case "fish5 ":
            this.imgurl = fishdata1.data[6].img
            this.name = fishdata1.data[6].name //名字
            this.information1 = fishdata1.data[6].info4 + '·' + fishdata1.data[6].info5 + '·' + fishdata1.data[6]
              .info6 //门纲目
            this.information2 = fishdata1.data[6].info2 //形态特征
            this.information3 = fishdata1.data[6].info1 //地理分布
            this.information4 = fishdata1.data[6].info3 //栖所生态
            break
          case "fish6 ":
            this.imgurl = fishdata1.data[7].img
            this.name = fishdata1.data[7].name //名字
            this.information1 = fishdata1.data[7].info4 + '·' + fishdata1.data[7].info5 + '·' + fishdata1.data[7]
              .info6 //门纲目
            this.information2 = fishdata1.data[7].info2 //形态特征
            this.information3 = fishdata1.data[7].info1 //地理分布
            this.information4 = fishdata1.data[7].info3 //栖所生态
            break
          case "fish7 ":
            this.imgurl = fishdata1.data[8].img
            this.name = fishdata1.data[8].name //名字
            this.information1 = fishdata1.data[8].info4 + '·' + fishdata1.data[8].info5 + '·' + fishdata1.data[8]
              .info6 //门纲目
            this.information2 = fishdata1.data[8].info2 //形态特征
            this.information3 = fishdata1.data[8].info1 //地理分布
            this.information4 = fishdata1.data[8].info3 //栖所生态
            break
          case "fish8 ":
            this.imgurl = fishdata1.data[9].img
            this.name = fishdata1.data[9].name //名字
            this.information1 = fishdata1.data[9].info4 + '·' + fishdata1.data[9].info5 + '·' + fishdata1.data[9]
              .info6 //门纲目
            this.information2 = fishdata1.data[9].info2 //形态特征
            this.information3 = fishdata1.data[9].info1 //地理分布
            this.information4 = fishdata1.data[9].info3 //栖所生态
            break
          case "fish9 ":
            this.imgurl = fishdata1.data[10].img
            this.name = fishdata1.data[10].name //名字
            this.information1 = fishdata1.data[10].info4 + '·' + fishdata1.data[10].info5 + '·' + fishdata1.data[10]
              .info6 //门纲目
            this.information2 = fishdata1.data[10].info2 //形态特征
            this.information3 = fishdata1.data[10].info1 //地理分布
            this.information4 = fishdata1.data[10].info3 //栖所生态
            break
          case "fish10 ":
            this.imgurl = fishdata1.data[11].img
            this.name = fishdata1.data[11].name //名字
            this.information1 = fishdata1.data[11].info4 + '·' + fishdata1.data[11].info5 + '·' + fishdata1.data[11]
              .info6 //门纲目
            this.information2 = fishdata1.data[11].info2 //形态特征
            this.information3 = fishdata1.data[11].info1 //地理分布
            this.information4 = fishdata1.data[11].info3 //栖所生态
            break
          case "fish11 ":
            this.imgurl = fishdata1.data[12].img
            this.name = fishdata1.data[12].name //名字
            this.information1 = fishdata1.data[12].info4 + ' · ' + fishdata1.data[12].info5 + ' · ' + fishdata1.data[12]
              .info6 //门纲目
            this.information2 = fishdata1.data[12].info2 //形态特征
            this.information3 = fishdata1.data[12].info1 //地理分布
            this.information4 = fishdata1.data[12].info3 //栖所生态
            break
          case "fish12 ":
            this.imgurl = fishdata1.data[13].img
            this.name = fishdata1.data[13].name //名字
            this.information1 = fishdata1.data[13].info4 + '·' + fishdata1.data[13].info5 + '·' + fishdata1.data[13]
              .info6 //门纲目
            this.information2 = fishdata1.data[13].info2 //形态特征
            this.information3 = fishdata1.data[13].info1 //地理分布
            this.information4 = fishdata1.data[13].info3 //栖所生态
            break
          case "fish13 ":
            this.imgurl = fishdata1.data[14].img
            this.name = fishdata1.data[14].name //名字
            this.information1 = fishdata1.data[14].info4 + '·' + fishdata1.data[14].info5 + '·' + fishdata1.data[14]
              .info6 //门纲目
            this.information2 = fishdata1.data[14].info2 //形态特征
            this.information3 = fishdata1.data[14].info1 //地理分布
            this.information4 = fishdata1.data[14].info3 //栖所生态
            break
          case "fish14 ":
            this.imgurl = fishdata1.data[15].img
            this.name = fishdata1.data[15].name //名字
            this.information1 = fishdata1.data[15].info4 + '·' + fishdata1.data[15].info5 + '·' + fishdata1.data[15]
              .info6 //门纲目
            this.information2 = fishdata1.data[15].info2 //形态特征
            this.information3 = fishdata1.data[15].info1 //地理分布
            this.information4 = fishdata1.data[15].info3 //栖所生态
            break
          case "fish15 ":
            this.imgurl = fishdata1.data[16].img
            this.name = fishdata1.data[16].name //名字
            this.information1 = fishdata1.data[16].info4 + '·' + fishdata1.data[16].info5 + '·' + fishdata1.data[16]
              .info6 //门纲目
            this.information2 = fishdata1.data[16].info2 //形态特征
            this.information3 = fishdata1.data[16].info1 //地理分布
            this.information4 = fishdata1.data[16].info3 //栖所生态
            break
          case "fish16 ":
            this.imgurl = fishdata1.data[17].img
            this.name = fishdata1.data[17].name //名字
            this.information1 = fishdata1.data[17].info4 + '·' + fishdata1.data[17].info5 + '·' + fishdata1.data[17]
              .info6 //门纲目
            this.information2 = fishdata1.data[17].info2 //形态特征
            this.information3 = fishdata1.data[17].info1 //地理分布
            this.information4 = fishdata1.data[17].info3 //栖所生态
            break
          case "fish17 ":
            this.imgurl = fishdata1.data[18].img
            this.name = fishdata1.data[18].name //名字
            this.information1 = fishdata1.data[18].info4 + '·' + fishdata1.data[18].info5 + '·' + fishdata1.data[18]
              .info6 //门纲目
            this.information2 = fishdata1.data[18].info2 //形态特征
            this.information3 = fishdata1.data[18].info1 //地理分布
            this.information4 = fishdata1.data[18].info3 //栖所生态
            break
          case "fish18 ":
            this.imgurl = fishdata1.data[19].img
            this.name = fishdata1.data[19].name //名字
            this.information1 = fishdata1.data[19].info4 + '·' + fishdata1.data[19].info5 + '·' + fishdata1.data[19]
              .info6 //门纲目
            this.information2 = fishdata1.data[19].info2 //形态特征
            this.information3 = fishdata1.data[19].info1 //地理分布
            this.information4 = fishdata1.data[19].info3 //栖所生态
            break
          case "fish19 ":
            this.imgurl = fishdata1.data[20].img
            this.name = fishdata1.data[20].name //名字
            this.information1 = fishdata1.data[20].info4 + '·' + fishdata1.data[20].info5 + '·' + fishdata1.data[20]
              .info6 //门纲目
            this.information2 = fishdata1.data[20].info2 //形态特征
            this.information3 = fishdata1.data[20].info1 //地理分布
            this.information4 = fishdata1.data[20].info3 //栖所生态
            break
          case "fish20 ":
            this.imgurl = fishdata1.data[21].img
            this.name = fishdata1.data[21].name //名字
            this.information1 = fishdata1.data[21].info4 + '·' + fishdata1.data[21].info5 + '·' + fishdata1.data[21]
              .info6 //门纲目
            this.information2 = fishdata1.data[21].info2 //形态特征
            this.information3 = fishdata1.data[21].info1 //地理分布
            this.information4 = fishdata1.data[21].info3 //栖所生态
            break

          default:
            break
        }
      }
    }
  }

</script>


<style>
  .D {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-size: 100% 100%;
    color: black;
    overflow: scroll;
  }

  .D_back {
    margin-top: 1vh;
    width: 100vw;
    height: 8vh;
    position: absolute;

  }

  .D_backbtn {
    outline: none;
    font-size: 15px;
    width: 20vw;
    height: 8vh;
    color: #fff;
    text-align: left;
    border: 0;
    /* cursor:pointer; */
    background-color: Transparent;

  }

  .D_background {
    background-color: rgb(255, 255, 255, 0.8);
    border-radius: 10px;
    width: 90vw;
    margin-left: 5vw;
    margin-top: 10vh;
    margin-bottom: 7vh;
    box-shadow: rgb(87, 87, 87) 0px 0px 20px;

  }

  .D_img {
    padding-top: 5vh;
    padding-bottom: 5vh;
    width: 90vw;


  }

  .img {
    margin-left: 10vw;
    width: 80%;
    /* height: 20vh; */
  }

  .D_detial {
    width: 80vw;
    height: 70vh;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    -webkit-box-shadow: #666 0px 0px 10px;
    -moz-box-shadow: #666 0px 0px 10px;
    box-shadow: #666 0px 0px 10px;

  }

  .D_font {
    font-size: 20px;
    font-weight: 800;
    text-align: center;
  }

  .D_information1 {
    font-size: 25px;
    font-weight: 1000;
    text-align: center;

  }

  .D_information2 {
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    padding-top: 3vh;
    padding-bottom: 3vh;

  }

  .D_information3 {
    font-size: 15px;
    padding-left: 3vw;
    padding-right: 3vw;
    padding-top: 3vh;
    padding-bottom: 3vh;

  }

</style>
