const store = require("../data/store");

function getPosts(req, res) {
  res.json(store.posts);
}

function getPostById(req, res, next) {
  const postId = Number(req.params.id);
  const post = store.posts.find((item) => item.id === postId);

  if (!post) {
    const error = new Error("Post not found");
    error.statusCode = 404;
    return next(error);
  }

  return res.json(post);
}

function createPost(req, res, next) {
  const { title, content, author = "Anonymous" } = req.body;

  if (!title || !content) {
    const error = new Error("Title and content are required");
    error.statusCode = 400;
    return next(error);
  }

  const newPost = {
    id: store.nextId++,
    title,
    content,
    author,
    createdAt: new Date().toISOString(),
  };

  store.posts.push(newPost);

  return res.status(201).json(newPost);
}

function updatePost(req, res, next) {
  const postId = Number(req.params.id);
  const post = store.posts.find((item) => item.id === postId);

  if (!post) {
    const error = new Error("Post not found");
    error.statusCode = 404;
    return next(error);
  }

  const { title, content, author } = req.body;

  if (title !== undefined) {
    post.title = title;
  }

  if (content !== undefined) {
    post.content = content;
  }

  if (author !== undefined) {
    post.author = author;
  }

  post.updatedAt = new Date().toISOString();

  return res.json(post);
}

function deletePost(req, res, next) {
  const postId = Number(req.params.id);
  const postIndex = store.posts.findIndex((item) => item.id === postId);

  if (postIndex === -1) {
    const error = new Error("Post not found");
    error.statusCode = 404;
    return next(error);
  }

  const [deletedPost] = store.posts.splice(postIndex, 1);

  return res.json({
    message: "Post deleted successfully",
    post: deletedPost,
  });
}

module.exports = {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
};
