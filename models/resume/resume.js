const { Schema, model } = require("mongoose");

const resumeSchema = new Schema(
  {
    link: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Resume = model("cv", resumeSchema);

module.exports = {
  Resume,
};
