const { Resume } = require("../../models/resume/resume");

const getActualResume = async (req, res) => {
  const result = await Resume.find({}, "-createdAt -updatedAt");

  res.status(200).json(result);
};

module.exports = {
  getActualResume,
};
