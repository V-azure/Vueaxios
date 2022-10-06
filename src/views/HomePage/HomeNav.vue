<template>
  <div class="home-nav">
    <div class="title_all">全部产品</div>
    <div class="list" v-for="(pro, index) in list" :key="index">
      <div class="title_list">{{ pro.listtitle }}</div>
      <ul v-for="(item, d) in pro.listli" :key="d">
        <li class="list_li">
          <a href="#">{{ item.text }}</a>
        </li>
        <span class="hot hotactive" v-if="item.hot==true">HOT</span>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNav",
  data() {
    return {
      list: [
        {
          id: 1,
          listtitle: "手机应用类",
          listli: [
            {
              id: 1,
              text: "91助手",
              hot:false
            },
            {
              id: 2,
              text: "豌豆荚",
              hot:false
            },
            {
              id: 3,
              text: "金山毒霸",
              hot:true
            },
          ],
        },
        {
          id: 2,
          listtitle: "PC产品类",
          listli: [
            {
              id: 1,
              text: "WebStorm",
              hot:false
            },
            {
              id: 2,
              text: "Vscode",
              hot:true
            },
            {
              id: 3,
              text: "Sublime",
              hot:false
            },
          ],
        },
        {
          id: 3,
          listtitle: "手机应用类2",
          listli: [
            {
              id: 1,
              text: "91助手",
              hot:false
            },
            {
              id: 2,
              text: "豌豆荚",
              hot:true
            },
            {
              id: 3,
              text: "金山毒霸",
              hot:false
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.home-nav {
  width: 220px;
  min-width: 220px;
  height: 455px;
  background: white;
  overflow: hidden;
  margin-right: 30px;
  .title_all {
    font-size: 1.5em;
    font-weight: bold;
    color: white;
    height: 30px;
    width: 100%;
    line-height: 30px;
    background: rgb(70, 178, 140);
    padding: 8px;
    text-align: left;
  }
  .list {
    height: auto;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    .title_list {
      font-size: 1.16em;
      font-weight: bold;
      color: black;
      margin-bottom: 10px;
      text-align: left;
    }
    ul {
        display: flex;
        .list_li {
          margin-bottom: 8px;
          margin-right: 5px;
        }
        .hot{
            height: 20px;
            font-size: small;
            line-height: 14px;
            padding: 3px;
            box-sizing: border-box;
        }
      }
  }
  .hotactive{
      background: red;
      color: white;
  }
}
</style>