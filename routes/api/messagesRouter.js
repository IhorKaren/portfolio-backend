import express from "express";
import ctrl from "../../controllers/telegram/index.js";
import { validateBody } from "../../middlewares/index.js";
import {schemas} from "../../models/message/message.js";

const messagesRouter = express.Router();

messagesRouter.post("/", validateBody(schemas.addMessage), ctrl.sendMessage);

export default messagesRouter;
