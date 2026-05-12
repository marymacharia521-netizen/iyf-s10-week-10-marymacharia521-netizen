const store = {
  nextId: 3,
  posts: [
    {
      id: 1,
      title: "Welcome to Netizen",
      content: "This is the first sample post.",
      author: "Admin",
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Second Post",
      content: "You can add, edit, and delete posts through the API.",
      author: "Admin",
      createdAt: new Date().toISOString(),
    },
  ],
};

module.exports = store;
