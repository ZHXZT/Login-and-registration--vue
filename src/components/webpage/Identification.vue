<template>
    <div class="D">
        <div class="I_back">
            <el-button  class="I_backbtn" icon="el-icon-arrow-left" @click="backtohome()">返回</el-button>
        </div>

        <div class="I_background">

            <div class="I_img1">
              <img :src="imgSrc" class="img1">
            </div>

            <div class="faildiv" :style="fail_style">识别失败！</div>

            <div class="detail" :style="success_style">
                <div class="I_img2"><img v-bind:src="imgurl" class="img2"></div>
                <div class="information">
                    <div class="detailed_information1" v-text="information1"></div>
                    <div class="detailed_information2" v-text="information2"></div>
                    <div class="detailed_information3" v-text="information3"></div>
                    <div @click="todetailpage()" class="detailed_information4" v-text="information4" ></div>
                </div>
            </div>
        </div>
    </div>
    
</template>


<script>
import fishdata1 from '../../assets/js/data.js'

export default {

    data () {
      return {
          fail_style: {
              display:'none'
          },
          success_style: {
              display:'inline-block'
          },
          imgurl: '',
          information1:'',
          information2:'',
          information3:'',
          information4:'点击查看详情',
      }
    },

    computed:{
        imgSrc:function(){
            return this.$store.getters.getimgSrc;
        },
        result:function(){
            return this.$store.getters.getresult;

        },
    },
    mounted(){
      this.comparefish()
    },

    methods: {
        //返回数据对比数据表
        comparefish() {
            switch(this.result){
                case "fish0 ":
                    this.information1=fishdata1.data[1].name
                    this.information2=fishdata1.data[1].info4
                    this.information3=fishdata1.data[1].info5
                    this.imgurl=fishdata1.data[1].img
                    break
                case "fish1 ":
                    this.information1=fishdata1.data[2].name
                    this.information2=fishdata1.data[2].info4
                    this.information3=fishdata1.data[2].info5
                    this.imgurl=fishdata1.data[2].img
                    break
                case "fish2 ":
                    this.information1=fishdata1.data[3].name
                    this.information2=fishdata1.data[3].info4
                    this.information3=fishdata1.data[3].info5
                    this.imgurl=fishdata1.data[3].img
                    break
                case "fish3 ":
                    this.information1=fishdata1.data[4].name
                    this.information2=fishdata1.data[4].info4
                    this.information3=fishdata1.data[4].info5
                    this.imgurl=fishdata1.data[4].img
                    break
                case "fish4 ":
                    this.information1=fishdata1.data[5].name
                    this.information2=fishdata1.data[5].info4
                    this.information3=fishdata1.data[5].info5
                    this.imgurl=fishdata1.data[5].img
                    break
                case "fish5 ":
                    this.information1=fishdata1.data[6].name
                    this.information2=fishdata1.data[6].info4
                    this.information3=fishdata1.data[6].info5
                    this.imgurl=fishdata1.data[6].img
                    break
                case "fish6 ":
                    this.information1=fishdata1.data[7].name
                    this.information2=fishdata1.data[7].info4
                    this.information3=fishdata1.data[7].info5
                    this.imgurl=fishdata1.data[7].img
                    break
                case "fish7 ":
                    this.information1=fishdata1.data[8].name
                    this.information2=fishdata1.data[8].info4
                    this.information3=fishdata1.data[8].info5
                    this.imgurl=fishdata1.data[8].img
                    break
                case "fish8 ":
                    this.information1=fishdata1.data[9].name
                    this.information2=fishdata1.data[9].info4
                    this.information3=fishdata1.data[9].info5
                    this.imgurl=fishdata1.data[9].img
                    break
                case "fish9 ":
                    this.information1=fishdata1.data[10].name
                    this.information2=fishdata1.data[10].info4
                    this.information3=fishdata1.data[10].info5
                    this.imgurl=fishdata1.data[10].img
                    break
                case "fish10 ":
                    this.information1=fishdata1.data[11].name
                    this.information2=fishdata1.data[11].info4
                    this.information3=fishdata1.data[11].info5
                    this.imgurl=fishdata1.data[11].img
                    break
                case "fish11 ":
                    this.information1=fishdata1.data[12].name
                    this.information2=fishdata1.data[12].info4
                    this.information3=fishdata1.data[12].info5
                    this.imgurl=fishdata1.data[12].img

                    break
                case "fish12 ":
                    this.information1=fishdata1.data[13].name
                    this.information2=fishdata1.data[13].info4
                    this.information3=fishdata1.data[13].info5
                    this.imgurl=fishdata1.data[13].img
                    break
                case "fish13 ":
                    this.information1=fishdata1.data[14].name
                    this.information2=fishdata1.data[14].info4
                    this.information3=fishdata1.data[14].info5
                    this.imgurl=fishdata1.data[14].img
                    break
                case "fish14 ":
                    this.information1=fishdata1.data[15].name
                    this.information2=fishdata1.data[15].info4
                    this.information3=fishdata1.data[15].info5
                    this.imgurl=fishdata1.data[15].img
                    break
                case "fish15 ":
                    this.information1=fishdata1.data[16].name
                    this.information2=fishdata1.data[16].info4
                    this.information3=fishdata1.data[16].info5
                    this.imgurl=fishdata1.data[16].img
                    break
                case "fish16 ":
                    this.information1=fishdata1.data[17].name
                    this.information2=fishdata1.data[17].info4
                    this.information3=fishdata1.data[17].info5
                    this.imgurl=fishdata1.data[17].img
                    break
                case "fish17 ":
                    this.information1=fishdata1.data[18].name
                    this.information2=fishdata1.data[18].info4
                    this.information3=fishdata1.data[18].info5
                    this.imgurl=fishdata1.data[18].img
                    break
                case "fish18 ":
                    this.information1=fishdata1.data[19].name
                    this.information2=fishdata1.data[19].info4
                    this.information3=fishdata1.data[19].info5
                    this.imgurl=fishdata1.data[19].img
                    break
                case "fish19 ":
                    this.information1=fishdata1.data[20].name
                    this.information2=fishdata1.data[20].info4
                    this.information3=fishdata1.data[20].info5
                    this.imgurl=fishdata1.data[20].img
                    break
                case "fish20 ":
                    this.information1=fishdata1.data[21].name
                    this.information2=fishdata1.data[21].info4
                    this.information3=fishdata1.data[21].info5
                    this.imgurl=fishdata1.data[21].img
                    break
                
	            default:
                    this.fail_style.display='inline-block'
                    this.success_style.display='none'
                    break
                }

        },

        backtohome(){
            this.$router.push('/Homepage')
        },
        todetailpage() {
            this.$router.push('/Detailpage')
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
    overflow: hidden;
}
.I_background{
    background-color: rgba(255,255,255,1);
    border-radius: 20px;
    height: 80vh;
    width: 90vw;
    margin-left: 5vw;
    margin-top: 12vh;
    -webkit-box-shadow: #666 0px 0px 20px;
    -moz-box-shadow: #666 0px 0px 20px;
    box-shadow: #666 0px 0px 20px;
    /* margin-left: 50px; */

}
.I_back{
    margin-top: 1vh;
    width: 100vw;
    height: 8vh;
    position: absolute;
}
.I_img1 {
    width: 90vw;
    height: 40vh;

}
.img1 {
    margin-left: 10%;
    width: 80%;
    /* height: 20vh; */
    margin-top: 5vh;

}
.img2 {
    width: 35vw;
    margin-top: 8vh;
    margin-left: 5vw;
}
.faildiv {
    width: 80vw;
    margin-left: 5vw;
    margin-top: 8vh;
    height: 26vh;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.6);
    -webkit-box-shadow: #666 0px 0px 20px;
    -moz-box-shadow: #666 0px 0px 20px;
    box-shadow: #666 0px 0px 20px;
    font-size: 35px;
    text-align: center;
    color: red;
    line-height: 26vh;

}
.detail {
    width: 80vw;
    margin-left: 5vw;
    margin-top: 5vh;
    height: 30vh;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.4);
    -webkit-box-shadow: #666 0px 0px 10px;
    -moz-box-shadow: #666 0px 0px 10px;
    box-shadow: #666 0px 0px 10px;
    
}
.I_img2 {
    display: inline;
    width: 40vw;
    height: 30vh;
    float: left;
    
}
.information {
    width: 40vw;
    height: 30vh;
    float: right;
    color: #000;
}
.I_backbtn{
    outline: none;
    font-size: 15px;
    width: 20vw;
    height: 8vh;
    color: #fff;
    text-align: left;
    border:0;
    /* cursor:pointer; */
    background-color: Transparent;
}
.detailed_information1 {
    margin-top: 5vh;
    padding: 1%;
    font-size: 22px;
    text-align: center;
}
.detailed_information2 {
    padding: 1%;
    font-size:16px;
    text-align: center;
}
.detailed_information3 {
    padding: 1%;
    font-size:14px;
    text-align: center;
}
.detailed_information4 {
    padding: 1%;
    margin-top: 4vh;
    font-size: 10px;
    text-align: center;
}

/* .img{
    width: 50px;
    height: 50px;
} */

</style>