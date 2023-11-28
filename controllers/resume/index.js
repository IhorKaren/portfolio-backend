const { ctrlWrapper } = require("../../helpers");

const { getActualResume } = require("./getActualResume");

module.exports = {
  getActualResume: ctrlWrapper(getActualResume),
};
