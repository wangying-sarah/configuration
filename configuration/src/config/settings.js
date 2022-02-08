var settings = {
  style: {
    backgroundColor: "#fff",
    fontColor: "#333",
    isRound: true,
    selectBackgroundColor: "#d2dfec",
  },
  sidebar: {
    menuList: ["好友", "群组", "聊天室"],
    showLastMsg: false,
  },
  main: {
    suportAudioCall: true,
    suportVideoCall: true,
    supportSendMessage: true,
    supportMsgEditing: false,
    supportMsgForwarding: false,
    supportMsgReceipt: false,
    supportSendFile: false,
  },
}
function updateSettings(newData) {
  settings = JSON.parse(JSON.stringify(newData));
}
export {
  settings,
  updateSettings
}