const { ctrlWrapper } = require("../../helpers");

const { addProject } = require("./addProject");

module.exports = {
  addProject: ctrlWrapper(addProject),
};
