const { Project } = require("../../models/project/project");

const getAllProjects = async (req, res) => {
  const result = await Project.find({}, "-createdAt -updatedAt");

  res.status(200).json(result);
};

module.exports = {
  getAllProjects,
};
