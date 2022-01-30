<template>
  <div id="app">
    <el-container class="container">
      <el-header>
        <ConfigHeader
          v-on:resetConfig="resetConfig"
          v-on:saveConfig="saveConfig"
        />
      </el-header>
      <el-container>
        <el-aside width="300px">
          <ConfigAside
            v-on:changeSettingItem="changeSettingItem"
            v-show="!isSetting"
          />
          <component
            :is="currentSetting"
            v-show="isSetting"
            :title="title"
            v-on:changeSetingStatus="changeSetingStatus"
            v-on:changeSettings="changeSettings"
            :settings="newSettings"
          ></component>
        </el-aside>
        <el-main>
          <ConfigMain :settings="newSettings" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ConfigHeader from "./components/ConfigHeader.vue";
import ConfigAside from "./components/ConfigAside.vue";
import GlobleConfig from "./components/GlobleConfig.vue";
import ChatList from "./components/ChatList.vue";
import ChatDetails from "./components/ChatDetails.vue";
import ConfigMain from "./components/ConfigMain.vue";
import { CONFIGTYPE } from "./config/config-type";
import {settings,updateSettings} from "./config/settings"

export default {
  data() {
    return {
      isSetting: false,
      currentSetting: "",
      title: "",
      //配置项
      // settings: {
        
      // },
      //修改后的配置项
      newSettings: {},
    };
  },
  name: "App",
  components: {
    ConfigHeader,
    ConfigAside,
    GlobleConfig,
    ChatList,
    ChatDetails,
    ConfigMain,
  },
  mounted() {
    this.initData();
  },
  methods: {
    /**
     * 拷贝一份配置数据
     */
    initData() {
      this.newSettings = JSON.parse(JSON.stringify(settings));
    },
    /**
     * 修改配置数据
     */
    changeSettings(source = this.newSettings, findKey, newValue) {
      let keyList = [];
      if (typeof source === "object" && !Array.isArray(source)) {
        keyList = Object.keys(source);
      }
      if (keyList.indexOf(findKey) > -1) {
        source[findKey] = newValue;
        return;
      } else if (keyList.length > 0) {
        for (var key in source) {
          this.changeSettings(source[key], findKey, newValue);
        }
      }
    },
    /**
     * 清空修改
     */
    resetConfig() {
      this.initData();
    },
    /**
     * 保存配置
     */
    saveConfig() {
      updateSettings(this.newSettings)
      /**
       * todo 上传数据到服务器
       */
    },
    /**
     * 修改配置
     */
    changeSettingItem(sel) {
      this.isSetting = true;
      this.currentSetting = sel;
      this.title = CONFIGTYPE[this.currentSetting];
    },
    changeSetingStatus(flag) {
      this.isSetting = flag;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  height: 100%;
  width: 100%;
}
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
