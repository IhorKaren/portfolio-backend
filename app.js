import express from "express";
import logger from "morgan";
import cors from "cors";
import projectsouter from "./routes/api/projectsRouter.js";
import messagesRouter from './routes/api/messagesRouter.js'

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/projects", projectsouter);
app.use("/message", messagesRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  console.log(err);
  res.status(status).json({ message });
});

export default app;
