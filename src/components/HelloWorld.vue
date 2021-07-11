<template>
  <div>
    <h1>{{ aa }}</h1>
    <router-link :to="{ path: '/about' }">about</router-link>
    <div>
      <el-row class="tac">
        <el-col :span="4">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template v-slot:title>
                <i class="el-icon-s-platform"></i>
                <span>服务大厅</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">在场服务</el-menu-item>
                <el-menu-item index="1-2">历史服务</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template v-slot:title>
                <i class="el-icon-s-tools"></i>
                <span>系统设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">权限管理</el-menu-item>
                <el-menu-item index="2-2">角色管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template v-slot:title>
                <i class="el-icon-user-solid"></i>
                <span>人员数据</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">人员数量</el-menu-item>
                <el-menu-item index="3-2">人员位置</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template v-slot:title>
                <i class="el-icon-message-solid"></i>
                <span>健康报警</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">心率报警</el-menu-item>
                <el-menu-item index="4-2">血压报警</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      aa: 'aaabbb'
    }
  },
  mounted: function () {
    this.$axios
      .get('http://localhost:8080/account/test')
      .then((res) => {
        this.aa = res
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
