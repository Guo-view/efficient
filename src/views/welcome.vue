<template>
  <el-container>
    <el-aside :width="isCollapse ? '65px' : '200px'">
      <div class="fonticons">
        <div class="imgbox">
          <img src="../assets/v2_rgsxtp.png" alt="" />
        </div>
        <div class="menutext">OA管理系统</div>
      </div>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        text-color="#fff"
        active-text-color="#fff"
        background-color="#7aabf6"
        router
      >
        // eslint-disable-next-line vue/no-use-v-if-with-v-for
        <el-submenu :index="item.path" v-for="item in asideList" :key="item.id">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          // eslint-disable-next-line vue/valid-v-for
          <el-menu-item :index="items.path" v-for="items in item.children" :key="items.id">{{
            items.name
          }}</el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.path">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div class="fold" @click="fold()">
          <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'EfficientWelcome',

  data() {
    return {
      isCollapse: false,
      asideList: []
    }
  },

  mounted() {
    this.getAside()
  },

  methods: {
    getAside() {
      this.$axios.post('/effectes/welcome/aside').then((res) => {
        console.log(res)
        this.asideList = res.data.welcomeAside.data
        console.log(this.asideList)
      })
    },
    fold() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-header {
  display: flex;

  .fold {
    i {
      font-size: 30px;
    }
  }
}
// 侧边栏图标
.fonticons {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  padding: 0 13px;
  line-height: 70px;
  height: 70px;
  .menutext {
    font-size: 20px;
    color: #fff;
  }
  .imgbox {
    padding: 10px 0;
    margin-right: 15px;
  }
  img {
    width: 40px;
  }
}
::v-deep .el-menu {
  background-color: #7aabf6;
  color: #fff;

  i {
    color: #fff;
  }
}

.el-aside {
  background-color: #7aabf6;
  color: #333;
  text-align: center;
  height: 100vh;
  transition: 0.2s width;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-item-group {
  background-color: #7aabf6;
}

.el-menu-item:hover,
.el-submenu__title:hover {
  background-color: #6289c5 !important;
}
.el-menu-item.is-active {
  background-color: #f4c438 !important;
}
</style>
