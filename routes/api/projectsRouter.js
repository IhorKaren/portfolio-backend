import express from "express";
import ctrl from "../../controllers/projects/index.js";

const projectsRouter = express.Router();

projectsRouter.get("/", ctrl.getAllProjects);

export default projectsRouter;
