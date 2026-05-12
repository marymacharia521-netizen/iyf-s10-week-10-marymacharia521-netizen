const express = require("express");

const {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} = require("../controllers/postsController");

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
