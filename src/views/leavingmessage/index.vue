<template>
  <div class="lm">
    <el-form
      ref="lmForm"
      :model="user"
      status-icon
      :rules="rules"
      class="lm-form"
    >
      <el-form-item
        label="用户名："
        prop="username"
        label-width="88px"
        class="lmitem"
      >
        <el-input type="text" v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item
        label="输入内容："
        prop="message"
        label-width="88px"
        class="lmitem"
      >
        <el-input
          type="textarea"
          placeholder="请输入内容"
          maxlength="1000"
          show-word-limit
          v-model="user.message"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary" @click="submitForm()"
          >发送</el-button
        >
      </el-form-item>
    </el-form>
    <div class="listmsg">
      <div class="listli" v-for="(item, index) in msglist" :key="index">
        <h5>{{ item.name }}</h5>
        <pre>{{ item.message }}</pre>
      </div>
    </div>
    <el-pagination background layout="prev, pager, next" :total="msglist.length" :page-size="25">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "LeavingMessage",
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value.replaceAll(" ", "") === "") {
        callback(new Error("请输入用户名"));
      }
      callback();
    };

    var validateMessage = (rule, value, callback) => {
      if (value.replaceAll(" ", "") === "") {
        callback(new Error("请输入内容"));
      }
      callback();
    };

    return {
      user: {
        username: "",
        message: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        message: [{ validator: validateMessage, trigger: "blur" }],
      },
      msglist: [],
    };
  },
  methods: {
    submitForm() {
      if (
        this.user.username.replaceAll(" ", "") !== "" &&
        this.user.message.replaceAll(" ", "") !== ""
      ) {
        this.$api
          .leavingmessage({
            username: this.user.username,
            message: this.user.message,
          })
          .then((res) => {
            this.$notify({
              title: "留言成功(๑•̀ㅂ•́)و✧",
              message: "~",
              type: "success",
            });
            console.log(res.data);
          });
        this.user.username = "";
        this.user.message = "";
        //点击发送时重新渲染
        this.$api.leavingmessageqq().then((res) => {
          if (res.data.status === 200) {
            this.msglist = res.data.result;
          }
        });
      } else {
        alert("只有不为空时才能发送哦");
      }
    },
  },
  mounted() {
    //初次渲染视图
    this.$api.leavingmessageqq().then((res) => {
      // console.log(res.data);
      if (res.data.status === 200) {
        this.msglist = res.data.result;
      }
    });
  },
  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.lm {
  position: relative;
  .lm-form {
    width: 70vw;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .listmsg {
    width: 70vw;
    margin: 0 auto;
    text-align: left;
    .listli{
      background: papayawhip;
      margin-bottom: 25px;
      padding: 5px;
      h5{
        color: black;
      }
      pre{
        line-height: 1.5em;
        margin-top: 10px;
      }
    }
  }
}
</style>