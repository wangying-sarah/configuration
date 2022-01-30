<template>
  <div class="setting">
    <el-page-header @back="goBack"></el-page-header>
    <h2 class="title">{{ title }}</h2>
    <div class="config-item">
      <div class="enters">菜单:</div>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="好友"></el-checkbox>
        <el-checkbox label="群组"></el-checkbox>
        <el-checkbox label="聊天室"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="config-item">
      <el-switch
        v-model="showNewMessage"
        active-text="展示最新一条消息"
        class="message-switch"
      ></el-switch>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: [],
      showNewMessage: true,
    };
  },
  name: "ChatList",
  props: {
    title: {
      type: String,
      isRequire: true,
    },
    settings: {
      type: Object,
    },
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.settings.sidebar.menuList !== undefined &&
        (this.checkList = this.settings.sidebar.menuList);
      this.settings.sidebar.showLastMsg != undefined &&
        (this.showNewMessage = this.settings.sidebar.showLastMsg);
    },
    goBack() {
      this.$emit("changeSetingStatus", false);
    },
    change(key, val) {
      this.$emit("changeSettings", undefined, key, val);
    },
  },
  watch: {
    checkList: function (val) {
      this.change("menuList", val);
    },
    showNewMessage: function (val) {
      this.change("showLastMsg", val);
    },
    settings: {
      handler() {
        this.initData();
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.title {
  height: 100px;
  line-height: 100px;
}
.config-item {
  margin-bottom: 40px;
}
.enters {
  margin-left: 35px;
  width: 100%;
  text-align: left;
  line-height: 40px;
}
.message-switch {
  margin-left: -80px;
}
</style>
