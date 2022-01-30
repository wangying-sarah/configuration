<template>
  <div
    class="container"
    :class="{ round: isRound }"
    :style="{ 'background-color': backgroundColor, color: color }"
  >
    <div class="aside">
      <div class="user-info">
        <div class="avatar">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </div>
        <span class="name">My name</span>
      </div>
      <div class="chat-list">
        <h3 class="title">{{ menuList[selectedIndex] }}</h3>
        <div class="list">
          <ul>
            <li class="list-item" v-for="item in friends" :key="item">
              <el-avatar
                class="item-avatar"
                icon="el-icon-user-solid"
              ></el-avatar>
              <div class="list-item-last-info">
                <span class="list-name">{{ item.name }}</span>
                <span class="content" v-show="showLastMsg">{{
                  item.lastMsg
                }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="chat-menu">
        <div
          class="menu-item"
          :class="{ selected: index == 0 }"
          v-for="(item, index) in menuList"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="main">
      <div class="chat-info">
        <div class="avatar">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </div>
        <span class="name">chatName</span>
        <div class="more-chat">
          <i class="el-icon-phone chat-icon" v-show="suportAudioCall"></i>
          <i
            class="el-icon-video-camera chat-icon"
            v-show="suportVideoCall"
          ></i>
        </div>
      </div>
      <div class="chat-details">
        <div class="details-con">
          <div
            class="message-item"
            v-for="item in messageList"
            :key="item.time"
          >
            <div class="msg-ava">
              <el-avatar :src="item.ava"></el-avatar>
            </div>

            <div class="msg-info">
              <div class="time">{{ item.time }}</div>
              <div class="message-box">
                <span class="message">{{ item.content }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="input-box" v-show="supportSendMessage">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="请输入内容"
            v-model="textarea"
          ></textarea>
          <div class="extra">
            <i class="el-icon-star-on extra-icon"></i>
            <i class="el-icon-folder extra-icon" v-show="supportSendFile"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: ["好友", "群组", "聊天室"],
      isRound: true,
      selectedIndex: 0,
      backgroundColor: "",
      color: "",
      showLastMsg: false,
      suportAudioCall: true,
      suportVideoCall: true,
      supportSendMessage: true,
      supportMsgEditing: false,
      supportMsgForwarding: false,
      supportMsgReceipt: false,
      supportSendFile: false,
      friends: [
        {
          name: "friends1",
          lastMsg: "最新消息",
        },
        {
          name: "Lily",
          lastMsg: "Can you help me take this book?",
        },
        {
          name: "Lucy",
          lastMsg: "new message is coming!",
        },
        {
          name: "好友名字",
          lastMsg: "【表情】",
        },
      ],
      textarea: "请输入内容",
      messageList: [
        {
          name: "chatName",
          time: "10:32",
          content: "message content  ",
          ava: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        },
        {
          name: "chatName",
          time: "10:33",
          content: "long message  sldfjaslkdfjalksdjfksaldfj",
          ava: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        },
      ],
    };
  },
  name: "ConfigMain",
  props: {
    settings: {
      type: Object,
    },
  },
  computed: {},
  methods: {
    initData() {
      this.isRound = this.settings.style.isRound;
      this.backgroundColor = this.settings.style.backgroundColor;
      this.color = this.settings.style.fontColor;
      this.menuList = this.settings.sidebar.menuList;
      this.showLastMsg = this.settings.sidebar.showLastMsg;
      this.suportAudioCall = this.settings.main.suportAudioCall;
      this.suportVideoCall = this.settings.main.suportVideoCallthis;
      this.supportSendMessage = this.settings.main.supportSendMessage;
      this.supportMsgEditing = this.settings.main.supportMsgEditing;
      this.supportMsgForwarding = this.settings.main.supportMsgForwarding;
      this.supportMsgReceipt = this.settings.main.supportMsgReceipt;
      this.supportSendFile = this.settings.main.supportSendFile;
    },
  },
  watch: {
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
.container {
  display: flex;
  flex-direction: row;
  margin: auto;
  height: 500px;
  width: 700px;
  user-select: none;
  -webkit-user-select: none; /* for Chrome */
}
.round {
  border-radius: 10px;
}
.aside {
  display: flex;
  flex-direction: column;
  width: 200px;
  border-right: 1px solid #ccc;
}
.user-info {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
}
.avatar {
  float: left;
  margin-top: 10px;
  margin-left: 20px;
}
.item-avatar {
  float: left;
  margin-top: 10px;
  margin-left: 10px;
}
.name {
  height: 30px;
  line-height: 30px;
}
.list-name {
  display: block;
}
.content {
  display: block;
  overflow: hidden;
  height: 30px;
  line-height: 30px;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.chat-list {
  flex: 1;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  text-align: left;
  overflow: hidden;
}
.title {
  margin-left: 10px;
  height: 40px;
  line-height: 40px;
}
.list {
  flex: 1;
  height: calc(100% - 40px);
  overflow-y: scroll;
}
.list-item {
  margin-bottom: 1px;
  text-align: left;
  height: 60px;
  line-height: 60px;
  background: #d2dfec;
}
.list-item-last-info {
  float: left;
  margin-left: 10px;
  height: 100%;
  width: 140px;
}
.chat-menu {
  display: flex;
  justify-content: space-around;
  height: 60px;
  line-height: 60px;
}
.selected {
  color: #409eff;
}
.main {
  flex: 1;
  flex-direction: column;
}
.chat-info {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
}
.more-chat {
  float: right;
  margin-right: 20px;
}
.chat-icon {
  font-size: 18px;
  color: #409eff;
  margin-right: 10px;
}
.chat-details {
  flex: 1;
  flex-direction: column;
  height: calc(100% - 61px);
}
.details-con {
  height: calc(100% - 100px);
  text-align: left;
}
.input-box {
  position: relative;
  padding: 10px;
  height: 100px;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
}
.extra {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  color: #409eff;
}
.extra-icon {
  margin-left: 10px;
}
textarea {
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  box-sizing: border-box;
}
.message-item {
  display: flex;
  margin-top: 10px;
  width: 100%;
}
.msg-ava {
  margin-top: 0;
  width: 40px;
  line-height: 40px;
}
.msg-info {
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
}
.time {
  margin-left: 10px;
  height: 20px;
  line-height: 20px;
}

.message-box {
  line-height: 20px;
  width: 100%;
}
.message {
  display: inline-block;
  margin-left: 10px;
  padding: 10px;
  min-width: 100px;
  max-width: 420px;
  line-height: 20px;
  background: #d2dfec;
  word-break: break-all;
  border-radius: 4px;
}
</style>
