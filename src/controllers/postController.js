const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const post = await Post.create({
    ...req.body,
    user: req.user.id
  });
  res.json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find({ user: req.user.id });
  res.json(posts);
};
