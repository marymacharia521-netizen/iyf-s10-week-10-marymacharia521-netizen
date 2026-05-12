const express = require("express");

const apiRouter = require("./routes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(logger);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Netizen API is running",
  });
});

app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.use(errorHandler);

module.exports = app;
