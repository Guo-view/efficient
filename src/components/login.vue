<template>
  <div class="login-warpper">
    <!-- 表单父盒子 -->
    <div class="input-box">
      <h1>OA系统登录</h1>
      <div class="users">
        <el-input v-model="username" placeholder="请输入用户名" prefix-icon="el-icon-user-solid" />
      </div>
      <div class="password">
        <el-input v-model="password" placeholder="请输入密码" prefix-icon="el-icon-lock" />
        <span @click="dialogVisible = true">忘记密码？</span>
      </div>
      <div class="code">
        <el-input v-model="codeimg" placeholder="请输入验证码" />
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-button type="primary" @click="gologin()">登录</el-button>
    </div>
    <!-- 版权标盒子 -->
    <div class="trademark">&copy;2022美团版权所有京ICP证070791号京公网安备11010502025545号</div>
    <!-- 忘记密码对话框 -->
    <el-dialog title="修改密码" :visible.sync="dialogVisible" width="30%">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" :label-width="formLabelWidth">
          <el-input v-model="form.newpassword" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'EfficientLogin',

  data() {
    return {
      username: '',
      password: '',
      codeimg: '',
      dialogVisible: false,
      form: {
        username: '',
        password: '',
        newpassword: ''
      },
      formLabelWidth: '80px'
    }
  },

  mounted() {},

  methods: {
    gologin() {
      this.$axios.post('/effectes/home/loginsearch').then((res) => {
        console.log(res)
        this.$router.push('/welcome')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-warpper {
  width: 100%;
  height: 945px;
  background-image: url('../assets/loginimage.png');
  background-size: 1920px;
  background-repeat: no-repeat;
  position: relative;

  .trademark {
    position: absolute;
    bottom: 100px;
    left: 50%;
    margin-left: -240px;
  }

  .input-box {
    background-color: #fff;
    width: 495px;
    height: 420px;
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
      width: 389px;
      margin-top: 44px;
    }

    .users,
    .password {
      padding: 0 53px;
    }

    .password span {
      display: inline-block;
      width: 389px;
      text-align: right;
      color: darkviolet;
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

::v-deep .input-box .el-input__inner {
  width: 389px;
  height: 46px;
  border-radius: 10px;
}

::v-deep .el-dialog__header {
  text-align: left !important;
}
</style>
