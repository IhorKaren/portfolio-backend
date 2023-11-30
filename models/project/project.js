import { Schema, model } from "mongoose";
import { handleMongooseError } from "../../helpers/index.js";

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
    info: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      enum: [
        "HTML",
        "SASS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
      ],
    },
    links: {
      repository: String,
      livepage: String,
    },
  },
  { versionKey: false, timestamps: true }
);

projectSchema.post("save", handleMongooseError);

const Project = model("project", projectSchema);

export default Project;
