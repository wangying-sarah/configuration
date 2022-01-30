<template>
  <div class="header">
    <div class="setting">
      <i class="el-icon-setting"></i>
      <span>app builder</span>
    </div>
    <div class="save">
        <el-button @click="reset">重置</el-button>
        <el-button @click="save">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfigHeader",
  props: {},
  methods:{
    reset(){
        this.$emit('resetConfig')
    },
    save(){
        this.$emit('saveConfig')
    },
  }
};

</script>

<style scoped>
.setting {
  float: left;
}
.save{
    float: right;
}
</style>
