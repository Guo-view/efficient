<template>
  <div class="login-warpper">
    <div class="input-box">
      <h1>OA系统登录</h1>
      <div class="users">
        <el-input v-model="username" placeholder="请输入用户名" prefix-icon="el-icon-user-solid" />
      </div>
      <div class="password">
        <el-input v-model="password" placeholder="请输入密码" prefix-icon="el-icon-lock" />
        <span>忘记密码？</span>
      </div>
      <div class="code">
        <el-input v-model="codeimg" placeholder="请输入验证码" />
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-button type="primary">主要按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EfficientLogin',

  data() {
    return {
      username: '',
      password: '',
      codeimg: ''
    }
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.login-warpper {
  width: 100%;
  height: 930px;
  background-image: url('../assets/loginimage.png');
  background-size: 1960px;
  background-repeat: no-repeat;
  position: relative;

  .input-box {
    background-color: #fff;
    width: 495px;
    height: 463px;
    border-radius: 16px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    padding: 30px 40px;

    .users,
    .password,
    .code {
      margin-top: 44px;
    }

    .password span {
      display: inline-block;
      width: 389px;
      text-align: right;
    }

    .code {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      width: 495px;
      padding-right: 53px;
      padding-left: 30px;

      img {
        width: 119px;
        height: 46px;
      }
    }

    .el-button {
      width: 389px;
      margin-top: 44px;
    }
  }
}

::v-deep .code .el-input__inner {
  width: 248px !important;
}

::v-deep .el-input__inner {
  width: 389px;
  height: 46px;
  border-radius: 10px;
}
</style>
