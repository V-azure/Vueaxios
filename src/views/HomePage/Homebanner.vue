<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in detail" :key="item.id">
          <div class="item-pic">
            <img :src="item.imgs" />
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "HomeBanner",
  data() {
    return {
      detail: [
        {
          id: 1,
          imgs: require("../../assets/img/2.jpg"),
        },
        {
          id: 2,
          imgs: require("../../assets/img/4.jpg"),
        },
      ],
    };
  },
  mounted() {
    //初始化
    setTimeout(() => {
      new Swiper(".swiper-container", {
        loop: true,
        autoplay: 3000,
        // 如果需要分页器
        pagination: ".swiper-pagination",
        // 如果需要前进后退按钮
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
      });
    });
  },
};
</script>

<style lang="less" scoped>
.banner {
  min-width: 1000px;
  max-width: 1920px;
  height: 455px;
  position: relative;
  border: 1px solid rgb(70, 178, 140);
    overflow: hidden;

  .swiper-container {
    position: absolute;
    width: 100%;

    img {
      width: 67%;
      margin: 0 auto;
      display: block;
    }
  }
}
</style>