const express = require("express");

const ctrl = require("../../controllers/resume");

const router = express.Router();

router.get("/", ctrl.getActualResume);

module.exports = router;
