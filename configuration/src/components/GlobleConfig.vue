<template>
  <div class="setting" ref="globelConfig">
    <el-page-header @back="goBack"></el-page-header>
    <h2 class="title">{{ title }}</h2>
    <div class="select-container">
      <el-switch
        v-model="isRound"
        active-text="开启圆角"
        class="select-text"
      ></el-switch>
    </div>
    <div class="select-container">
      <span class="select-text">请选择背景颜色：</span>
      <el-color-picker
        v-model="color"
        :predefine="predefineColors"
      ></el-color-picker>
    </div>
    <div class="select-container">
      <span class="select-text">请选择字体颜色：</span>
      <el-color-picker
        v-model="fontColor"
        :predefine="fontColors"
      ></el-color-picker>
    </div>
    <div class="select-container">
      <span class="select-text">请选择字体颜色：</span>
      <el-color-picker
        v-model="selectBackgroundColor"
        :predefine="selectBackgroundColor"
      ></el-color-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRound: true,
      color: "#409EFF",
      predefineColors: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%)",
      ],
      fontColor: "red",
      fontColors: ["#eee", "#000", "#ccc", "#484848", "#409EFF"],
      selectBackgroundColor:"#fff",
    };
  },
  name: "GlobelConfig",
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
      this.settings.style.isRound !== undefined &&
        (this.isRound = this.settings.style.isRound);
      this.settings.style.backgroundColor !== undefined &&
        (this.color = this.settings.style.backgroundColor);
      this.settings.style.fontColor !== undefined &&
        (this.fontColor = this.settings.style.fontColor);
        this.settings.style.selectBackgroundColor !== undefined &&
        (this.selectBackgroundColor = this.settings.style.selectBackgroundColor);
    },
    goBack() {
      this.$emit("changeSetingStatus", false);
    },
    change(key, val) {
      this.$emit("changeSettings", undefined, key, val);
    },
  },
  watch: {
    color: function (newVal) {
      this.change("backgroundColor", newVal);
    },
    isRound: function (newVal) {
      this.change("isRound", newVal);
    },
    fontColor: function (newVal) {
      this.change("fontColor", newVal);
    },
    selectBackgroundColor: function (newVal) {
      this.change("selectBackgroundColor", newVal);
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
  height: 60px;
  line-height: 60px;
  vertical-align: middle;
}
.select-container {
  margin-top: 40px;
  width: 100%;
  text-align: left;
}
.select-text {
  margin-left: 20px;
  vertical-align: 16px;
}
.color {
  vertical-align: middle;
}
</style>
