const Post = require("../models/Post");

const postsIndex = async (req, res, next) => {
  try {
    const posts = await Post.find().lean();

    res.status(200).json({ data: posts, _message: "postsIndex" });
  } catch (error) {
    next(error);
  }
};

const postsShow = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).lean();

    res
      .status(200)
      .json({ data: post, id: req.params.id, _message: "postsShow" });
  } catch (error) {
    next(error);
  }
};

const postsCreate = async (req, res, next) => {
  try {
    const post = new Post(req.body);
    await post.save();

    res.status(200).json({ data: post, _message: "postsShow" });
  } catch (error) {
    next(error);
  }
};

const postsUpdate = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).json({ data: post, _message: "postsUpdate" });
  } catch (error) {
    next(error);
  }
};

const postsDelete = async (req, res, next) => {
  try {
    await Post.deleteOne(req.params.id);

    res.status(200).json({ _message: "postsDelete" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postsIndex,
  postsShow,
  postsCreate,
  postsUpdate,
  postsDelete,
};
