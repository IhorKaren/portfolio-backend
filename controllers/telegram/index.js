import ctrlWrapper from "../../helpers/ctrlWrapper.js";
import sendMessage from "./telegramSendMessage.js";

export default {
  sendMessage: ctrlWrapper(sendMessage),
};
