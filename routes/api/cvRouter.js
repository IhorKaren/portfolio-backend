const express = require("express");

const ctrl = require("../../controllers/cv");

const router = express.Router();

router.get("/", ctrl.getActualCv);

module.exports = router;
