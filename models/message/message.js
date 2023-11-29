import { Schema, model } from "mongoose";
import Joi from "joi";
import { handleMongooseError } from "../../helpers/index.js";

// eslint-disable-next-line no-useless-escape
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const messageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const addMessage = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().pattern(emailRegexp).required(),
  text: Joi.string().required(),
});

messageSchema.post("save", handleMongooseError);

const Message = model("message", messageSchema);

const schemas = {
  addMessage,
};

export { Message, schemas };
