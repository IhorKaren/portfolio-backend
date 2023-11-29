import ctrlWrapper from "../../helpers/ctrlWrapper.js";
import getAllProjects from "./getAllProjects.js";

export default {
  getAllProjects: ctrlWrapper(getAllProjects),
};
