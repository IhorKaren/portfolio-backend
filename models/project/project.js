const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../../helpers");

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
    gallery: {
      type: [String],
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      enum: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
      ],
    },
  },
  { versionKey: false, timestamps: true }
);

projectSchema.post("save", handleMongooseError);

const Project = model("project", projectSchema);

module.exports = {
  Project,
};
