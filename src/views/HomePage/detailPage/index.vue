<template>
  <div class="detail">
    <div class="listnav">
      <div class="img"><img src="../../../assets/img/lm.gif" alt=""></div>
      <ul>
        <li v-for="(item,index) in listli" :key="index"><router-link class="rt" active-class="red" :to="item.path">{{item.text}}</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
      return {
          listli:[
              {
                  id: 1,
                  text: '开发产品',
                  path: 'devproduct'
              },
              {
                  id: 2,
                  text: '营销品牌',
                  path: 'brandmarketing'
              },
              {
                  id: 3,
                  text: '使命必达',
                  path: 'mission'
              },
              {
                  id: 4,
                  text: '勇攀高峰',
                  path: 'height'
              },
          ]
      }
  },
};
</script>

<style lang="less" scoped>
.detail {
  .listnav {
    width: 180px;
    min-width: 180px;
    height: 280px;
    background: white;
    position: absolute;
    .img{
        width: 180px;
        img{
            width: 80%;
        }
    }
    li{
        .rt{
            display: block;
            height: 30px;
            line-height: 30px;
        }
    }
  }
}
.red{
    background: red;
}
</style>