<template>
  <div class="home-con">
    <HomeBanner />
    <div class="body">
      <div :class="{box:true,boxmargin: index % 2==0 ? true : false}" v-for="(item, index) in boxv" :key="index">
        <div class="flexdiv">
          <div class="leftimg"><img :src="item.imgurl" alt="" /></div>
          <div class="rightdesc">
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
            <router-link class="rt" :to="item.path">立即购买</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBanner from "./Homebanner.vue";
export default {
  name: "HomeContent",
  components: {
    HomeBanner,
  },
  data() {
    return {
      boxv: [
        {
          id: 1,
          imgurl: require("../../assets/img/lm.gif"),
          title: "开发产品",
          desc: "开发产品描述",
          path: 'detail/devproduct'
        },
        {
          id: 2,
          imgurl: require("../../assets/img/lm.gif"),
          title: "品牌营销",
          desc: "品牌营销帮助你的产品更好地找到定位",
          path: 'detail/brandmarketing'
        },
        {
          id: 3,
          imgurl: require("../../assets/img/lm.gif"),
          title: "使命必达",
          desc: "使命必达快速迭代永远保持最前端的速度",
          path: 'detail/mission',
        },
        {
          id: 4,
          imgurl: require("../../assets/img/lm.gif"),
          title: "勇攀高峰",
          desc: "帮你勇闯高峰，到达事业的顶峰",
          path: 'detail/height'
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.home-con {
  min-width: 1000px;
  max-width: 1920px;
  height: auto;
  position: relative;
//   border: 1px solid rgb(70, 178, 140);
  .body {
    margin-top: 25px;
    .box {
      width: 49%;
      height: 160px;
      background: white;
      display: inline-block;
      margin-top: 15px;
      padding-left: 25px;
      box-sizing: border-box;
      cursor: default;
      .flexdiv{
          display: flex;
          justify-content: space-between;
          align-items: center;
          .leftimg{
              width: 150px;
              img{
                  width: 100%;
              }
          }
          .rightdesc{
              width: 70%;
              text-align: center;
              h4{
                  font-size: 1.4em;
              }
              p{
                  margin-top: 15px;
                  margin-bottom: 25px;
              }
              .rt{
                  background: rgb(70, 178, 140);
                  padding: 10px 20px;
                  color: white;
              }
          }
      }
    }
    .boxmargin{
        margin-right: 2%;
    }
  }
}
</style>