const { Cv } = require("../../models/cv/cv");

const getActualCv = async (req, res) => {
  const result = await Cv.find({}, "-createdAt -updatedAt");

  res.status(200).json(result);
};

module.exports = {
  getActualCv,
};
