const express = require("express");

const postsRouter = require("./posts");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Netizen API",
  });
});

router.use("/posts", postsRouter);

module.exports = router;
