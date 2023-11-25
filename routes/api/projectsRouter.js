const express = require("express");

const ctrl = require("../../controllers/projects");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/project/project");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

module.exports = router;
