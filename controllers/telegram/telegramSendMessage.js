import { Message } from "../../models/message/message.js";


const sendMessage = async (req, res) => {
  const newMessage = await Message.create({ ...req.body });

  res.status(201).json(newMessage);
};

export default sendMessage;
