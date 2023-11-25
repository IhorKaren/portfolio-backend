const express = require("express");

const ctrl = require("../../controllers/projects");

const router = express.Router();

router.get("/", ctrl.getAllProjects);

module.exports = router;
