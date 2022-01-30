<template>
  <div class="aside">
    <div class="item" v-for="item in items" :key="item" @click="select(item)">
      {{ configType[item] }}
    </div>
  </div>
</template>

<script>
import { CONFIGTYPE } from "../config/config-type";
export default {
  data() {
    return {
      configType: {},
      items: [],
    };
  },
  name: "ConfigAside",
  methods: {
    /**
     * init页面展示数据
     */
    initData() {
      this.configType = CONFIGTYPE;
      this.items = Object.keys(this.configType);
    },
    /**
     * 点击进入编辑界面
     */
    select(sel) {
      this.$emit("changeSettingItem", sel);
    },
  },
  mounted() {
    this.initData();
  },
};
</script>

<style scoped>
.item {
  margin-top: 1px;
  height: 50px;
  line-height: 50px;
  background: #fff;
  cursor: pointer;
}
</style>
