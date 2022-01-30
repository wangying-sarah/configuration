<template>
  <div class="setting">
    <el-page-header @back="goBack"></el-page-header>
    <h2 class="title">{{ title }}</h2>
    <div class="config-item">
      <el-switch
        class="switch"
        v-model="supportSendMessage"
        active-text="启用消息发送功能"
      ></el-switch>
    </div>
    <div class="config-item">
      <el-switch
        class="switch"
        v-model="suportAudioCall"
        active-text="启用音频通话"
      ></el-switch>
    </div>
    <div class="config-item">
      <el-switch
        class="switch"
        v-model="suportVideoCall"
        active-text="启用视频通话"
      ></el-switch>
    </div>
    <div class="config-item">
      <el-switch
        class="switch"
        v-model="supportMsgEditing"
        active-text="启用消息编辑功能"
      ></el-switch>
    </div>
    <div class="config-item">
      <el-switch
        class="switch"
        v-model="supportMsgReceipt"
        active-text="启用消息回执"
      ></el-switch>
    </div>
    <div class="config-item">
      <el-switch
        class="switch"
        v-model="supportMsgForwarding"
        active-text="启用消息转发功能"
      ></el-switch>
    </div>
    <div class="config-item">
      <el-switch
        class="switch"
        v-model="supportSendFile"
        active-text="启用发送文件"
      ></el-switch>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      supportSendMessage: true,
      suportAudioCall: true,
      suportVideoCall: true,
      supportMsgReceipt: false,
      supportMsgEditing: false,
      supportMsgForwarding: false,
      supportSendFile: false,
    };
  },
  name: "ChatDetails",
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
      this.settings.main.suportAudioCall !== undefined &&
        (this.suportAudioCall = this.settings.main.suportAudioCall);
      this.settings.main.suportVideoCall !== undefined &&
        (this.suportVideoCall = this.settings.main.suportVideoCall);
      this.settings.main.supportSendMessage !== undefined &&
        (this.supportSendMessage = this.settings.main.supportSendMessage);
      this.settings.main.supportMsgEditing !== undefined &&
        (this.supportMsgEditing = this.settings.main.supportMsgEditing);
      this.settings.main.supportMsgForwarding !== undefined &&
        (this.supportMsgForwarding = this.settings.main.supportMsgForwarding);
      this.settings.main.supportMsgReceipt !== undefined &&
        (this.supportMsgReceipt = this.settings.main.supportMsgReceipt);
      this.settings.main.supportSendFile !== undefined &&
        (this.supportSendFile = this.settings.main.supportSendFile);
    },
    goBack() {
      this.$emit("changeSetingStatus", false);
    },
    change(key, val) {
      this.$emit("changeSettings", undefined, key, val);
    },
  },
  watch: {
    suportAudioCall: function (val) {
      this.change("suportAudioCall", val);
    },
    suportVideoCall: function (val) {
      this.change("suportVideoCall", val);
    },
    supportSendMessage: function (val) {
      this.change("supportSendMessage", val);
    },
    supportMsgEditing: function (val) {
      this.change("supportMsgEditing", val);
    },
    supportMsgForwarding: function (val) {
      this.change("supportMsgForwarding", val);
    },
    supportMsgReceipt: function (val) {
      this.change("supportMsgReceipt", val);
    },
    supportSendFile: function (val) {
      this.change("supportSendFile", val);
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
  width: 100%;
  text-align: left;
}
.switch {
  margin-left: 30px;
}
</style>
