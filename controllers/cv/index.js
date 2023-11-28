const { ctrlWrapper } = require("../../helpers");

const { getActualCv } = require("./getActualCv");

module.exports = {
  getActualCv: ctrlWrapper(getActualCv),
};
