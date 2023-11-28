const { Schema, model } = require("mongoose");

const cvSchema = new Schema(
  {
    link: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Cv = model("cv", cvSchema);

module.exports = {
  Cv,
};
