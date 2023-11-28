const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const projectsRouter = require("./routes/api/projectsRouter");
const cvRouter = require("./routes/api/cvRouter");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/projects", projectsRouter);
app.use("/cv", cvRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  console.log(err);
  res.status(status).json({ message });
});

module.exports = app;
