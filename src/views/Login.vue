<template>
  <div class="login">
    <div class="bg"></div>
    <div class="cat"></div>
    <div class="loginbox">
      <el-tabs
        v-model="activeName"
        type="border-card"
        class="login-tabs"
        stretch
        @tab-click="handleClick"
      >
        <el-tab-pane label="用户登录" name="login" class="login-tabs-tab">
          <el-form
            ref="loginForm"
            :model="user"
            status-icon
            :rules="rules"
            class="login-form"
          >
            <el-form-item label="用户名" prop="username" label-width="88px" class="formitem">
              <el-input type="text" v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" label-width="88px" class="formitem">
              <el-input type="password" v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="btn" type="primary" @click="submitForm('loginForm')"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="用户注册" name="register">
          <el-form
            ref="registerForm"
            :model="user"
            status-icon
            :rules="rules"
            class="login-form"
          >
            <el-form-item label="用户名" prop="username" label-width="88px" class="formitem">
              <el-input type="text" v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" label-width="88px" class="formitem">
              <el-input type="password" v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="surePassword" label-width="88px" class="formitem">
              <el-input type="password" v-model="user.surePassword"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email" label-width="88px" class="formitem">
              <el-input type="email" v-model="user.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="btn" type="primary" @click="submitForm('registerForm')"
                >注册</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      }
      callback();
    };

    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };

    var validateSurePassword = (rule, value, callback) => {
      if (value !== this.user.password) {
        callback(new Error("两次密码不一致"));
      }
      callback();
    };

    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      }
      callback();
    };

    return {
      user: {
        username: "",
        password: "",
        surePassword: "",
        email: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }],
        surePassword: [{ validator: validateSurePassword, trigger: "blur" }],
      },
      activeName: "login",
    };
  },
  methods: {
    ...mapActions("loginModule", ["setUserActions"]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          /**
           * 区分是登录还是注册
           */
          if (this.activeName === "login") {
            /**
             * 登录
             */
            this.setUserActions(this.user);
          }
          if (this.activeName === "register") {
            /**
             * 注册
             */
            this.$api
              .register({
                username: this.user.username,
                password: this.user.password,
                email: this.user.email,
              })
              .then((res) => {
                this.$notify({
                  title: "注册成功(๑•̀ㅂ•́)و✧",
                  message: "请牢记你的用户名和密码~",
                  type: "success",
                });
                console.log(res.data);
              });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleClick(tab, event) {},
  },
};
</script>

<style scoped lang="less">
.login {
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("https://img-blog.csdnimg.cn/4b88aef54684465a9fce29f067890609.jpeg");
    background-size: cover;
    background-position: center;
    z-index: -1;
    opacity: 0.6;
  }
  .cat{
    position: fixed;
    right: -10vw;
    bottom: 0;
    width: 88px;
    height: 88px;
    background: url('../assets/img/h1.gif');
    background-size: cover;
    background-position: center;
    animation: catv 13s linear infinite;
    &::after{
        content: '尝试连接中……';
        position: absolute;
        bottom: 20px;
        right: -180px;
        width: 200px;
        letter-spacing: 5px;
        font-size: 1.2em;
        font-weight: bold;
        color: rgb(95, 95, 95);
        text-shadow: 0 0 3px aquamarine;
        animation: catvv 3s infinite alternate-reverse;
    }
  }
  @keyframes catv {
      0%{transform: translateX(0);}
      100%{transform: translateX(-130vw);}
  }
  @keyframes catvv {
      0%{transform: rotate(15deg);}
      100%{transform: rotate(-15deg);}
  }
  .loginbox {
    width: 450px;
    margin: 0 auto;
    margin-top: 10vh;
    transition: 0.3s;
    letter-spacing: 5px;
    .login-form {
      padding: 30px;
      .formitem{
          margin-bottom: 50px;
      }
    }
    h3 {
      margin-top: 20px;
    }
    .login-tabs {
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.822);
    }
    &:hover {
      transform: scale(1.1);
      box-shadow: -52px 19px 23px 7px rgba(125, 125, 125, 1);
    }
  }
}
</style>