import Project from "../../models/project/project.js";

const getAllProjects = async (req, res) => {
  const result = await Project.find({}, "-createdAt -updatedAt");

  if (result) {
    result.reverse();
  }

  res.status(200).json(result);
};

export default getAllProjects;
