import { Message } from "../../models/message/message.js";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();

const { TELEGRAM_BOT_TOKEN, URL } = process.env;

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);
bot.setWebHook(`${URL}/webhook`);

const sendMessage = async (req, res) => {
  const { name, email, text } = req.body;

  const newMessage = await Message.create({ ...req.body });

  bot.processUpdate();

  bot.on("message", (msg) => {
    const {
      chat: { id },
    } = msg;

    bot.sendMessage(id, `${name}, ${email}, ${text}`);

    bot.executeCommand(id, "/start");
  });

  res.status(201).json(newMessage);
};

export default sendMessage;
