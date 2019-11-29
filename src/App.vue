<template>
  <el-container id="bodyMain">
    <!-- <el-header class='color-primary'>
      <h3>国际化文件导出程序</h3>
      
    </el-header>-->
    <el-container class="overflowh">
      <el-aside width="80px">
        <el-row class="tac">
          <el-col>
            <el-menu
              default-active="2"
              background-color="#58B7FF"
              text-color="#dfdfdf"
              active-text-color="#fff"
            >
              <el-menu-item index="2">
                <router-link class="router-link" tag="div" to="/"
                  ><i
                    class="el-icon-printer"
                  /><br /><br />国际化工具</router-link
                >

                <!-- <span slot="title"></span> -->
              </el-menu-item>
              <el-menu-item index="3">
                <router-link class="router-link" tag="div" to="/about"
                  ><i class="el-icon-chat-round" /><br /><br />关于</router-link
                >
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main style="display:flex">
        <router-view />
      </el-main>
    </el-container>

    <el-footer height="20px" class="tal">v1.0.0</el-footer>
  </el-container>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
body,
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 12px;
  line-height: 12px !important;
  #bodyMain {
    height: 100%;
  }
}
.el-menu-item,
.el-submenu__title {
  line-height: 12px !important;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.el-header,
.el-footer {
  background-color: #20a0ff;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #58b7ff;
  color: #fff;
  text-align: center;
  line-height: 200px;
}
.el-menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-main {
  // background-color: #e9eef3;
  // color: #333;
  text-align: center;
}
.el-icon-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  line-height: 12px;
}
.router-link {
  font-size: 12px;
}
.fonts {
  font-size: 12px;
  font-weight: 400;
}
.el-checkbox__label {
  font-size: 12px !important;
  font-weight: 400;
}
.tal {
  text-align: left;
  line-height: 20px;
  padding-left: 8px;
}
.overflowh {
  overflow: hidden;
}
</style>
