const { ctrlWrapper } = require("../../helpers");

const { getAllProjects } = require("./getAllProjects");

module.exports = {
  getAllProjects: ctrlWrapper(getAllProjects),
};
